import React, { useState } from "react";
import { Search, ChevronDown, MapPin, Briefcase, LineChart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const departments = [
  {
    name: "Business Operations",
    icon: Briefcase,
    jobs: [
      { title: "Business Operations & Strategy Manager", location: "London, UK", applyLink: "#" },
    ],
  },
  {
    name: "Data Science and Analytics",
    icon: LineChart,
    jobs: [
      { title: "Senior Data Scientist, ML Research", location: "London, UK", applyLink: "#" },
      { title: "Analytics Engineer", location: "London, UK", applyLink: "#" },
    ],
  },
];

export default function Hiring() {
  const [expandedDept, setExpandedDept] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedLocation, setSelectedLocation] = useState("All locations");

  const availableDepts = ["All Departments", ...new Set(departments.map(d => d.name))];
  const availableLocations = ["All locations", ...new Set(departments.flatMap(d => d.jobs.map(j => j.location)))];

  const filtered = departments
    .filter(d => selectedDept === "All Departments" || d.name === selectedDept)
    .map(d => ({
      ...d,
      jobs: d.jobs.filter(j =>
        j.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedLocation === "All locations" || j.location === selectedLocation)
      ),
    }))
    .filter(d => d.jobs.length > 0);

  const totalRoles = filtered.reduce((acc, d) => acc + d.jobs.length, 0);

  return (
    <section className="bg-black py-10 md:py-16 border-t border-white/[0.04]">

      {/* Section header */}
      <motion.div
        initial={{ opacity:0, y:20 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.6 }}
        className="max-w-6xl mx-auto px-6 text-center mb-14"
      >
        <h2
          style={{ fontFamily:"'Outfit', sans-serif" }}
          className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[-0.02em] text-gray-100"
        >
          Help us bring{" "}
          <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
            human intelligence
          </span>{" "}
          to software
        </h2>
        <div className="mx-auto mt-4 h-px w-16 bg-linear-to-r from-transparent via-[#914FFC] to-transparent" />
        <p
          style={{ fontFamily:"'Outfit', sans-serif" }}
          className="mt-5 text-sm md:text-base text-gray-500 max-w-xl mx-auto font-light leading-[1.8]"
        >
          Join us as we develop reliable AI systems for the world's most
          important decisions.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity:0, y:16 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.55, delay:0.1 }}
        className="max-w-6xl mx-auto px-6 mb-10"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1 min-w-[220px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={{ fontFamily:"'Outfit', sans-serif" }}
                className="w-full pl-10 pr-4 py-2.5 bg-white/[0.03] border border-white/[0.07] rounded-xl text-gray-200 placeholder-gray-600 text-sm font-light focus:outline-none focus:border-[#914FFC]/40 transition-colors"
              />
            </div>
            {/* Dept filter */}
            <div className="relative min-w-[180px]">
              <select
                value={selectedDept}
                onChange={e => setSelectedDept(e.target.value)}
                style={{ fontFamily:"'Outfit', sans-serif" }}
                className="w-full appearance-none pl-4 pr-8 py-2.5 bg-white/[0.03] border border-white/[0.07] rounded-xl text-gray-400 text-sm font-light focus:outline-none focus:border-[#914FFC]/40 transition-colors"
              >
                {availableDepts.map(d => <option key={d}>{d}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 w-3.5 h-3.5 pointer-events-none" />
            </div>
            {/* Location filter */}
            <div className="relative min-w-[180px]">
              <select
                value={selectedLocation}
                onChange={e => setSelectedLocation(e.target.value)}
                style={{ fontFamily:"'Outfit', sans-serif" }}
                className="w-full appearance-none pl-4 pr-8 py-2.5 bg-white/[0.03] border border-white/[0.07] rounded-xl text-gray-400 text-sm font-light focus:outline-none focus:border-[#914FFC]/40 transition-colors"
              >
                {availableLocations.map(l => <option key={l}>{l}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 w-3.5 h-3.5 pointer-events-none" />
            </div>
          </div>

          {/* Stats + expand */}
          <div className="flex items-center gap-4">
            <span style={{ fontFamily:"'Outfit', sans-serif" }}
              className="text-sm text-gray-600 font-light whitespace-nowrap">
              {totalRoles} open role{totalRoles !== 1 ? "s" : ""}
            </span>
            <button
              onClick={() => setExpandedDept(expandedDept === "all" ? null : "all")}
              style={{ fontFamily:"'Outfit', sans-serif" }}
              className="text-xs text-gray-500 hover:text-white font-light tracking-wide transition-colors border border-white/[0.07] rounded-full px-3 py-1.5"
            >
              {expandedDept === "all" ? "Collapse all" : "Expand all"}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Job listings */}
      <div className="max-w-6xl mx-auto px-6 space-y-4">
        {filtered.length > 0 ? (
          filtered.map((dept, di) => (
            <motion.div
              key={dept.name}
              initial={{ opacity:0, y:16 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.5, delay:di*0.07 }}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden"
            >
              {/* Department header */}
              <button
                onClick={() => setExpandedDept(expandedDept === dept.name ? null : dept.name)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-xl bg-white/[0.05] text-gray-500">
                    <dept.icon size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily:"'Outfit', sans-serif" }}
                      className="text-base font-light text-gray-100">
                      {dept.name}
                    </h3>
                    <p style={{ fontFamily:"'Outfit', sans-serif" }}
                      className="text-gray-600 text-xs font-light mt-0.5">
                      {dept.jobs.length} role{dept.jobs.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${expandedDept === dept.name || expandedDept === "all" ? "rotate-180 text-[#914FFC]" : ""}`}
                />
              </button>

              {/* Expanded jobs */}
              <AnimatePresence>
                {(expandedDept === dept.name || expandedDept === "all") && (
                  <motion.div
                    initial={{ height:0, opacity:0 }}
                    animate={{ height:"auto", opacity:1 }}
                    exit={{ height:0, opacity:0 }}
                    transition={{ duration:0.25, ease:"easeOut" }}
                    className="overflow-hidden border-t border-white/[0.05]"
                  >
                    <div className="px-6 py-4 space-y-3">
                      {dept.jobs.map((job, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.05] transition-colors"
                        >
                          <div>
                            <h4 style={{ fontFamily:"'Outfit', sans-serif" }}
                              className="text-sm font-light text-gray-100">
                              {job.title}
                            </h4>
                            <div className="flex items-center gap-1.5 text-gray-600 text-xs mt-1.5">
                              <MapPin size={12} />
                              <span style={{ fontFamily:"'Outfit', sans-serif" }} className="font-light">
                                {job.location}
                              </span>
                            </div>
                          </div>
                          <Link
                            to={`/careers/apply-now?role=${encodeURIComponent(job.title)}&location=${encodeURIComponent(job.location)}`}
                            style={{ fontFamily:"'Outfit', sans-serif" }}
                            className="
                              inline-flex items-center gap-1.5 px-5 py-2
                              bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B]
                              hover:from-violet-600 hover:to-[#914FFC]
                              text-white font-light text-xs rounded-full
                              shadow-md shadow-purple-900/20
                              transition-all duration-300 whitespace-nowrap
                              hover:-translate-y-px active:scale-95
                            "
                          >
                            Apply Now →
                          </Link>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            className="text-center py-20 rounded-2xl border border-white/[0.05]"
          >
            <p style={{ fontFamily:"'Outfit', sans-serif" }}
              className="text-gray-500 text-sm font-light">
              No positions match your search criteria.
            </p>
            <button
              onClick={() => { setSearchTerm(""); setSelectedDept("All Departments"); setSelectedLocation("All locations"); }}
              style={{ fontFamily:"'Outfit', sans-serif" }}
              className="mt-4 text-[#914FFC] hover:text-[#C084FC] text-xs font-light transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
