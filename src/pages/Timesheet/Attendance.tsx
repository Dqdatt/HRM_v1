import { useState, useEffect } from "react";
import { Download, Loader2, AlertCircle, Calendar } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { createClient } from "@supabase/supabase-js";

// Khởi tạo Supabase Client
const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://anasxyzzhctfryzhlqvm.supabase.co";
const SUPABASE_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "sb_publishable_hnuq9KVyiwt96UYZxtshpA_RtoWykem";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const ATTENDANCE_LEGEND = [
  {
    label: "Nghỉ có lương",
    color: "bg-[#22C55E]",
    textColor: "text-white",
    text: "1",
  },
  {
    label: "Nghỉ đột xuất",
    color: "bg-[#eb6a6a]",
    textColor: "text-white",
    text: "OFF",
  },
  {
    label: "Nghỉ cố định",
    color: "bg-[#4a4a4a]",
    textColor: "text-white",
    text: "OFF",
  },
  {
    label: "Làm 1/2",
    color: "bg-[#FEF9C3]",
    textColor: "text-[#854D0E]",
    text: "1/2",
  },
  {
    label: "Công tác",
    color: "bg-[#FFEDD5]",
    textColor: "text-[#9A3412]",
    text: "CT",
  },
  {
    label: "Dưới 8H",
    color: "bg-[#FDBA74]",
    textColor: "text-transparent",
    text: "",
  },
  {
    label: "Nghỉ việc",
    color: "bg-[#E9D5FF]",
    textColor: "text-[#6B21A8]",
    text: "OUT",
  },
];

const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

const getDayOfWeek = (day: number, monthStr: string, yearStr: string) => {
  const month = parseInt(monthStr) - 1;
  const year = parseInt(yearStr);
  const date = new Date(year, month, day);
  const days = ["CN", "T.HAI", "T.BA", "T.TƯ", "T.NĂM", "T.SÁU", "T.BẢY"];
  return { name: days[date.getDay()], isSunday: date.getDay() === 0 };
};

const getCellStyle = (val: string, color: any) => {
  const text = (val || "").toUpperCase().trim();
  const r = color?.red || 0;
  const g = color?.green || 0;
  const b = color?.blue || 0;

  if (r < 0.3 && g > 0.8 && b < 0.3) return "bg-[#22C55E] text-white font-bold";
  if (r > 0.9 && g > 0.6 && g < 0.8 && b > 0.4 && b < 0.6)
    return "bg-[#FDBA74] text-transparent";

  if (text === "OFF") {
    const isRedBg = r > 0.7 && g < 0.4;
    return isRedBg ? "bg-[#eb6a6a] text-white" : "bg-[#4a4a4a] text-white";
  }

  switch (text) {
    case "1":
    case "2":
      return "bg-[#DCFCE7] text-[#166534] font-bold border border-green-100";
    case "CT":
      return "bg-[#FFEDD5] text-[#9A3412] font-bold";
    case "1/2":
      return "bg-[#FEF9C3] text-[#854D0E] font-bold border border-yellow-200";
    case "X":
      return "bg-[#F0F9FF] text-[#075985]";
    case "OUT":
      return "bg-[#E9D5FF] text-[#6B21A8]";
    default:
      return val ? "bg-gray-50 text-gray-400" : "bg-white text-transparent";
  }
};

