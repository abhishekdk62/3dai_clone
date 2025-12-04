import React, { useMemo, useState } from "react";

const UploadSection = () => {
  const [search, setSearch] = useState("");

  // simple filter over the single row
  const showRow = useMemo(() => {
    if (!search.trim()) return true;
    return "rail tracks".toLowerCase().includes(search.toLowerCase());
  }, [search]);

  return (
    <section>
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white">
        Interactive 3D Model
      </h2>
      <p className="mt-3 text-center text-sm sm:text-base text-gray-300">
        Click on the UnderPass Model processed by d3d Engine.
      </p>

      <div className="mt-10 rounded-3xl bg-[#0d121b] border border-[#202736] shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#111827] border-b border-[#1f2937]">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <div className="ml-4 flex-1 rounded-md bg-[#020617] px-3 py-1 text-xs text-gray-300 truncate">
            https://deepinspect3d.ai/projects/bridge-inspection/pillar-b12/normal-view
          </div>
        </div>

        {/* White app body */}
        <div className="bg-white text-slate-900">
          {/* App header */}
          <div className="px-8 py-6 border-b border-slate-200 flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-cyan-500 flex items-center justify-center text-lg font-extrabold text-slate-900">
                3D
              </div>
              <span className="text-xl font-semibold text-slate-800">
                DeepInspect3D
              </span>
            </div>
          </div>

          {/* Title + search */}
          <div className="px-8 pt-6 pb-4 border-b border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              Shared 3D Model
            </h3>
            <div className="mt-4 w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500 flex items-center gap-2 max-w-md">
              <span className="text-slate-400 text-lg">🔍</span>
              <input
                type="text"
                placeholder="Search by name..."
                className="flex-1 outline-none bg-transparent text-sm placeholder:text-slate-400"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Table */}
          <div className="px-8 py-4">
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="w-10 px-4 py-3 text-left">
                      <input type="checkbox" className="h-4 w-4" />
                    </th>
                    <th className="px-4 py-3 text-left font-medium">
                      Model Name
                    </th>
                    <th className="px-4 py-3 text-left font-medium">
                      Description
                    </th>
                    <th className="px-4 py-3 text-left font-medium">Access</th>
                    <th className="px-4 py-3 text-left font-medium">Size</th>
                    <th className="px-4 py-3 text-left font-medium">
                      resourceType
                    </th>
                    <th className="px-4 py-3 text-left font-medium">
                      Rendering
                    </th>
                    <th className="px-4 py-3 text-left font-medium">
                      Created At
                    </th>
                    <th className="w-8 px-4 py-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {showRow && (
                    <tr>
                      <td className="px-4 py-3">
                        <input type="checkbox" className="h-4 w-4" />
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-medium text-slate-900">
                          rail tracks
                        </div>
                        <div className="text-xs text-slate-500">
                          TR5659-SD-OA00-.zip
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        rail track inspection
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                          <span className="h-2 w-2 rounded-full bg-emerald-500" />
                          public
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-700">435.56 MB</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                          <span className="h-2 w-2 rounded-full bg-emerald-500" />
                          model
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                          <span className="h-2 w-2 rounded-full bg-emerald-500" />
                          finished
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        21 Mar, 2025
                      </td>
                      <td className="px-4 py-3 text-right text-slate-400">
                        ⋮
                      </td>
                    </tr>
                  )}
                  {!showRow && (
                    <tr>
                      <td
                        colSpan={9}
                        className="px-4 py-4 text-center text-xs sm:text-sm text-slate-500"
                      >
                        No models match that name.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
