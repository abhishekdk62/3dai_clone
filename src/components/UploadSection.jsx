import React, { useMemo, useState } from "react";

const UploadSection = () => {
  const [search, setSearch] = useState("");

  const showRow = useMemo(() => {
    if (!search.trim()) return true;
    return "rail tracks".toLowerCase().includes(search.toLowerCase());
  }, [search]);

  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Interactive 3D Model
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
          Click on the UnderPass Model processed by d3d Engine to explore
          inspection details.
        </p>
      </div>

      {/* Browser frame */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900 to-slate-950 border border-slate-700/60 shadow-[0_0_50px_rgba(56,189,248,0.4)] overflow-hidden">
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/80 backdrop-blur-sm">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <div className="ml-4 flex-1 rounded-lg bg-slate-900/90 px-4 py-1.5 text-xs text-gray-300 truncate border border-slate-700/50">
            https://deepinspect3d.ai/projects/bridge-inspection/pillar-b12/normal-view
          </div>
        </div>

        {/* White app body */}
        <div className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
          {/* App header */}
          <div className="px-8 py-6 border-b border-slate-200/80 flex items-center gap-4 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center text-lg font-extrabold text-slate-900 shadow-lg shadow-cyan-500/40">
                3D
              </div>
              <span className="text-xl font-semibold text-slate-800">
                DeepInspect<span className="text-cyan-500">3D</span>
              </span>
            </div>
          </div>

          {/* Title + search */}
          <div className="px-8 pt-6 pb-6 border-b border-slate-200/80">
            <h3 className="text-2xl font-semibold text-slate-900">
              Shared 3D Model
            </h3>
            <div className="mt-4 w-full max-w-md rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-500 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
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
          <div className="px-8 py-6">
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-gradient-to-b from-slate-100 to-slate-50 text-slate-600 border-b border-slate-200">
                  <tr>
                    <th className="w-12 px-4 py-4 text-left">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-slate-300"
                      />
                    </th>
                    <th className="px-4 py-4 text-left font-semibold text-xs uppercase tracking-wide">
                      Model Name
                    </th>
                    <th className="px-4 py-4 text-left font-semibold text-xs uppercase tracking-wide">
                      Description
                    </th>
                    <th className="px-4 py-4 text-left font-semibold text-xs uppercase tracking-wide">
                      Access
                    </th>
                    <th className="px-4 py-4 text-left font-semibold text-xs uppercase tracking-wide">
                      Size
                    </th>
                    <th className="px-4 py-4 text-left font-semibold text-xs uppercase tracking-wide">
                      Type
                    </th>
                    <th className="px-4 py-4 text-left font-semibold text-xs uppercase tracking-wide">
                      Rendering
                    </th>
                    <th className="px-4 py-4 text-left font-semibold text-xs uppercase tracking-wide">
                      Created At
                    </th>
                    <th className="w-10 px-4 py-4" />
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100">
                  {showRow && (
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 py-4">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-slate-300"
                        />
                      </td>
                      <td className="px-4 py-4">
                        <div className="font-semibold text-slate-900">
                          rail tracks
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          TR5659-SD-OA00-.zip
                        </div>
                      </td>
                      <td className="px-4 py-4 text-slate-600">
                        rail track inspection
                      </td>
                      <td className="px-4 py-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 border border-emerald-200">
                          <span className="h-2 w-2 rounded-full bg-emerald-500" />
                          public
                        </span>
                      </td>
                      <td className="px-4 py-4 text-slate-600 font-medium">
                        435.56 MB
                      </td>
                      <td className="px-4 py-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 border border-sky-200">
                          <span className="h-2 w-2 rounded-full bg-sky-500" />
                          model
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 border border-emerald-200">
                          <span className="h-2 w-2 rounded-full bg-emerald-500" />
                          finished
                        </span>
                      </td>
                      <td className="px-4 py-4 text-slate-600">
                        21 Mar, 2025
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button className="text-slate-400 hover:text-slate-600 transition-colors">
                          ⋮
                        </button>
                      </td>
                    </tr>
                  )}
                  {!showRow && (
                    <tr>
                      <td
                        colSpan={9}
                        className="px-4 py-8 text-center text-sm text-slate-500"
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