export function Attendance() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [sheetsList, setSheetsList] = useState<
    { id: string; month: number; year: number }[]
  >([]);
  const [selectedSheetId, setSelectedSheetId] = useState<string>("");
  const [daysInMonth, setDaysInMonth] = useState(31);

  const [selectedMonth, setSelectedMonth] = useState(
    () => localStorage.getItem("att_month") || "05",
  );
  const [selectedYear, setSelectedYear] = useState(
    () => localStorage.getItem("att_year") || "2026",
  );

  // Biến trạng thái để ép component render lại khi có tín hiệu Realtime từ DB
  const [refreshKey, setRefreshKey] = useState(0);

  const fetchSheetList = async () => {
    try {
      const { data: sheets, error } = await supabase
        .from("attendance_sheets")
        .select("id, month, year")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSheetsList(sheets);
    } catch (e: any) {
      setError(e.message);
    }
  };

  useEffect(() => {
    fetchSheetList();

    // Lắng nghe sự thay đổi trên bảng attendance_sheets
    const channel = supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "attendance_sheets" },
        () => {
          fetchSheetList();
          // Ép reload lại dữ liệu bảng chấm công bên dưới ngay lập tức
          setRefreshKey((prev) => prev + 1);
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Filter Sheet tự động theo bộ lọc Tháng / Năm UI
  useEffect(() => {
    localStorage.setItem("att_month", selectedMonth);
    localStorage.setItem("att_year", selectedYear);

    const m = parseInt(selectedMonth);
    const y = parseInt(selectedYear);

    const matchedSheet = sheetsList.find((s) => s.month === m && s.year === y);
    if (matchedSheet) {
      setSelectedSheetId(matchedSheet.id);
    } else {
      setSelectedSheetId("");
      setData([]);
    }
  }, [selectedMonth, selectedYear, sheetsList]);

  // Load Data chi tiết (Thêm refreshKey vào dependency array để cập nhật Realtime)
  useEffect(() => {
    if (!selectedSheetId) return;

    const m = parseInt(selectedMonth);
    const y = parseInt(selectedYear);
    const numDays = getDaysInMonth(m, y);
    setDaysInMonth(numDays);

    const fetchSheetData = async () => {
      // Bật loading để người dùng biết data đang được làm mới
      setLoading(true);
      try {
        const { data: rowsData, error } = await supabase
          .from("attendance_rows")
          .select(
            `
            employee_name, role, department, row_index,
            attendance_cells (day, value, bg_r, bg_g, bg_b)
          `,
          )
          .eq("sheet_id", selectedSheetId)
          .order("row_index", { ascending: true });

        if (error) throw error;

        const formatted = rowsData.map((row: any) => {
          let daysArray = Array(numDays).fill({ val: "", color: null });

          row.attendance_cells.forEach((c: any) => {
            if (c.day >= 1 && c.day <= numDays) {
              daysArray[c.day - 1] = {
                val: c.value || "",
                color:
                  c.bg_r !== null
                    ? { red: c.bg_r, green: c.bg_g, blue: c.bg_b }
                    : null,
              };
            }
          });

          return {
            name: row.employee_name,
            role: row.role,
            dept: row.department,
            days: daysArray,
          };
        });

        setData(formatted);
        setError(null);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSheetData();
  }, [selectedSheetId, refreshKey]);

  if (error)
    return (
      <div className="p-10 text-red-500">
        <AlertCircle /> {error}
      </div>
    );

  return (
    <div className="flex flex-col bg-white rounded-2xl border border-hr-border shadow-sm overflow-hidden text-[#334155]" style={{ height: 'calc(100vh - 140px)' }}>
      <div className="h-14 bg-white border-b flex items-center px-6 justify-between shrink-0 z-[100] sticky top-0 shadow-sm">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-1.5 rounded-md text-white font-black text-xs">
              C&B
            </div>
            <h1 className="font-bold text-sm uppercase tracking-tight text-slate-700 whitespace-nowrap">
              Chấm Công - {selectedMonth}/{selectedYear}
            </h1>
          </div>
          <div className="hidden lg:flex items-center gap-4 border-l border-slate-200 pl-6">
            {ATTENDANCE_LEGEND.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div
                  className={cn(
                    "w-8 h-5 flex items-center justify-center rounded-[4px] shadow-sm border border-slate-100 text-[8px] font-bold leading-none",
                    item.color,
                    item.textColor,
                  )}
                >
                  {item.text}
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded px-2 py-1.5 text-[10px] font-bold text-slate-600 uppercase">
            <Calendar size={12} className="text-slate-400" />
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="bg-transparent outline-none cursor-pointer border-r border-slate-200 pr-1"
            >
              {Array.from({ length: 12 }, (_, i) => {
                const m = (i + 1).toString().padStart(2, "0");
                return (
                  <option key={m} value={m}>
                    Tháng {m}
                  </option>
                );
              })}
            </select>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-transparent outline-none cursor-pointer"
            >
              {["2024", "2025", "2026"].map((y) => (
                <option key={y} value={y}>
                  Năm {y}
                </option>
              ))}
            </select>
          </div>
          <button className="bg-slate-800 text-white px-3 py-1.5 rounded text-[10px] font-bold flex items-center gap-2 hover:bg-slate-700">
            <Download size={12} /> XUẤT FILE
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto relative">
        <table className="w-full border-separate border-spacing-0">
          <thead className="relative z-[80]">
            <tr className="h-12">
              <th className="sticky top-0 left-0 bg-slate-50 px-4 border-b border-r border-slate-200 text-[10px] font-bold text-slate-500 uppercase z-[95] min-w-[180px] text-left">
                Nhân viên
              </th>
              <th className="sticky top-0 left-[180px] bg-slate-50 px-4 border-b border-r border-slate-200 text-[10px] font-bold text-slate-500 uppercase z-[95] min-w-[160px] text-left">
                Bộ phận / Chức vụ
              </th>
              {[...Array(daysInMonth)].map((_, i) => {
                const { name, isSunday } = getDayOfWeek(
                  i + 1,
                  selectedMonth,
                  selectedYear,
                );
                return (
                  <th
                    key={i}
                    className={cn(
                      "sticky top-0 px-1 border-b border-r border-slate-200 text-[10px] font-bold text-center min-w-[40px] z-[90]",
                      isSunday
                        ? "text-white bg-red-400"
                        : "text-slate-500 bg-slate-50",
                    )}
                  >
                    <div>{i + 1}</div>
                    <div className="text-[7px] opacity-80">{name}</div>
                  </th>
                );
              })}
              <th className="sticky top-0 right-0 bg-blue-50 px-2 border-b border-slate-200 text-[10px] font-bold text-blue-600 z-[95] min-w-[60px]">
                Tổng
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {loading ? (
              <tr>
                <td colSpan={40} className="py-20 text-center">
                  <Loader2 className="animate-spin inline-block text-slate-300" />
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td
                  colSpan={40}
                  className="py-20 text-center text-gray-400 italic"
                >
                  Không có dữ liệu cho Tháng {selectedMonth}/{selectedYear}
                </td>
              </tr>
            ) : (
              data.map((row, idx) => {
                const total = row.days.reduce((acc: number, d: any) => {
                  const t = (d.val || "").toUpperCase().trim();
                  const r = d.color?.red || 0;
                  const g = d.color?.green || 0;
                  if (
                    t === "1" ||
                    t === "2" ||
                    t === "CT" ||
                    t === "X" ||
                    (r < 0.3 && g > 0.8)
                  )
                    return acc + 1;
                  if (t === "1/2") return acc + 0.5;
                  return acc;
                }, 0);

                return (
                  <tr key={idx} className="group hover:bg-slate-50/50">
                    <td className="sticky left-0 bg-white group-hover:bg-slate-50 px-4 py-3 border-b border-r border-slate-100 text-[13px] font-semibold text-slate-900 z-40">
                      {row.name}
                    </td>
                    <td className="sticky left-[180px] bg-white group-hover:bg-slate-50 px-4 py-3 border-b border-r border-slate-100 z-40">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[11px] font-medium text-slate-700">
                          {row.dept}
                        </span>
                        <span className="text-[9px] text-slate-400 italic font-normal uppercase">
                          {row.role}
                        </span>
                      </div>
                    </td>
                    {row.days.map((day: any, dIdx: number) => {
                      const { isSunday } = getDayOfWeek(
                        dIdx + 1,
                        selectedMonth,
                        selectedYear,
                      );
                      return (
                        <td
                          key={dIdx}
                          className={cn(
                            "p-0.5 border-b border-r border-slate-50 text-center h-12 w-10",
                            isSunday && "bg-red-50/30",
                          )}
                        >
                          <div className="flex items-center justify-center h-full w-full">
                            <span
                              className={cn(
                                "w-8 h-6 flex items-center justify-center rounded text-[9px] font-bold shadow-sm",
                                getCellStyle(day.val, day.color),
                              )}
                            >
                              {day.val}
                            </span>
                          </div>
                        </td>
                      );
                    })}
                    <td className="sticky right-0 bg-blue-50/50 px-2 border-b border-slate-100 text-xs font-black text-blue-600 text-center z-40">
                      {total.toFixed(1)}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
