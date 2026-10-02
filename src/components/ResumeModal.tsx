import React from 'react';
import { motion } from 'framer-motion';
import { X, Printer, GraduationCap, Award, Database, Code2 } from 'lucide-react';
import { sfx } from '../utils/sound';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    sfx.success();
    // Trigger print or download simulation
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#1c1b1b]/70 backdrop-blur-xs">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white border-[3.5px] border-[#1c1b1b] shadow-[8px_8px_0px_#1c1b1b] max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden"
      >
        {/* Retro Header */}
        <div className="bg-[#ffd84d] p-3 border-b-2 border-[#1c1b1b] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ba1a1a] border border-[#1c1b1b]" />
            <span className="w-3 h-3 rounded-full bg-[#69c9f0] border border-[#1c1b1b]" />
            <span className="w-3 h-3 rounded-full bg-[#9be5c3] border border-[#1c1b1b]" />
            <span className="font-code text-xs font-black ml-2 text-[#1c1b1b]">
              dhanush_resume_2025.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="font-code text-[11px] uppercase font-black bg-white px-2.5 py-1 border border-[#1c1b1b] shadow-[1.5px_1.5px_0px_#1c1b1b] hover:bg-[#bce9ff] flex items-center gap-1 cursor-pointer"
            >
              <Printer className="w-3 h-3" />
              <span>PRINT / SAVE</span>
            </button>
            <button
              onClick={() => {
                sfx.blip(500, 0.05);
                onClose();
              }}
              className="p-1 bg-white border border-[#1c1b1b] shadow-[1.5px_1.5px_0px_#1c1b1b] hover:bg-[#ff7777] cursor-pointer"
            >
              <X className="w-4 h-4 text-[#1c1b1b]" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 text-[#1c1b1b] bg-[#fffdf6]">
          {/* Header */}
          <div className="border-b-2 border-[#1c1b1b] pb-4 flex flex-wrap justify-between items-start gap-4">
            <div>
              <h2 className="font-headline text-3xl font-black">DHANUSH</h2>
              <p className="font-code text-xs uppercase font-extrabold text-[#725c00] mt-0.5">
                ASPIRING DATA ENGINEER • CLOUD & DATA ENTHUSIAST
              </p>
              <p className="font-body text-xs text-[#4d4634] mt-1">
                Mangaluru, Karnataka, India • dhanush.data@example.com • linkedin.com/in/dhanush-data
              </p>
            </div>
            <div className="bg-[#ffd84d] p-2 border-2 border-[#1c1b1b] font-headline text-xl font-black shadow-[2px_2px_0px_#1c1b1b]">
              MCA 2025
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="font-headline text-base font-black uppercase text-[#1c1b1b] flex items-center gap-1.5 border-b border-dashed border-[#1c1b1b] pb-1">
              <GraduationCap className="w-4 h-4 text-[#725c00]" />
              Education
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between font-code font-bold">
                <span>MCA (Master of Computer Applications) — Canara College, Mangaluru</span>
                <span className="text-[#725c00]">2023 - 2025</span>
              </div>
              <p className="font-body text-[#4d4634]">Focus: Distributed Lakehouse Architectures, Cloud Platforms, Query Optimization.</p>

              <div className="flex justify-between font-code font-bold pt-1">
                <span>BCA (Bachelor of Computer Applications) — Canara College, Mangaluru</span>
                <span className="text-[#006783]">2020 - 2023</span>
              </div>
              <p className="font-body text-[#4d4634]">Graduated with Distinction (85%+). Core algorithms, database theory & OOP.</p>
            </div>
          </div>

          {/* Technical Toolkit */}
          <div className="space-y-2">
            <h3 className="font-headline text-base font-black uppercase text-[#1c1b1b] flex items-center gap-1.5 border-b border-dashed border-[#1c1b1b] pb-1">
              <Database className="w-4 h-4 text-[#006783]" />
              Technical Toolkit
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-code">
              <div><strong>Languages:</strong> Python, SQL, Java, Bash, JavaScript</div>
              <div><strong>Data Eng:</strong> Apache Airflow, PostgreSQL, Snowflake, PySpark, dbt</div>
              <div><strong>Cloud & DevOps:</strong> AWS (S3, EC2), MS Fabric, Docker, Git, CI/CD</div>
              <div><strong>Analytics:</strong> Power BI, Pandas, NumPy, Scikit-Learn, Streamlit</div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-2.5">
            <h3 className="font-headline text-base font-black uppercase text-[#1c1b1b] flex items-center gap-1.5 border-b border-dashed border-[#1c1b1b] pb-1">
              <Code2 className="w-4 h-4 text-[#725c00]" />
              Key Data Projects
            </h3>

            <div className="text-xs space-y-1">
              <div className="font-code font-bold text-[#1c1b1b]">
                1. Weather Prediction & Analytics Dashboard (Python, Scikit-Learn, Streamlit)
              </div>
              <p className="font-body text-[#4d4634]">
                Streamlined sensor parsing pipeline with Random Forest rainfall classification achieving 92.4% accuracy.
              </p>
            </div>

            <div className="text-xs space-y-1">
              <div className="font-code font-bold text-[#1c1b1b]">
                2. Marketing Campaign & Multi-Channel ROI Analytics (SQL, Power BI, PostgreSQL)
              </div>
              <p className="font-body text-[#4d4634]">
                Attributed cross-channel touchpoint conversions, saving 18% customer acquisition costs via actionable dashboard.
              </p>
            </div>

            <div className="text-xs space-y-1">
              <div className="font-code font-bold text-[#1c1b1b]">
                3. Automated ETL Lakehouse Orchestrator (Apache Airflow, PostgreSQL, Docker)
              </div>
              <p className="font-body text-[#4d4634]">
                Engineered scheduled batch ingestion pipeline processing 15,000 rec/sec with automated schema reconciliation.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h3 className="font-headline text-base font-black uppercase text-[#1c1b1b] flex items-center gap-1.5 border-b border-dashed border-[#1c1b1b] pb-1">
              <Award className="w-4 h-4 text-[#a8363a]" />
              Certifications & Honors
            </h3>
            <ul className="text-xs space-y-1 list-disc list-inside font-body text-[#1c1b1b]">
              <li><strong>NPTEL Cloud Computing:</strong> Score 84% (Top Percentile, IIT Kharagpur)</li>
              <li><strong>NPTEL Distributed Systems:</strong> Elite Achievement Award (IIT Madras)</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
