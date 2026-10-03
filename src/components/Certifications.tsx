import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Database,
  Cloud,
  Code2,
  Copy,
  Check,
  ExternalLink,
  X,
  FileCheck2
} from 'lucide-react';
import { sfx } from '../utils/sound';

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  badge: string;
  badgeColor: string;
  issuedDate: string;
  credentialId: string;
  skills: string[];
  description: string;
  scoreHighlight?: string;
  certImage?: string;
  isFeatured?: boolean;
  scoreDetails?: {
    total: string;
    assignments: string;
    exam: string;
    candidates: string;
  };
}

export const Certifications: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const certifications: CertificationItem[] = [
    {
      id: 'nptel-cloud-distributed',
      title: 'Cloud Computing and Distributed Systems',
      issuer: 'NPTEL (Funded by MoE, Govt. of India) & IIT Kanpur',
      badge: 'ELITE CERTIFICATION',
      badgeColor: 'bg-[#ff4d4d] text-white',
      issuedDate: 'Jan - Mar 2026 (8-Week Course, 3 Credits)',
      credentialId: 'NPTEL26CS29S562100199',
      scoreHighlight: '84% (Assignments 25/25, Exam 58.5/75)',
      certImage: '/assets/nptel_elite_certificate.png',
      isFeatured: true,
      skills: ['Cloud Computing', 'Distributed Systems', 'Virtualization', 'Consensus Algorithms', 'Fault Tolerance'],
      description:
        'Awarded Elite certification by IIT Kanpur and the Ministry of Education, Govt. of India. Comprehensive study of distributed architectures, consensus protocols, virtualization, fault-tolerant systems, and cloud computing models.',
      scoreDetails: {
        total: '84%',
        assignments: '25 / 25 (100%)',
        exam: '58.5 / 75',
        candidates: 'Top rank among 4,819 candidates'
      }
    },
    {
      id: 'datacamp-data-engineering',
      title: 'Understanding Data Engineering',
      issuer: 'DataCamp',
      badge: 'DATACAMP CERTIFIED',
      badgeColor: 'bg-[#00e699] text-[#1c1b1b]',
      issuedDate: 'Issued Jun 2026',
      credentialId: 'e1810b85a6488500401c7cd413126cc06cbef792',
      skills: ['Data Engineering', 'Data Pipelines', 'Data Warehouses', 'Data Lakes', 'ETL Architecture'],
      description:
        'Foundational knowledge in architecting modern data pipelines, distributed data lakes, cloud warehouses, schema normalization, and production ETL workflows.'
    },
    {
      id: 'datacamp-aws-concepts',
      title: 'AWS Concepts',
      issuer: 'DataCamp',
      badge: 'DATACAMP CERTIFIED',
      badgeColor: 'bg-[#55DFFF] text-[#1c1b1b]',
      issuedDate: 'Issued Jun 2026',
      credentialId: 'bc1c612456ba9d22d656035339c61131a83f279f?raw=1',
      skills: ['Amazon Web Services (AWS)', 'Cloud Architecture', 'IAM Security', 'S3 & EC2', 'Cloud Economics'],
      description:
        'Mastery of core AWS cloud architecture, serverless infrastructure, Identity & Access Management (IAM), storage protocols, and high availability systems.'
    },
    {
      id: 'simplilearn-sql',
      title: 'Introduction to SQL',
      issuer: 'Simplilearn',
      badge: 'SIMPLILEARN VERIFIED',
      badgeColor: 'bg-[#ffd84d] text-[#1c1b1b]',
      issuedDate: 'Issued Jun 2026',
      credentialId: '10323832_10602311_1780934149660.pdf',
      skills: ['SQL', 'Relational Databases', 'Complex Joins', 'Subqueries', 'Aggregations'],
      description:
        'Practical proficiency in relational database querying, multi-table joins, analytical subqueries, aggregate grouping, and database schema constraints.'
    }
  ];

  const handleCopy = (id: string, textToCopy: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    sfx.blip(900, 0.08);
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const handleOpenModal = (cert: CertificationItem) => {
    sfx.pop();
    setSelectedCert(cert);
  };

  const handleCloseModal = () => {
    sfx.blip(500, 0.05);
    setSelectedCert(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  return (
    <section className="space-y-4 pt-2" id="certifications">
      {/* Section Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="inline-flex items-center gap-2 bg-white dark:bg-[#24262D] text-[#1c1b1b] dark:text-[#F5F1E8] px-3 py-1 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000]">
          <Award className="w-4 h-4 text-[#725c00] dark:text-[#FFD43B]" />
          <h2 className="font-headline text-lg font-black">
            Licenses &amp; Verified Certifications 🏆
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-code text-xs uppercase bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-2.5 py-0.5 border border-[#1c1b1b] dark:border-[#353842] font-black shadow-[1.5px_1.5px_0px_#1c1b1b] dark:shadow-[1.5px_1.5px_0px_#000000]">
            ⭐ NPTEL ELITE: 84%
          </span>
          <span className="font-code text-xs uppercase bg-[#9be5c3] dark:bg-[#4ade80] text-[#1c1b1b] px-2.5 py-0.5 border border-[#1c1b1b] dark:border-[#353842] font-black shadow-[1.5px_1.5px_0px_#1c1b1b] dark:shadow-[1.5px_1.5px_0px_#000000]">
            4 VERIFIED
          </span>
        </div>
      </div>

      {/* FEATURED: NPTEL Elite Spotlight Card */}
      {certifications
        .filter((c) => c.isFeatured)
        .map((cert) => (
          <motion.div
            key={cert.id}
            whileHover={{ y: -2 }}
            onClick={() => handleOpenModal(cert)}
            className="bg-white dark:bg-[#24262D] p-5 sm:p-6 border-[3px] border-[#1c1b1b] dark:border-[#353842] shadow-[5px_5px_0px_#1c1b1b] dark:shadow-[5px_5px_0px_#000000] relative cursor-pointer hover:shadow-[0_0_24px_rgba(255,216,77,0.3)] dark:hover:shadow-[0_0_28px_rgba(85,223,255,0.3)] transition-all"
          >
            {/* Washi Tape */}
            <div className="w-16 h-4 washi-tape absolute -top-2 right-8 -rotate-1" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Column: Details */}
              <div className="lg:col-span-8 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-code text-[11px] uppercase font-black px-2 py-0.5 bg-[#a8363a] text-white border border-[#1c1b1b] dark:border-[#353842] shadow-[1.5px_1.5px_0px_#1c1b1b]">
                    🏅 {cert.badge}
                  </span>
                  <span className="font-code text-[11px] font-bold bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-2 py-0.5 border border-[#1c1b1b] dark:border-[#353842]">
                    IIT KANPUR • SWAYAM
                  </span>
                  <span className="font-code text-[11px] text-[#4d4634] dark:text-[#d0cbbf] font-medium">
                    {cert.issuedDate}
                  </span>
                </div>

                <div>
                  <h3 className="font-headline text-2xl sm:text-3xl font-black text-[#1c1b1b] dark:text-[#F5F1E8]">
                    {cert.title}
                  </h3>
                  <p className="font-code text-xs font-bold text-[#725c00] dark:text-[#FFD43B] mt-0.5">
                    {cert.issuer}
                  </p>
                </div>

                <p className="font-body text-xs sm:text-sm text-[#4d4634] dark:text-[#d0cbbf] leading-relaxed">
                  {cert.description}
                </p>

                {/* Score Breakdown Pill Grid */}
                {cert.scoreDetails && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    <div className="bg-[#f0eded] dark:bg-[#191B20] p-2 border border-[#1c1b1b] dark:border-[#353842]">
                      <span className="font-code text-[10px] text-[#7e7662] dark:text-[#8e8a82] block">Final Score</span>
                      <span className="font-code text-sm font-black text-[#1c1b1b] dark:text-[#F5F1E8]">{cert.scoreDetails.total}</span>
                    </div>
                    <div className="bg-[#f0eded] dark:bg-[#191B20] p-2 border border-[#1c1b1b] dark:border-[#353842]">
                      <span className="font-code text-[10px] text-[#7e7662] dark:text-[#8e8a82] block">Assignments</span>
                      <span className="font-code text-sm font-black text-[#006d32] dark:text-[#4ade80]">{cert.scoreDetails.assignments}</span>
                    </div>
                    <div className="bg-[#f0eded] dark:bg-[#191B20] p-2 border border-[#1c1b1b] dark:border-[#353842]">
                      <span className="font-code text-[10px] text-[#7e7662] dark:text-[#8e8a82] block">Proctored Exam</span>
                      <span className="font-code text-sm font-black text-[#1c1b1b] dark:text-[#F5F1E8]">{cert.scoreDetails.exam}</span>
                    </div>
                    <div className="bg-[#f0eded] dark:bg-[#191B20] p-2 border border-[#1c1b1b] dark:border-[#353842]">
                      <span className="font-code text-[10px] text-[#7e7662] dark:text-[#8e8a82] block">Certified Cohort</span>
                      <span className="font-code text-xs font-bold text-[#006783] dark:text-[#55DFFF]">4,819 Candidates</span>
                    </div>
                  </div>
                )}

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-code text-[10px] font-bold bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] px-2 py-0.5 border border-[#1c1b1b] dark:border-[#353842]"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>

                {/* Credential Action */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="font-code text-xs text-[#1c1b1b] dark:text-[#d0cbbf] flex items-center gap-1.5">
                    <span className="font-bold">Roll / Credential:</span>
                    <code className="bg-[#fff9e6] dark:bg-[#15171c] px-2 py-0.5 border border-[#1c1b1b] dark:border-[#353842] text-[11px] font-bold text-[#725c00] dark:text-[#FFD43B]">
                      {cert.credentialId}
                    </code>
                  </div>
                  <button
                    onClick={(e) => handleCopy(cert.id, cert.credentialId, e)}
                    className="font-code text-[11px] uppercase font-bold px-2.5 py-1 bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] border border-[#1c1b1b] dark:border-[#353842] shadow-[1.5px_1.5px_0px_#1c1b1b] dark:shadow-[1.5px_1.5px_0px_#000000] hover:bg-[#bce9ff] dark:hover:bg-[#353842] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    {copiedId === cert.id ? <Check className="w-3 h-3 text-[#006d32] dark:text-[#4ade80]" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === cert.id ? 'COPIED!' : 'COPY ID'}</span>
                  </button>
                  <span className="font-code text-xs text-[#006783] dark:text-[#55DFFF] font-bold underline ml-auto flex items-center gap-1">
                    <span>Inspect Full Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Right Column: Certificate Thumbnail Preview */}
              {cert.certImage && (
                <div className="lg:col-span-4">
                  <div className="border-[2.5px] border-[#1c1b1b] dark:border-[#353842] shadow-[4px_4px_0px_#1c1b1b] dark:shadow-[4px_4px_0px_#000000] bg-black overflow-hidden relative group">
                    <img
                      src={cert.certImage}
                      alt="NPTEL Elite Certificate - Cloud Computing and Distributed Systems"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="font-code text-xs font-black bg-[#ffd84d] text-[#1c1b1b] px-3 py-1.5 border border-[#1c1b1b] shadow-[2px_2px_0px_#1c1b1b]">
                        Click to Expand 🔍
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}

      {/* Grid of 3 Industry Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {certifications
          .filter((c) => !c.isFeatured)
          .map((cert, index) => {
            const icons = {
              'datacamp-data-engineering': <Database className="w-5 h-5 text-[#1c1b1b] dark:text-[#101114]" />,
              'datacamp-aws-concepts': <Cloud className="w-5 h-5 text-[#1c1b1b] dark:text-[#101114]" />,
              'simplilearn-sql': <Code2 className="w-5 h-5 text-[#1c1b1b] dark:text-[#101114]" />
            };

            const tapeClass = index % 2 === 0 ? 'washi-tape' : 'washi-tape-blue';

            return (
              <motion.div
                key={cert.id}
                whileHover={{ y: -3 }}
                onClick={() => handleOpenModal(cert)}
                className="bg-white dark:bg-[#24262D] p-5 border-[2.5px] border-[#1c1b1b] dark:border-[#353842] shadow-[4px_4px_0px_#1c1b1b] dark:shadow-[4px_4px_0px_#000000] relative cursor-pointer flex flex-col justify-between hover:shadow-[0_0_20px_rgba(255,216,77,0.25)] dark:hover:shadow-[0_0_20px_rgba(85,223,255,0.25)] transition-all"
              >
                {/* Washi Tape */}
                <div className={`w-12 h-3.5 ${tapeClass} absolute -top-1.5 right-6 rotate-1`} />

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className={`p-2 ${cert.badgeColor} border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] shrink-0`}>
                      {icons[cert.id as keyof typeof icons] || <Award className="w-5 h-5" />}
                    </div>
                    <span className="font-code text-[10px] uppercase font-black px-1.5 py-0.5 bg-[#f0eded] dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#d0cbbf] border border-[#1c1b1b] dark:border-[#353842]">
                      {cert.issuer}
                    </span>
                  </div>

                  <div>
                    <span className="font-code text-[10px] text-[#7e7662] dark:text-[#8e8a82]">
                      {cert.issuedDate}
                    </span>
                    <h4 className="font-headline text-lg font-black mt-0.5 text-[#1c1b1b] dark:text-[#F5F1E8] leading-snug">
                      {cert.title}
                    </h4>
                  </div>

                  <p className="font-body text-xs text-[#4d4634] dark:text-[#d0cbbf] leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="font-code text-[9px] font-bold bg-[#fcf9f8] dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] px-1.5 py-0.5 border border-[#1c1b1b] dark:border-[#353842]"
                      >
                        #{skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer with Credential ID & Copy Button */}
                <div className="pt-4 border-t border-dashed border-[#1c1b1b] dark:border-[#353842] mt-3 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-code">
                    <span className="text-[#7e7662] dark:text-[#8e8a82] font-bold">Credential:</span>
                    <span
                      title={cert.credentialId}
                      className="font-mono text-[10px] text-[#1c1b1b] dark:text-[#F5F1E8] truncate max-w-[150px] bg-[#f0eded] dark:bg-[#191B20] px-1.5 py-0.5 border border-[#1c1b1b] dark:border-[#353842]"
                    >
                      {cert.credentialId.slice(0, 16)}...
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={(e) => handleCopy(cert.id, cert.credentialId, e)}
                      className="font-code text-[10px] uppercase font-black px-2 py-1 bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] border border-[#1c1b1b] dark:border-[#353842] shadow-[1.5px_1.5px_0px_#1c1b1b] dark:shadow-[1.5px_1.5px_0px_#000000] hover:bg-[#ffe07e] flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      {copiedId === cert.id ? <Check className="w-3 h-3 text-[#006d32]" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId === cert.id ? 'COPIED!' : 'COPY CREDENTIAL ID'}</span>
                    </button>

                    <span className="font-code text-[10px] text-[#006783] dark:text-[#55DFFF] font-bold underline">
                      Inspect 🔍
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
      </div>

      {/* Certification Details & Inspection Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs cursor-pointer"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-[#24262D] border-[3px] border-[#1c1b1b] dark:border-[#353842] shadow-[8px_8px_0px_#1c1b1b] dark:shadow-[8px_8px_0px_#000000] w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col cursor-default"
            >
              {/* Modal Header */}
              <div className="bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-4 py-3 border-b-[2.5px] border-[#1c1b1b] dark:border-[#353842] flex items-center justify-between">
                <div className="flex items-center gap-2 font-code text-xs font-black uppercase">
                  <FileCheck2 className="w-4 h-4" />
                  <span>Verified Credential Record • {selectedCert.issuer}</span>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-1 bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] border border-[#1c1b1b] dark:border-[#353842] shadow-[1.5px_1.5px_0px_#1c1b1b] hover:bg-[#ff7777] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-[#1c1b1b] dark:text-[#F5F1E8]">
                {/* Certificate High-Res Image if available */}
                {selectedCert.certImage && (
                  <div className="border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[4px_4px_0px_#1c1b1b] overflow-hidden bg-black">
                    <img
                      src={selectedCert.certImage}
                      alt={selectedCert.title}
                      className="w-full h-auto object-contain max-h-[380px] mx-auto"
                    />
                  </div>
                )}

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className={`font-code text-[10px] font-black uppercase px-2 py-0.5 ${selectedCert.badgeColor} border border-[#1c1b1b]`}>
                      {selectedCert.badge}
                    </span>
                    <span className="font-code text-xs text-[#7e7662] dark:text-[#8e8a82]">
                      {selectedCert.issuedDate}
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-black">{selectedCert.title}</h3>
                  <p className="font-code text-xs font-bold text-[#725c00] dark:text-[#FFD43B] mt-0.5">
                    {selectedCert.issuer}
                  </p>
                </div>

                <p className="font-body text-sm text-[#4d4634] dark:text-[#d0cbbf] leading-relaxed">
                  {selectedCert.description}
                </p>

                {/* Full Credential ID Box */}
                <div className="p-3 bg-[#fcf9f8] dark:bg-[#191B20] border-2 border-[#1c1b1b] dark:border-[#353842] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-code text-xs font-bold uppercase text-[#725c00] dark:text-[#FFD43B]">
                      Official Credential ID / Verification String:
                    </span>
                    <button
                      onClick={() => handleCopy(selectedCert.id, selectedCert.credentialId)}
                      className="font-code text-xs uppercase font-bold px-2 py-1 bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] border border-[#1c1b1b] flex items-center gap-1 cursor-pointer"
                    >
                      {copiedId === selectedCert.id ? <Check className="w-3.5 h-3.5 text-[#006d32]" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedId === selectedCert.id ? 'COPIED!' : 'COPY ID'}</span>
                    </button>
                  </div>
                  <div className="font-mono text-xs break-all bg-white dark:bg-[#101114] p-2 border border-[#1c1b1b] dark:border-[#353842]">
                    {selectedCert.credentialId}
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-1.5">
                  <span className="font-code text-xs uppercase font-bold text-[#1c1b1b] dark:text-[#F5F1E8]">
                    Verified Skills &amp; Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skills.map((s) => (
                      <span
                        key={s}
                        className="font-code text-xs font-bold bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-2 py-0.5 border border-[#1c1b1b] dark:border-[#353842]"
                      >
                        ✓ {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-dashed border-[#1c1b1b] dark:border-[#353842] flex justify-end">
                  <button
                    onClick={handleCloseModal}
                    className="font-code text-xs font-black uppercase px-4 py-2 bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#ffd84d] cursor-pointer"
                  >
                    Close Window ✕
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
