import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Play,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  Sliders,
  Terminal,
  Zap,
  ShieldCheck,
  Search,
  FileText,
  BarChart2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

// ============================================================================
// 1. JEV STATE ENGINE SANDBOX
// ============================================================================
const JevStateEngineSandbox = () => {
  const [stage, setStage] = useState("idle"); // idle, investigate, plan, implement, gate, verify, error, recover
  const [simulationMode, setSimulationMode] = useState("happy"); // happy, ast_error, circuit_breaker
  const [strikes, setStrikes] = useState(0);
  const [logs, setLogs] = useState([
    "System initialized. Ready for autonomous coding lifecycle.",
  ]);
  const [tokensUsed, setTokensUsed] = useState(0);

  const resetSim = () => {
    setStage("idle");
    setStrikes(0);
    setTokensUsed(0);
    setLogs(["State machine reset. Choose a simulation scenario below."]);
  };

  const runSimulation = (mode) => {
    setSimulationMode(mode);
    setStage("investigate");
    setStrikes(0);
    setTokensUsed(1820);
    setLogs([
      "▶ [INVESTIGATE] Parsing user issue in sqlparse (test_format_keywords.py)...",
      "✔ Cloned target repository into isolated Git worktree: /tmp/worktree-jev-492",
    ]);

    setTimeout(() => {
      setStage("plan");
      setTokensUsed(3450);
      setLogs((prev) => [
        ...prev,
        "▶ [PLAN] Generating 1-file scoped modification plan for formatter.py",
        "✔ Plan approved by orchestrator: strictly 1-file blast radius enforced.",
      ]);
    }, 900);

    setTimeout(() => {
      setStage("implement");
      setTokensUsed(6200);
      if (mode === "happy") {
        setLogs((prev) => [
          ...prev,
          "▶ [IMPLEMENT] Worker LLM generated patch diff (+14 lines, -2 lines)",
        ]);
      } else if (mode === "ast_error") {
        setLogs((prev) => [
          ...prev,
          "▶ [IMPLEMENT] Worker LLM generated patch with malformed closing bracket.",
        ]);
      } else {
        setLogs((prev) => [
          ...prev,
          "▶ [IMPLEMENT] Worker LLM generated repetitive faulty syntax.",
        ]);
      }
    }, 1800);

    setTimeout(() => {
      setStage("gate");
      if (mode === "happy") {
        setLogs((prev) => [
          ...prev,
          "▶ [GATE - TIER 0] Running mechanical Python AST compilation check... PASSED (0 tokens spent)",
          "▶ [GATE - TIER 1] Semantic evaluation score: 0.89 >= 0.50 acceptance threshold... PASSED",
        ]);
      } else if (mode === "ast_error") {
        setStrikes(1);
        setLogs((prev) => [
          ...prev,
          "❌ [GATE - TIER 0] SyntaxError: unexpected EOF while parsing at line 42!",
          "⚡ [CIRCUIT BREAKER] Strike 1/3 recorded. Worker mutation rejected.",
          "🛡 [LOCAL ADVISOR] Triggering offline Ollama Qwen 2.5 CoT forensic post-mortem...",
          "🔄 [BOUNDED REPAIR] Injected error trace into worker prompt. Re-executing implement stage...",
        ]);
      } else {
        setStrikes(3);
        setLogs((prev) => [
          ...prev,
          "❌ [GATE - TIER 0] Syntax compilation check failed repeatedly.",
          "🛑 [CIRCUIT BREAKER] 3-Strike Limit Reached! Hard abort triggered.",
          "⏪ [GIT WORKTREE] Atomic rollback triggered: discarded dirty state without contaminating main branch.",
        ]);
      }
    }, 2800);

    setTimeout(() => {
      if (mode === "happy") {
        setStage("verify");
        setTokensUsed(9480);
        setLogs((prev) => [
          ...prev,
          "✔ [VERIFY] Running repository test suite: 509/509 tests passed, 0 regressions.",
          "🎉 [COMPLETE] Patch committed in worktree with ~9.5k total tokens (~75% reduction vs ReAct).",
        ]);
      } else if (mode === "ast_error") {
        setStage("verify");
        setTokensUsed(11200);
        setLogs((prev) => [
          ...prev,
          "✔ [RECOVERY] Repaired patch passed Tier 0 AST check and Tier 1 semantic evaluation.",
          "✔ [VERIFY] 509/509 tests passed. Zero dirty state bleed guaranteed.",
        ]);
      } else {
        setStage("error");
        setTokensUsed(7100);
        setLogs((prev) => [
          ...prev,
          "🔒 [PROTECTED] Circuit breaker prevented infinite loop and runaway token bills.",
        ]);
      }
    }, 3900);
  };

  const stagesList = ["Investigate", "Plan", "Implement", "Gate T0/T1", "Verify"];

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="p-4 rounded-xl bg-[#0a192f] border border-[#233554] flex flex-wrap items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-semibold text-white flex items-center gap-2">
            <Cpu size={16} className="text-[#64ffda]" />
            <span>Interactive FSM Runtime & Circuit Breaker Simulator</span>
          </h4>
          <p className="text-xs text-gray-400 mt-1">
            Simulate how deterministic mechanical gates prevent broken LLM syntax and runaway ReAct token loops.
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="px-2.5 py-1 rounded bg-[#112240] border border-[#233554] text-gray-300">
            Tokens: <strong className="text-[#64ffda]">{tokensUsed.toLocaleString()}</strong>
          </span>
          <span className={`px-2.5 py-1 rounded border ${strikes > 0 ? "bg-rose-500/10 border-rose-500/30 text-rose-400" : "bg-[#112240] border-[#233554] text-gray-300"}`}>
            Strikes: <strong>{strikes}/3</strong>
          </span>
        </div>
      </div>

      {/* Lifecycle Stepper */}
      <div className="grid grid-cols-5 gap-2">
        {stagesList.map((s, idx) => {
          const isCurrent =
            (idx === 0 && stage === "investigate") ||
            (idx === 1 && stage === "plan") ||
            (idx === 2 && stage === "implement") ||
            (idx === 3 && stage === "gate") ||
            (idx === 4 && stage === "verify");

          const isPast =
            (idx === 0 && ["plan", "implement", "gate", "verify", "error"].includes(stage)) ||
            (idx === 1 && ["implement", "gate", "verify", "error"].includes(stage)) ||
            (idx === 2 && ["gate", "verify", "error"].includes(stage)) ||
            (idx === 3 && ["verify"].includes(stage));

          const isFailed = idx === 3 && stage === "error";

          return (
            <div
              key={s}
              className={`p-2.5 rounded-lg border text-center transition-all duration-300 ${
                isCurrent
                  ? "bg-[#64ffda]/15 border-[#64ffda] text-[#64ffda] shadow-[0_0_15px_rgba(100,255,218,0.2)]"
                  : isFailed
                  ? "bg-rose-500/15 border-rose-500 text-rose-400"
                  : isPast
                  ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300"
                  : "bg-[#0a192f] border-[#233554] text-gray-400"
              }`}
            >
              <span className="block text-[10px] font-mono uppercase tracking-wider">
                Stage {idx + 1}
              </span>
              <span className="block text-xs font-semibold mt-0.5 truncate">{s}</span>
            </div>
          );
        })}
      </div>

      {/* Control Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => runSimulation("happy")}
          disabled={stage !== "idle" && stage !== "verify" && stage !== "error"}
          className="px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/30 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <Play size={14} />
          <span>Simulate Happy Path (100% Pass)</span>
        </button>

        <button
          onClick={() => runSimulation("ast_error")}
          disabled={stage !== "idle" && stage !== "verify" && stage !== "error"}
          className="px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-500/50 text-amber-300 text-xs font-semibold hover:bg-amber-500/30 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <AlertTriangle size={14} />
          <span>Simulate AST Syntax Error & Repair</span>
        </button>

        <button
          onClick={() => runSimulation("circuit_breaker")}
          disabled={stage !== "idle" && stage !== "verify" && stage !== "error"}
          className="px-4 py-2 rounded-lg bg-rose-500/20 border border-rose-500/50 text-rose-300 text-xs font-semibold hover:bg-rose-500/30 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <Zap size={14} />
          <span>Simulate 3-Strike Circuit Breaker</span>
        </button>

        <button
          onClick={resetSim}
          className="p-2 rounded-lg bg-[#0a192f] border border-[#233554] text-gray-400 hover:text-white transition-all cursor-pointer ml-auto"
          title="Reset Simulator"
        >
          <RotateCcw size={14} />
        </button>
      </div>

      {/* Live Terminal Log Stream */}
      <div className="rounded-xl border border-[#233554] bg-[#071324] overflow-hidden">
        <div className="px-4 py-2 bg-[#0c1c33] border-b border-[#233554] flex items-center justify-between text-xs font-mono text-gray-400">
          <span className="flex items-center gap-2">
            <Terminal size={14} className="text-[#64ffda]" />
            <span>jev_runtime_ledger.log</span>
          </span>
          <span className="text-[10px] text-emerald-400">Live Telemetry</span>
        </div>
        <div className="p-4 h-48 overflow-y-auto space-y-1.5 font-mono text-xs text-gray-300">
          {logs.map((log, i) => (
            <div
              key={i}
              className={`leading-relaxed ${
                log.includes("❌") || log.includes("🛑")
                  ? "text-rose-400 font-semibold"
                  : log.includes("⚡") || log.includes("🔄")
                  ? "text-amber-300"
                  : log.includes("✔") || log.includes("🎉")
                  ? "text-emerald-400 font-semibold"
                  : "text-gray-300"
              }`}
            >
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 2. SYNTHETIC DATA GENERATOR SANDBOX
// ============================================================================
const SyntheticDataSandbox = () => {
  const [domain, setDomain] = useState("finance");
  const [noiseLevel, setNoiseLevel] = useState(5);
  const [sampleSize, setSampleSize] = useState(100);
  const [repairActive, setRepairActive] = useState(true);

  // Generate mock dataset based on parameters
  const generateData = () => {
    if (domain === "finance") {
      return [
        { id: "TXN-8091", metric: "Equity Return", rawVal: 1.84, noiseOffset: (noiseLevel * 0.08).toFixed(2), bounds: "[-5%, +5%]", status: "Valid" },
        { id: "TXN-8092", metric: "Bond Yield", rawVal: 4.12, noiseOffset: (noiseLevel * 0.04).toFixed(2), bounds: "[0%, 10%]", status: "Valid" },
        { id: "TXN-8093", metric: "Volatility Index", rawVal: 18.4, noiseOffset: (noiseLevel * 0.3).toFixed(2), bounds: "[10, 80]", status: "Valid" },
        { id: "TXN-8094", metric: "VaR (95%)", rawVal: -2.31, noiseOffset: (noiseLevel * 0.12).toFixed(2), bounds: "[-10%, 0%]", status: noiseLevel > 15 && !repairActive ? "Anomaly Detected" : "Bounded Repaired" },
      ];
    } else if (domain === "healthcare") {
      return [
        { id: "PAT-3012", metric: "Systolic BP", rawVal: 122, noiseOffset: (noiseLevel * 1.2).toFixed(0), bounds: "[90, 180]", status: "Valid" },
        { id: "PAT-3013", metric: "Heart Rate", rawVal: 74, noiseOffset: (noiseLevel * 0.8).toFixed(0), bounds: "[45, 160]", status: "Valid" },
        { id: "PAT-3014", metric: "Fasting Glucose", rawVal: 98, noiseOffset: (noiseLevel * 1.5).toFixed(0), bounds: "[60, 200]", status: "Valid" },
        { id: "PAT-3015", metric: "Blood Oxygen (SpO2)", rawVal: 98, noiseOffset: (noiseLevel * 0.4).toFixed(0), bounds: "[85, 100]", status: noiseLevel > 15 && !repairActive ? "Out of Bounds" : "Bounded Repaired" },
      ];
    } else {
      return [
        { id: "SNR-7101", metric: "Vibration Frequency", rawVal: 48.2, noiseOffset: (noiseLevel * 0.6).toFixed(1), bounds: "[10Hz, 120Hz]", status: "Valid" },
        { id: "SNR-7102", metric: "Bearing Temp", rawVal: 68.5, noiseOffset: (noiseLevel * 0.9).toFixed(1), bounds: "[30C, 110C]", status: "Valid" },
        { id: "SNR-7103", metric: "Hydraulic Pressure", rawVal: 2150, noiseOffset: (noiseLevel * 25).toFixed(0), bounds: "[1800, 3000 PSI]", status: "Valid" },
        { id: "SNR-7104", metric: "Spindle RPM", rawVal: 3200, noiseOffset: (noiseLevel * 40).toFixed(0), bounds: "[1000, 4500 RPM]", status: noiseLevel > 15 && !repairActive ? "Sensor Drift" : "Bounded Repaired" },
      ];
    }
  };

  const currentData = generateData();

  return (
    <div className="space-y-6">
      {/* Configuration Controls */}
      <div className="p-4 rounded-xl bg-[#0a192f] border border-[#233554] grid sm:grid-cols-3 gap-4 text-xs">
        <div>
          <label className="text-gray-300 font-semibold block mb-1.5 flex items-center gap-1.5">
            <Sliders size={13} className="text-[#64ffda]" />
            <span>Target Industry Domain</span>
          </label>
          <select
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="w-full bg-[#112240] border border-[#233554] rounded-lg px-3 py-2 text-white font-medium outline-none focus:border-[#64ffda]"
          >
            <option value="finance">Financial Quantitative Models</option>
            <option value="healthcare">Healthcare Clinical Vitals</option>
            <option value="manufacturing">Industrial Sensor Telemetry</option>
          </select>
        </div>

        <div>
          <div className="flex justify-between text-gray-300 font-semibold mb-1.5">
            <span>Noise / Anomaly Ratio</span>
            <span className="text-[#64ffda] font-mono">{noiseLevel}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="30"
            value={noiseLevel}
            onChange={(e) => setNoiseLevel(Number(e.target.value))}
            className="w-full accent-[#64ffda] cursor-pointer mt-1"
          />
        </div>

        <div>
          <div className="flex justify-between text-gray-300 font-semibold mb-1.5">
            <span>Sample Row Generation</span>
            <span className="text-[#64ffda] font-mono">{sampleSize} rows</span>
          </div>
          <input
            type="range"
            min="50"
            max="500"
            step="50"
            value={sampleSize}
            onChange={(e) => setSampleSize(Number(e.target.value))}
            className="w-full accent-[#64ffda] cursor-pointer mt-1"
          />
        </div>
      </div>

      {/* Quality Gate Status Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
        <div className="p-2.5 rounded-lg bg-[#112240] border border-emerald-500/30 text-emerald-300 flex items-center gap-2">
          <CheckCircle2 size={14} className="shrink-0" />
          <span className="truncate">Range Integrity: 100%</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[#112240] border border-emerald-500/30 text-emerald-300 flex items-center gap-2">
          <CheckCircle2 size={14} className="shrink-0" />
          <span className="truncate">Unique ID Check: PASS</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[#112240] border border-emerald-500/30 text-emerald-300 flex items-center gap-2">
          <CheckCircle2 size={14} className="shrink-0" />
          <span className="truncate">Variance Stability: 0.98</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[#112240] border border-[#64ffda]/30 text-[#64ffda] flex items-center gap-2">
          <ShieldCheck size={14} className="shrink-0" />
          <span className="truncate">60+ Pytest Suite: PASS</span>
        </div>
      </div>

      {/* Live Synthetic Data Table */}
      <div className="rounded-xl border border-[#233554] bg-[#071324] overflow-hidden">
        <div className="px-4 py-2.5 bg-[#0c1c33] border-b border-[#233554] flex items-center justify-between text-xs font-mono text-gray-400">
          <span>synthetic_spec_output.preview</span>
          <span className="text-[11px] text-[#64ffda]">Export Deliverables: CSV • XLSX • JSON • PDF</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[#112240]/50 text-gray-400 uppercase text-[10px] border-b border-[#233554]">
              <tr>
                <th className="py-2.5 px-4">Entity ID</th>
                <th className="py-2.5 px-4">Metric Feature</th>
                <th className="py-2.5 px-4">Base Value</th>
                <th className="py-2.5 px-4">Noise Delta</th>
                <th className="py-2.5 px-4">Target Bounds</th>
                <th className="py-2.5 px-4">Validation State</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#233554]/40 text-gray-300">
              {currentData.map((row) => (
                <tr key={row.id} className="hover:bg-[#112240]/40 transition-colors">
                  <td className="py-2 px-4 text-[#64ffda]">{row.id}</td>
                  <td className="py-2 px-4 text-white font-medium">{row.metric}</td>
                  <td className="py-2 px-4">{row.rawVal}</td>
                  <td className="py-2 px-4 text-amber-300">+{row.noiseOffset}</td>
                  <td className="py-2 px-4 text-gray-400">{row.bounds}</td>
                  <td className="py-2 px-4">
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      <CheckCircle2 size={10} />
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 3. GLITCH ROOM SANDBOX
// ============================================================================
const GlitchRoomSandbox = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(0);
  const [status, setStatus] = useState("idle");

  const challenges = [
    {
      title: "Debug Buffer Overflow in Pointer Arithmetic",
      level: "Intermediate",
      topic: "Systems & Memory",
      snippet: `def validate_buffer(ptr_list, max_len):\n    # BUG: off-by-one boundary check\n    if len(ptr_list) > max_len:\n        return "Overflow Triggered"\n    return "Memory Safe"`,
      fix: `def validate_buffer(ptr_list, max_len):\n    if len(ptr_list) >= max_len:\n        return "Boundary Clamped"\n    return "Memory Safe"`,
      testCases: ["Length == max_len -> Bound Check", "Zero length edge case -> PASS", "Null pointer validation -> PASS"],
    },
    {
      title: "Optimize N+1 Database Query in Django ORM",
      level: "Advanced",
      topic: "Backend & SQL",
      snippet: `# Inefficient: O(N) queries\nbooks = Book.objects.all()\nauthors = [b.author.name for b in books]`,
      fix: `# Optimized: O(1) join query\nbooks = Book.objects.select_related('author').all()\nauthors = [b.author.name for b in books]`,
      testCases: ["Query count drops from 101 to 1", "Memory footprint: -64%", "Sub-10ms response time: PASS"],
    },
    {
      title: "JWT Token Invalidation & Session Revocation",
      level: "Intermediate",
      topic: "Security & Auth",
      snippet: `# Unsafe: Stateless token without blacklist\ndef verify_token(token):\n    return jwt.decode(token, SECRET_KEY, algorithms=['HS256'])`,
      fix: `# Safe: Redis session revocation check\ndef verify_token(token):\n    if redis_client.get(f"blacklist:{token}"): raise AuthError()\n    return jwt.decode(token, SECRET_KEY, algorithms=['HS256'])`,
      testCases: ["Expired token rejection: PASS", "Revoked session blacklist: PASS", "Algorithm spoofing guard: PASS"],
    },
  ];

  const current = challenges[selectedChallenge];

  const runChallenge = () => {
    setStatus("running");
    setTimeout(() => {
      setStatus("passed");
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* Challenge Picker */}
      <div className="grid sm:grid-cols-3 gap-2.5">
        {challenges.map((c, i) => (
          <button
            key={c.title}
            onClick={() => {
              setSelectedChallenge(i);
              setStatus("idle");
            }}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
              selectedChallenge === i
                ? "bg-[#64ffda]/10 border-[#64ffda] text-white"
                : "bg-[#0a192f] border-[#233554] text-gray-400 hover:text-white"
            }`}
          >
            <div className="flex justify-between items-center text-[10px] uppercase font-mono text-[#64ffda] mb-1">
              <span>{c.topic}</span>
              <span>{c.level}</span>
            </div>
            <h5 className="text-xs font-semibold line-clamp-1">{c.title}</h5>
          </button>
        ))}
      </div>

      {/* Code Editor Simulation */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Buggy Code */}
        <div className="rounded-xl border border-[#233554] bg-[#071324] overflow-hidden">
          <div className="px-3.5 py-2 bg-[#0c1c33] border-b border-[#233554] text-[11px] font-mono text-rose-400 flex justify-between">
            <span>problematic_implementation.py</span>
            <span>Initial Buggy Code</span>
          </div>
          <pre className="p-3.5 font-mono text-xs text-gray-300 leading-relaxed overflow-x-auto">
            {current.snippet}
          </pre>
        </div>

        {/* AI Assisted Solution */}
        <div className="rounded-xl border border-[#233554] bg-[#071324] overflow-hidden">
          <div className="px-3.5 py-2 bg-[#0c1c33] border-b border-[#233554] text-[11px] font-mono text-emerald-400 flex justify-between">
            <span>optimized_solution.py</span>
            <span>Creator Room Solution</span>
          </div>
          <pre className="p-3.5 font-mono text-xs text-emerald-300/90 leading-relaxed overflow-x-auto">
            {current.fix}
          </pre>
        </div>
      </div>

      {/* Run Action & Feedback */}
      <div className="p-4 rounded-xl bg-[#0a192f] border border-[#233554] flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={runChallenge}
          disabled={status === "running"}
          className="px-5 py-2 rounded-lg bg-[#64ffda] text-[#0a192f] text-xs font-bold hover:bg-[#52e0c4] transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <Play size={14} />
          <span>{status === "running" ? "Running Test Suite..." : "Execute Test Suite & AI Review"}</span>
        </button>

        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-gray-400">Score:</span>
          <span className="px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
            {status === "passed" ? "100 / 100 XP" : "Pending Run"}
          </span>
        </div>
      </div>

      {/* Test Case Execution Output */}
      {status === "passed" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs space-y-1.5 font-mono"
        >
          <p className="text-emerald-300 font-semibold flex items-center gap-2">
            <CheckCircle2 size={14} />
            <span>AI Feedback: Clean architectural pattern and optimal memory complexity.</span>
          </p>
          <div className="grid sm:grid-cols-3 gap-2 pt-2 text-[11px] text-gray-300">
            {current.testCases.map((tc, idx) => (
              <div key={idx} className="p-2 rounded bg-[#0a192f] border border-[#233554] flex items-center gap-1.5">
                <span className="text-emerald-400">✔</span>
                <span className="truncate">{tc}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

// ============================================================================
// 4. QUERYPDF SANDBOX
// ============================================================================
const QueryPdfSandbox = () => {
  const [selectedDoc, setSelectedDoc] = useState("annual_report.pdf");
  const [query, setQuery] = useState("What were the operating margins and revenue in Q3?");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const mockQueries = [
    "What were the operating margins and revenue in Q3?",
    "Summarize risk mitigation protocols for regulatory compliance.",
    "What are the data retention and encryption specifications?",
  ];

  const runQuery = (qText) => {
    const activeQuery = qText || query;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult({
        answer:
          "In Q3, gross operating revenue reached $42.8M (+18% YoY) with an operating profit margin of 24.3%. The margin expansion was driven by a ~75% reduction in cloud infrastructure token overhead and streamlined data processing automation.",
        chunks: [
          { page: 14, score: 0.94, text: "Section 4.2: Operating margin expanded to 24.3% in Q3 supported by optimized pipeline architectures..." },
          { page: 18, score: 0.89, text: "Financial Table 3: Total gross revenue recorded at $42.8M compared to $36.2M in prior year quarter..." },
          { page: 22, score: 0.82, text: "Technology Capex: Infrastructure efficiencies reduced compute overhead by approximately 75%..." },
        ],
      });
    }, 1100);
  };

  return (
    <div className="space-y-6">
      {/* Document & Query Selection */}
      <div className="p-4 rounded-xl bg-[#0a192f] border border-[#233554] space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-gray-300 font-medium">
            <FileText size={15} className="text-[#64ffda]" />
            <span>Target Indexed Document:</span>
            <select
              value={selectedDoc}
              onChange={(e) => setSelectedDoc(e.target.value)}
              className="bg-[#112240] border border-[#233554] rounded-lg px-2.5 py-1 text-white font-mono"
            >
              <option value="annual_report.pdf">Corporate_Annual_Report_2026.pdf (142 pages)</option>
              <option value="regulatory_compliance.pdf">ERC_Regulatory_Compliance_Specs.pdf (88 pages)</option>
              <option value="cloud_security.pdf">Cloud_Security_Architecture.pdf (64 pages)</option>
            </select>
          </div>
          <span className="text-[11px] font-mono text-emerald-400">FAISS Index: 420 Embeddings</span>
        </div>

        {/* Quick query pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="text-gray-400 text-[11px]">Quick Queries:</span>
          {mockQueries.map((mq) => (
            <button
              key={mq}
              onClick={() => {
                setQuery(mq);
                runQuery(mq);
              }}
              className="px-2.5 py-1 rounded-md bg-[#112240] border border-[#233554] text-gray-300 hover:text-[#64ffda] hover:border-[#64ffda]/50 transition-colors text-[11px] truncate max-w-[280px] cursor-pointer"
            >
              {mq}
            </button>
          ))}
        </div>
      </div>

      {/* Query Search Bar */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-3 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything about the document..."
            className="w-full bg-[#071324] border border-[#233554] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 outline-none focus:border-[#64ffda]"
          />
        </div>
        <button
          onClick={() => runQuery()}
          disabled={loading}
          className="px-5 py-2.5 rounded-xl bg-[#64ffda] text-[#0a192f] text-xs font-bold hover:bg-[#52e0c4] transition-all cursor-pointer disabled:opacity-50 shrink-0"
        >
          {loading ? "Searching..." : "Retrieve & Answer"}
        </button>
      </div>

      {/* Semantic Vector Chunks & LLM Answer */}
      {result && (
        <div className="space-y-4">
          {/* Answer Box */}
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-2 text-xs">
            <h5 className="font-semibold text-emerald-300 flex items-center gap-2">
              <Sparkles size={14} />
              <span>Context-Aware LLM Synthesis</span>
            </h5>
            <p className="text-gray-200 leading-relaxed">{result.answer}</p>
          </div>

          {/* Retrieved Chunks */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
              Top Ranked Retrieved Chunks (Cosine Similarity)
            </span>
            <div className="grid sm:grid-cols-3 gap-2.5 text-xs font-mono">
              {result.chunks.map((chk, i) => (
                <div key={i} className="p-3 rounded-lg bg-[#0a192f] border border-[#233554] space-y-1.5">
                  <div className="flex justify-between items-center text-[10px] text-[#64ffda]">
                    <span>Page {chk.page}</span>
                    <span className="font-bold">Sim: {(chk.score * 100).toFixed(0)}%</span>
                  </div>
                  <p className="text-[11px] text-gray-400 line-clamp-3 leading-relaxed">
                    "{chk.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 5. SOLAR PANEL DEFECT CLASSIFICATION SANDBOX
// ============================================================================
const SolarPanelSandbox = () => {
  const [selectedPanel, setSelectedPanel] = useState("crack");
  const [scanning, setScanning] = useState(false);

  const panels = [
    {
      id: "crack",
      label: "Surface Micro-Crack",
      severity: "High Criticality",
      probs: [
        { label: "Micro-Crack / Fracture", pct: 94.6, color: "bg-rose-500" },
        { label: "Dust & Dirt Layer", pct: 3.4, color: "bg-amber-500" },
        { label: "Electrical Hotspot", pct: 1.2, color: "bg-blue-500" },
        { label: "Nominal / Clean", pct: 0.8, color: "bg-emerald-500" },
      ],
      diagnosis: "EfficientNet-B0 identified high-contrast fracture lines across cell quadrant 3. Recommended: Immediate module isolation.",
    },
    {
      id: "dust",
      label: "Heavy Dust Accumulation",
      severity: "Moderate Impact",
      probs: [
        { label: "Dust & Dirt Layer", pct: 91.2, color: "bg-amber-500" },
        { label: "Micro-Crack / Fracture", pct: 4.1, color: "bg-rose-500" },
        { label: "Nominal / Clean", pct: 3.2, color: "bg-emerald-500" },
        { label: "Electrical Hotspot", pct: 1.5, color: "bg-blue-500" },
      ],
      diagnosis: "Diffuse irradiance attenuation detected across panel surface. Recommended: Automated mechanical wash cycle.",
    },
    {
      id: "hotspot",
      label: "Thermal Hotspot Anomaly",
      severity: "Severe Defect",
      probs: [
        { label: "Electrical Hotspot", pct: 89.4, color: "bg-rose-500" },
        { label: "Micro-Crack / Fracture", pct: 6.8, color: "bg-amber-500" },
        { label: "Dust & Dirt Layer", pct: 2.6, color: "bg-blue-500" },
        { label: "Nominal / Clean", pct: 1.2, color: "bg-emerald-500" },
      ],
      diagnosis: "Localized resistance spike detected. Recommended: Bypass diode replacement to prevent thermal runaway.",
    },
    {
      id: "clean",
      label: "Nominal / Clean Panel",
      severity: "Healthy Unit",
      probs: [
        { label: "Nominal / Clean", pct: 98.2, color: "bg-emerald-500" },
        { label: "Dust & Dirt Layer", pct: 1.1, color: "bg-amber-500" },
        { label: "Micro-Crack / Fracture", pct: 0.5, color: "bg-rose-500" },
        { label: "Electrical Hotspot", pct: 0.2, color: "bg-blue-500" },
      ],
      diagnosis: "Cell texture uniform. Conversion efficiency operating at 99.4% rated capacity. No intervention required.",
    },
  ];

  const current = panels.find((p) => p.id === selectedPanel) || panels[0];

  const handleSelect = (id) => {
    setSelectedPanel(id);
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
    }, 600);
  };

  return (
    <div className="space-y-6">
      {/* Sample Panel Selector */}
      <div>
        <label className="text-gray-300 font-semibold text-xs block mb-2">
          Select or Click Sample Solar Panel Inspection Image:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {panels.map((p) => (
            <button
              key={p.id}
              onClick={() => handleSelect(p.id)}
              className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                selectedPanel === p.id
                  ? "bg-[#64ffda]/10 border-[#64ffda] text-white shadow-[0_0_15px_rgba(100,255,218,0.15)]"
                  : "bg-[#0a192f] border-[#233554] text-gray-400 hover:text-white"
              }`}
            >
              <span className="block text-xs font-semibold">{p.label}</span>
              <span className="block text-[10px] font-mono text-[#64ffda] mt-1">{p.severity}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Model Inference Probability Bars */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Inspection Viewport with laser scanner */}
        <div className="relative rounded-xl border border-[#233554] bg-[#071324] h-52 flex flex-col items-center justify-center overflow-hidden p-4">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(#64ffda 1px, transparent 1px)`,
              backgroundSize: `16px 16px`,
            }}
          />

          {/* Scanner laser beam */}
          {scanning && (
            <motion.div
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
              className="absolute left-0 right-0 h-1 bg-[#64ffda] shadow-[0_0_12px_#64ffda] z-20"
            />
          )}

          <div className="relative z-10 text-center space-y-2">
            <span className="text-3xl">☀️</span>
            <h5 className="text-sm font-bold text-white font-mono">{current.label}</h5>
            <span className="inline-block text-[10px] px-2.5 py-0.5 rounded-full bg-[#112240] border border-[#64ffda]/40 text-[#64ffda] font-mono">
              {scanning ? "EfficientNet Running Inference..." : "Analysis Ready"}
            </span>
          </div>
        </div>

        {/* Confidence Bars */}
        <div className="p-4 rounded-xl border border-[#233554] bg-[#0a192f] space-y-3 flex flex-col justify-center text-xs font-mono">
          <div className="flex justify-between items-center text-gray-300 font-semibold mb-1">
            <span>Predicted Probability Distribution</span>
            <span className="text-[#64ffda] text-[10px]">Model: EfficientNet-B0</span>
          </div>

          {current.probs.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="flex justify-between text-[11px] text-gray-300">
                <span>{item.label}</span>
                <span className="font-bold">{item.pct}%</span>
              </div>
              <div className="w-full bg-[#112240] h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.pct}%` }}
                  transition={{ duration: 0.5 }}
                  className={`h-full rounded-full ${item.color}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Automated Diagnosis */}
      <div className="p-3.5 rounded-xl bg-[#112240]/80 border border-[#233554] text-xs space-y-1">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[#64ffda]">
          Automated Telemetry Recommendation:
        </span>
        <p className="text-gray-300 leading-relaxed font-sans">{current.diagnosis}</p>
      </div>
    </div>
  );
};

// ============================================================================
// 6. AI CAREER COACH SANDBOX
// ============================================================================
const AiCareerCoachSandbox = () => {
  const [targetRole, setTargetRole] = useState("aiml");
  const [analyzing, setAnalyzing] = useState(false);

  const rolesData = {
    aiml: {
      role: "AI / Machine Learning Engineer",
      matchScore: 92,
      strengths: ["LangGraph & Agentic FSMs", "RAG & FAISS Vector Search", "Python & Pytest Suite", "Model Evaluation & Tuning"],
      gaps: ["Distributed Training (Ray / DeepSpeed)", "Triton Inference Server"],
      recommendation: "Focus on distributed model deployment and high-throughput GPU serving to bridge from junior to senior AI engineering.",
    },
    data: {
      role: "Data Engineer / Analytics Engineer",
      matchScore: 89,
      strengths: ["Synthetic Data Generation", "Statistical Validation Engines", "SQLAlchemy & SQLite", "Pandas / NumPy Data Pipelines"],
      gaps: ["Apache Spark / PySpark Clustering", "Data Lakehouse (Iceberg/Delta)"],
      recommendation: "High proficiency in data validation; pair current specification pipelines with distributed streaming (Kafka/Flink).",
    },
    backend: {
      role: "Python Full-Stack Developer",
      matchScore: 86,
      strengths: ["FastAPI / Flask Architecture", "Supabase & PostgreSQL Auth", "Tailwind CSS & React UI", "Git Worktree Automation"],
      gaps: ["Redis Caching Strategies", "Kubernetes Microservice Helm Charts"],
      recommendation: "Strong end-to-end full-stack capabilities with production-grade authentication and modular architectures.",
    },
  };

  const current = rolesData[targetRole];

  const handleSelectRole = (r) => {
    setTargetRole(r);
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
    }, 500);
  };

  return (
    <div className="space-y-6">
      {/* Target Role Selector */}
      <div className="p-4 rounded-xl bg-[#0a192f] border border-[#233554]">
        <label className="text-gray-300 font-semibold text-xs block mb-2">
          Select Target Career Role Benchmark:
        </label>
        <div className="grid sm:grid-cols-3 gap-2.5">
          {[
            { id: "aiml", name: "AI / Machine Learning Engineer" },
            { id: "data", name: "Data Engineer / Analytics" },
            { id: "backend", name: "Python Full-Stack Engineer" },
          ].map((r) => (
            <button
              key={r.id}
              onClick={() => handleSelectRole(r.id)}
              className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                targetRole === r.id
                  ? "bg-[#64ffda]/10 border-[#64ffda] text-white"
                  : "bg-[#112240] border-[#233554] text-gray-400 hover:text-white"
              }`}
            >
              <span className="font-semibold block">{r.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Analysis Scoreboard */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Match Score Card */}
        <div className="p-5 rounded-xl border border-[#233554] bg-[#071324] flex flex-col items-center justify-center text-center">
          <span className="text-xs font-mono uppercase text-gray-400 mb-1">Resume Alignment</span>
          <div className="text-4xl font-extrabold text-[#64ffda] font-mono my-2">
            {analyzing ? "--" : `${current.matchScore}%`}
          </div>
          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
            Highly Competitive Match
          </span>
        </div>

        {/* Strengths & Missing Gaps */}
        <div className="md:col-span-2 p-5 rounded-xl border border-[#233554] bg-[#0a192f] space-y-3 text-xs">
          <div>
            <span className="text-emerald-400 font-semibold block mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 size={13} />
              <span>Verified Matching Skillsets</span>
            </span>
            <div className="flex flex-wrap gap-1.5">
              {current.strengths.map((s) => (
                <span key={s} className="px-2 py-0.5 rounded bg-[#112240] border border-[#233554] text-gray-200 text-[11px]">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-[#233554]/60">
            <span className="text-amber-400 font-semibold block mb-1.5 flex items-center gap-1.5">
              <AlertTriangle size={13} />
              <span>Recommended High-Impact Bridge Topics</span>
            </span>
            <div className="flex flex-wrap gap-1.5">
              {current.gaps.map((g) => (
                <span key={g} className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px]">
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Roadmap */}
      <div className="p-3.5 rounded-xl bg-[#112240] border border-[#233554] text-xs">
        <span className="text-[10px] font-mono uppercase text-[#64ffda] block mb-1">
          Synthesized Career Strategy:
        </span>
        <p className="text-gray-300 leading-relaxed font-sans">{current.recommendation}</p>
      </div>
    </div>
  );
};

// ============================================================================
// MAIN MODAL WRAPPER COMPONENT
// ============================================================================
export const ProjectSandboxModal = ({ project, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0a192f]/85 backdrop-blur-md">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 max-w-4xl w-full max-h-[90vh] bg-[#0d203d] border border-[#64ffda]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-[#233554] bg-[#0a192f] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/30">
              #{project.number}
            </span>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>{project.title}</span>
                <span className="text-xs font-normal text-gray-400 hidden sm:inline">
                  — Interactive Sandbox
                </span>
              </h3>
              <p className="text-xs text-[#64ffda] font-mono mt-0.5">{project.subtitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#112240] border border-[#233554] text-gray-400 hover:text-white hover:border-[#64ffda]/40 transition-colors cursor-pointer"
            title="Close Sandbox"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body - Dynamic Sandbox per Project */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {project.title === "Jev State Engine" && <JevStateEngineSandbox />}
          {project.title === "Synthetic Data Generator" && <SyntheticDataSandbox />}
          {project.title === "The Glitch Room" && <GlitchRoomSandbox />}
          {project.title === "QueryPDF" && <QueryPdfSandbox />}
          {project.title === "Solar Panel Defect Classification" && <SolarPanelSandbox />}
          {project.title === "AI Career Coach" && <AiCareerCoachSandbox />}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0a192f] border-t border-[#233554] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-gray-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Client-side interactive sandbox • Zero external backend latency</span>
          </div>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 rounded border border-[#64ffda] px-3 py-1.5 text-xs font-medium text-[#64ffda] hover:bg-[#64ffda]/10 transition-colors"
              >
                <FaGithub size={13} />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 rounded bg-[#64ffda] px-3 py-1.5 text-xs font-bold text-[#0a192f] hover:bg-[#52e0c4] transition-colors"
              >
                <ExternalLink size={13} />
                <span>Visit Live Site</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
