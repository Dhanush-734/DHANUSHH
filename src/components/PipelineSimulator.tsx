import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle2, Database, Server, Filter, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sfx } from '../utils/sound';

export const PipelineSimulator: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [processedCount, setProcessedCount] = useState<number>(0);
  const [logs, setLogs] = useState<string[]>([
    '[INIT] Airflow DAG worker initialized: lakehouse_daily_sync',
    '[STANDBY] Awaiting trigger signal...',
  ]);

  const steps = [
    { title: '1. INGESTION', desc: 'Pulling 5,000 raw JSON records from API endpoints', icon: Server },
    { title: '2. CLEANSE', desc: 'Deduplicating keys & validating NULL constraints', icon: Filter },
    { title: '3. TRANSFORM', desc: 'PySpark schema casting & dimensional joins', icon: Database },
    { title: '4. WAREHOUSE', desc: 'Atomic MERGE into Snowflake Fact_Orders', icon: CheckCircle2 },
  ];

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStep(1);
    setProcessedCount(0);
    sfx.blip(500, 0.1);

    setLogs([
      '[DAG_START] Execution date: 2026-10-02T16:30:00Z',
      '[STAGE 1] Ingesting API feeds: status 200 OK (5,420 raw payloads extracted)',
    ]);

    setTimeout(() => {
      setCurrentStep(2);
      setProcessedCount(1850);
      sfx.blip(650, 0.1);
      setLogs(prev => [
        ...prev,
        '[STAGE 2] Schema check: 0 invalid types, 14 duplicate records pruned',
      ]);
    }, 1200);

    setTimeout(() => {
      setCurrentStep(3);
      setProcessedCount(3900);
      sfx.blip(800, 0.1);
      setLogs(prev => [
        ...prev,
        '[STAGE 3] PySpark job partition 1..8 completed in 1.4s (Broadcast join applied)',
      ]);
    }, 2400);

    setTimeout(() => {
      setCurrentStep(4);
      setProcessedCount(5406);
      sfx.success();
      setIsRunning(false);
      setLogs(prev => [
        ...prev,
        '[STAGE 4] Snowflake MERGE INTO fact_orders (5,406 rows inserted, 0 failed)',
        '[SUCCESS] DAG run successful! Pipeline health: 100% 🟢',
      ]);

      confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#ffd84d', '#9be5c3', '#69c9f0', '#1c1b1b']
      });
    }, 3600);
  };

  const resetSimulation = () => {
    sfx.blip(400, 0.05);
    setIsRunning(false);
    setCurrentStep(0);
    setProcessedCount(0);
    setLogs([
      '[RESET] Simulator reset to standby state.',
      '[STANDBY] Ready for next trigger.',
    ]);
  };

  return (
    <section className="space-y-4 pt-2" id="pipeline-lab">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 bg-white dark:bg-[#24262D] text-[#1c1b1b] dark:text-[#F5F1E8] px-3 py-1 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000] -rotate-1">
          <Terminal className="w-4 h-4 text-[#725c00] dark:text-[#FFD43B]" />
          <span className="font-headline text-lg font-black">
            Interactive Data Lab Simulator ⚡
          </span>
        </div>
        <span className="font-code text-[11px] uppercase font-bold bg-[#9be5c3] dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#55DFFF] px-2 py-0.5 border border-[#1c1b1b] dark:border-[#353842]">
          LIVE DAG WORKBENCH
        </span>
      </div>

      {/* Retro Simulator Panel */}
      <div className="bg-white dark:bg-[#191B20] border-[3px] border-[#1c1b1b] dark:border-[#353842] shadow-[6px_6px_0px_#1c1b1b] dark:shadow-[6px_6px_0px_#000000] p-4 sm:p-5 relative bg-halftone-light transition-colors">
        {/* Top bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b-2 border-[#1c1b1b] dark:border-[#353842] bg-white dark:bg-[#24262D] p-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ba1a1a] border border-[#1c1b1b] dark:border-[#353842]" />
            <span className="w-3 h-3 rounded-full bg-[#ffd84d] border border-[#1c1b1b] dark:border-[#353842]" />
            <span className="w-3 h-3 rounded-full bg-[#9be5c3] border border-[#1c1b1b] dark:border-[#353842]" />
            <span className="font-code text-xs font-black text-[#1c1b1b] dark:text-[#F5F1E8] ml-1">
              etl_orchestrator_sim.sh
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className={`font-code text-xs uppercase font-black px-4 py-2 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2.5px_2.5px_0px_#1c1b1b] dark:shadow-[2.5px_2.5px_0px_#000000] flex items-center gap-1.5 transition-all cursor-pointer ${
                isRunning
                  ? 'bg-[#eae7e7] dark:bg-[#353842] text-[#7e7662] dark:text-[#8e8a82] cursor-not-allowed'
                  : 'bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] hover:bg-[#ffe07e] active:translate-x-[2px] active:translate-y-[2px]'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-[#1c1b1b] dark:fill-[#101114]" />
              <span>{isRunning ? 'RUNNING DAG...' : 'RUN PIPELINE DAG 🚀'}</span>
            </button>

            <button
              onClick={resetSimulation}
              disabled={isRunning}
              className="p-2 border-2 border-[#1c1b1b] dark:border-[#353842] bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#f6f3f2] dark:hover:bg-[#24262D] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
              title="Reset Simulator"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 Pipeline Step Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          {steps.map((st, i) => {
            const stepNum = i + 1;
            const isCompleted = currentStep > stepNum;
            const isCurrent = currentStep === stepNum;
            const Icon = st.icon;

            return (
              <div
                key={i}
                className={`p-3 border-2 border-[#1c1b1b] dark:border-[#353842] transition-all ${
                  isCurrent
                    ? 'bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] shadow-[4px_4px_0px_#1c1b1b] dark:shadow-[4px_4px_0px_#000000] scale-[1.02]'
                    : isCompleted
                    ? 'bg-[#9be5c3] dark:bg-[#24262D] dark:border-[#55DFFF] text-[#1c1b1b] dark:text-[#F5F1E8] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000]'
                    : 'bg-white dark:bg-[#24262D] text-[#1c1b1b] dark:text-[#F5F1E8] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`font-code text-[11px] font-black uppercase ${isCurrent ? 'text-[#1c1b1b]' : 'text-[#1c1b1b] dark:text-[#F5F1E8]'}`}>
                    {st.title}
                  </span>
                  <Icon className={`w-4 h-4 ${isCurrent ? 'text-[#1c1b1b]' : isCompleted ? 'text-[#006d32] dark:text-[#55DFFF]' : 'text-[#1c1b1b] dark:text-[#F5F1E8]'}`} />
                </div>
                <p className={`font-body text-xs ${isCurrent ? 'text-[#1c1b1b]' : 'text-[#1c1b1b] dark:text-[#d0cbbf]'}`}>
                  {st.desc}
                </p>
                <div className="mt-2 text-[10px] font-code font-bold uppercase">
                  {isCompleted && (
                    <span className="text-[#006d32] dark:text-[#55DFFF]">✅ PASSED</span>
                  )}
                  {isCurrent && (
                    <span className="text-[#1c1b1b]">⚡ IN PROGRESS...</span>
                  )}
                  {!isCompleted && !isCurrent && (
                    <span className="text-[#7e7662] dark:text-[#8e8a82]">⏳ PENDING</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Terminal Live Output Log */}
        <div className="bg-[#1c1b1b] dark:bg-[#101114] border-2 border-[#1c1b1b] dark:border-[#353842] p-3 shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000]">
          <div className="flex items-center justify-between text-[#dcd9d9] dark:text-[#d0cbbf] font-code text-[11px] border-b border-[#313030] dark:border-[#353842] pb-1.5 mb-2">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00a843] animate-ping" />
              <span>TERMINAL STREAM // AIRFLOW WORKER</span>
            </span>
            <span className="text-[#ffd84d] dark:text-[#FFD43B] font-bold">
              RECORDS PROCESSED: {processedCount.toLocaleString()}
            </span>
          </div>

          <div className="font-code text-xs text-[#9be5c3] dark:text-[#55DFFF] space-y-1 max-h-28 overflow-y-auto">
            {logs.map((log, index) => (
              <div key={index} className="leading-snug">
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
