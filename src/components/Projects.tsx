import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Code2, Terminal, X, Layers } from 'lucide-react';
import { sfx } from '../utils/sound';

interface Project {
  id: string;
  fileTitle: string;
  badge: string;
  headerBg: string;
  title: string;
  desc: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  metrics: { label: string; value: string }[];
  codeSnippet: string;
  architectureNotes: string;
}

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'proj-1',
      fileTitle: 'weather_analytics_v2.py',
      badge: 'ML_APP',
      headerBg: 'bg-[#69c9f0] text-[#1c1b1b]',
      title: 'Weather Prediction & Analytics Dashboard',
      desc: 'Interactive forecasting dashboard parsing real-time meteorological sensor feeds. Leverages scikit-learn models for precipitation forecasting with instant Streamlit rendering.',
      tags: ['Python', 'Pandas', 'Scikit-Learn', 'Streamlit'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://weather-prediction-demo.streamlit.app',
      metrics: [
        { label: 'Forecast Accuracy', value: '92.4%' },
        { label: 'Data Latency', value: '< 1.2s' },
        { label: 'Sensors Polled', value: '45+ Feeds' },
      ],
      codeSnippet: `@st.cache_data\ndef train_weather_model(df):\n    X = df[['humidity', 'pressure', 'temp_c', 'wind_kph']]\n    y = df['precip_next_hour']\n    model = RandomForestClassifier(n_estimators=100, max_depth=8)\n    model.fit(X, y)\n    return model\n\n# Streaming sensor evaluation\nlive_reading = fetch_sensor_feed(API_KEY)\nprediction = model.predict_proba([live_reading])\nst.metric("Rain Probability", f"{prediction[0][1]*100:.1f}%")`,
      architectureNotes: 'Raw JSON feeds are parsed via Python asyncio, standardized into tabular format with Pandas, scored using a trained Random Forest model, and visualized in Streamlit.'
    },
    {
      id: 'proj-2',
      fileTitle: 'marketing_roi_calc.sql',
      badge: 'BI_ANALYTICS',
      headerBg: 'bg-[#9be5c3] text-[#1c1b1b]',
      title: 'Marketing Campaign & Multi-Channel ROI Analytics',
      desc: 'Comprehensive attribution model aggregating conversion pipelines from Google Ads, Meta, and newsletters into PostgreSQL. Generated high-fidelity Power BI performance dashboards.',
      tags: ['SQL', 'Power BI', 'PostgreSQL', 'Python'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://app.powerbi.com',
      metrics: [
        { label: 'Conversion Lift', value: '+34%' },
        { label: 'CAC Reduction', value: '-18%' },
        { label: 'Channels Tracked', value: '5 Sources' },
      ],
      codeSnippet: `WITH ChannelTouchpoints AS (\n    SELECT \n        customer_id,\n        channel_name,\n        spend_usd,\n        conversion_value,\n        ROW_NUMBER() OVER(PARTITION BY customer_id ORDER BY touch_timestamp ASC) as first_touch,\n        ROW_NUMBER() OVER(PARTITION BY customer_id ORDER BY touch_timestamp DESC) as last_touch\n    FROM raw_marketing_events\n)\nSELECT \n    channel_name,\n    SUM(spend_usd) as total_spend,\n    SUM(CASE WHEN last_touch = 1 THEN conversion_value ELSE 0 END) as attributed_revenue,\n    ROUND(SUM(CASE WHEN last_touch = 1 THEN conversion_value ELSE 0 END) / NULLIF(SUM(spend_usd), 0), 2) as roas\nFROM ChannelTouchpoints\nGROUP BY channel_name\nORDER BY roas DESC;`,
      architectureNotes: 'Raw conversion webhooks stored in PostgreSQL -> dbt models compute First-touch, Last-touch, and Linear attribution -> DirectQuery Power BI report.'
    },
    {
      id: 'proj-3',
      fileTitle: 'airflow_dag_orchestrator.py',
      badge: 'DATA_PIPELINE',
      headerBg: 'bg-[#ffd84d] text-[#1c1b1b]',
      title: 'Data Engineering ETL Visualizer',
      desc: 'Automated data ingestion workflow running in Dockerized Airflow DAGs. Extracts multi-format APIs, normalizes raw JSON data, and loads sanitized datasets into a relational PostgreSQL lakehouse.',
      tags: ['Apache Airflow', 'PostgreSQL', 'Docker', 'Python'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://airflow.apache.org',
      metrics: [
        { label: 'Pipeline Runs', value: 'Daily Batch' },
        { label: 'Ingestion Speed', value: '15k rec/sec' },
        { label: 'Error Rate', value: '< 0.01%' },
      ],
      codeSnippet: `default_args = {\n    'owner': 'dhanush_data',\n    'retries': 3,\n    'retry_delay': timedelta(minutes=5),\n}\n\nwith DAG('lakehouse_ingestion_pipeline', schedule='@daily', default_args=default_args) as dag:\n    t1_fetch = PythonOperator(task_id='extract_external_apis', python_callable=extract_api_payloads)\n    t2_clean = PythonOperator(task_id='validate_json_schema', python_callable=validate_and_sanitize)\n    t3_upsert = PostgresOperator(task_id='merge_into_lakehouse', sql='CALL upsert_daily_metrics();')\n    \n    t1_fetch >> t2_clean >> t3_upsert`,
      architectureNotes: 'Custom Docker container running Airflow Webserver, Scheduler, and Postgres backend. Implements idempotency and automated email notifications on task failures.'
    },
    {
      id: 'proj-4',
      fileTitle: 'snowflake_lakehouse.sql',
      badge: 'WAREHOUSE',
      headerBg: 'bg-[#ff7777] text-[#1c1b1b]',
      title: 'E-Commerce Sales & Customer Analytics',
      desc: 'Modeled a star-schema analytical warehouse in Snowflake. Automated transformation models via DBT and staged cloud assets in Amazon S3 for granular cohort retention reporting.',
      tags: ['Snowflake', 'AWS S3', 'DBT', 'Tableau'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://snowflake.com',
      metrics: [
        { label: 'Data Staged', value: '2.4 TB' },
        { label: 'Query Speedup', value: '4.8x' },
        { label: 'Cohort Retention', value: '60 Days' },
      ],
      codeSnippet: `-- Stage files from AWS S3 Bucket into Snowflake\nCREATE OR REPLACE STAGE s3_raw_orders_stage\n  URL = 's3://dhanush-lakehouse-warehouse/raw/orders/'\n  STORAGE_INTEGRATION = s3_int;\n\nCOPY INTO fact_order_sales\nFROM @s3_raw_orders_stage\nFILE_FORMAT = (TYPE = 'PARQUET')\nMATCH_BY_COLUMN_NAME = CASE_INSENSITIVE\nON_ERROR = 'CONTINUE';`,
      architectureNotes: 'Amazon S3 Raw Parquet -> Snowflake External Stage -> Snowpipe Ingestion -> dbt Medallion Architecture (Bronze -> Silver -> Gold Star Schema).'
    },
    {
      id: 'proj-5',
      fileTitle: 'placement_system.py',
      badge: 'CAMPUS_SYSTEM',
      headerBg: 'bg-[#e5e2e1] dark:bg-[#353842] text-[#1c1b1b] dark:text-[#F5F1E8]',
      title: 'Student Placement Analysis System',
      desc: 'Campus placement predictor and resume parser service created for academic performance evaluations. Built with FastAPI and machine learning classifiers to predict placement likelihood.',
      tags: ['FastAPI', 'Scikit-Learn', 'Python', 'MySQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://fastapi.tiangolo.com',
      metrics: [
        { label: 'Classification AUC', value: '0.89' },
        { label: 'Parsing Time', value: '350ms' },
        { label: 'Students Analyzed', value: '500+ Profiles' },
      ],
      codeSnippet: `@app.post("/api/v1/predict-placement")\nasync def predict_candidate_outcome(candidate: StudentProfilePayload):\n    features = np.array([\n        candidate.cgpa,\n        candidate.internships_count,\n        candidate.hackathons_participated,\n        candidate.leetcode_problems_solved,\n        candidate.soft_skills_score\n    ]).reshape(1, -1)\n    \n    prob = placement_model.predict_proba(features)[0][1]\n    tier = "High Probability" if prob > 0.75 else "Moderate Probability"\n    \n    return {\n        "candidate_id": candidate.student_id,\n        "placement_chance_percentage": round(prob * 100, 2),\n        "tier_category": tier\n    }`,
      architectureNotes: 'FastAPI microservice integrated with MySQL relational database and spaCy for resume text feature extraction.'
    },
  ];

  const handleOpenModal = (project: Project) => {
    sfx.pop();
    setActiveModalProject(project);
  };

  return (
    <section className="space-y-6 pt-2" id="projects">
      {/* Title & Count Badge */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 bg-white dark:bg-[#24262D] text-[#1c1b1b] dark:text-[#F5F1E8] px-3 py-1 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000] rotate-1">
          <FolderGit2 className="w-4 h-4 text-[#725c00] dark:text-[#FFD43B]" />
          <span className="font-headline text-lg font-black">
            Things I've Built 🚀
          </span>
        </div>
        <span className="font-code text-xs uppercase font-extrabold bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-2.5 py-0.5 border border-[#1c1b1b] dark:border-[#353842] shadow-[1.5px_1.5px_0px_#1c1b1b] dark:shadow-[1.5px_1.5px_0px_#000000]">
          5 FEATURED PROJECTS
        </span>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((proj, idx) => (
          <motion.article
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="bg-white dark:bg-[#24262D] border-[3px] border-[#1c1b1b] dark:border-[#353842] shadow-[5px_5px_0px_#1c1b1b] dark:shadow-[5px_5px_0px_#000000] overflow-hidden transition-colors"
          >
            {/* Retro Window Header */}
            <div className={`${proj.headerBg} px-3.5 py-2 border-b-[2.5px] border-[#1c1b1b] dark:border-[#353842] flex items-center justify-between`}>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a] border border-[#1c1b1b] dark:border-[#353842]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffd84d] border border-[#1c1b1b] dark:border-[#353842]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#9be5c3] border border-[#1c1b1b] dark:border-[#353842]" />
                <span className="font-code text-xs text-[#1c1b1b] font-black ml-2">
                  {proj.fileTitle}
                </span>
              </div>
              <span className="font-code text-[10px] uppercase font-black bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] px-2 py-0.5 border border-[#1c1b1b] dark:border-[#353842] shadow-[1px_1px_0px_#1c1b1b] dark:shadow-[1px_1px_0px_#000000]">
                {proj.badge}
              </span>
            </div>

            {/* Content Body */}
            <div className="p-4 sm:p-5 space-y-3.5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-headline text-xl sm:text-2xl font-black text-[#1c1b1b] dark:text-[#F5F1E8]">
                  {proj.title}
                </h3>
              </div>

              <p className="font-body text-sm sm:text-base text-[#1c1b1b] dark:text-[#d0cbbf] leading-relaxed">
                {proj.desc}
              </p>

              {/* Metrics Bar */}
              <div className="grid grid-cols-3 gap-2 bg-[#fcf9f8] dark:bg-[#191B20] p-2.5 border-2 border-[#1c1b1b] dark:border-[#353842]">
                {proj.metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <div className="font-headline text-sm sm:text-base font-black text-[#725c00] dark:text-[#FFD43B]">
                      {m.value}
                    </div>
                    <div className="font-code text-[9px] sm:text-[10px] uppercase text-[#4d4634] dark:text-[#d0cbbf] font-bold">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 py-1">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-code text-xs font-bold bg-[#f0eded] dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#55DFFF] px-2.5 py-1 border border-[#1c1b1b] dark:border-[#353842] shadow-[1px_1px_0px_#1c1b1b] dark:shadow-[1px_1px_0px_#000000]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t-2 border-dashed border-[#1c1b1b] dark:border-[#353842]">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sfx.blip(600, 0.04)}
                  className="font-code text-xs font-black bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] px-3.5 py-2 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#ffd84d] dark:hover:bg-[#353842] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>GitHub ↗</span>
                </a>

                <button
                  onClick={() => handleOpenModal(proj)}
                  className="font-code text-xs font-black bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-3.5 py-2 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#ffe07e] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#1c1b1b] dark:text-[#101114]" />
                  <span>View Code & Architecture 🔍</span>
                </button>

                {proj.liveUrl && (
                  <button
                    onClick={() => handleOpenModal(proj)}
                    className="font-code text-xs font-black bg-[#bce9ff] dark:bg-[#55DFFF] text-[#1c1b1b] dark:text-[#101114] px-3.5 py-2 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#69c9f0] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-1.5 cursor-pointer ml-auto"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Simulation ↗</span>
                  </button>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Interactive Modal for Architecture and Code */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1c1b1b]/70 dark:bg-[#000000]/80 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-[#24262D] border-[3.5px] border-[#1c1b1b] dark:border-[#353842] shadow-[8px_8px_0px_#1c1b1b] dark:shadow-[8px_8px_0px_#000000] max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Window Header */}
              <div className={`${activeModalProject.headerBg} p-3 border-b-2 border-[#1c1b1b] dark:border-[#353842] flex items-center justify-between sticky top-0 z-20`}>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ba1a1a] border border-[#1c1b1b] dark:border-[#353842]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffd84d] border border-[#1c1b1b] dark:border-[#353842]" />
                  <span className="w-3 h-3 rounded-full bg-[#9be5c3] border border-[#1c1b1b] dark:border-[#353842]" />
                  <span className="font-code text-xs font-black ml-2 text-[#1c1b1b]">
                    {activeModalProject.fileTitle} // INSPECTOR
                  </span>
                </div>
                <button
                  onClick={() => {
                    sfx.blip(500, 0.05);
                    setActiveModalProject(null);
                  }}
                  className="p-1 bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] border border-[#1c1b1b] dark:border-[#353842] shadow-[1.5px_1.5px_0px_#1c1b1b] dark:shadow-[1.5px_1.5px_0px_#000000] hover:bg-[#ff7777] cursor-pointer"
                >
                  <X className="w-4 h-4 text-[#1c1b1b] dark:text-[#F5F1E8]" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6 space-y-4">
                <div>
                  <span className="font-code text-[11px] uppercase font-bold bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-2 py-0.5 border border-[#1c1b1b] dark:border-[#353842]">
                    {activeModalProject.badge}
                  </span>
                  <h3 className="font-headline text-2xl font-black mt-2 text-[#1c1b1b] dark:text-[#F5F1E8]">
                    {activeModalProject.title}
                  </h3>
                  <p className="font-body text-sm text-[#1c1b1b] dark:text-[#d0cbbf] mt-1">
                    {activeModalProject.desc}
                  </p>
                </div>

                {/* Architecture Blueprint Note */}
                <div className="bg-[#bce9ff] dark:bg-[#191B20] p-3 border-2 border-[#1c1b1b] dark:border-[#55DFFF] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000]">
                  <div className="font-code text-xs uppercase font-black text-[#006783] dark:text-[#55DFFF] mb-1 flex items-center gap-1.5">
                    <Layers className="w-4 h-4" />
                    Pipeline Architecture & Flow
                  </div>
                  <p className="font-body text-xs text-[#1c1b1b] dark:text-[#F5F1E8] leading-relaxed">
                    {activeModalProject.architectureNotes}
                  </p>
                </div>

                {/* Code Snippet Terminal View */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-code text-xs font-bold text-[#1c1b1b] dark:text-[#F5F1E8]">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#725c00] dark:text-[#FFD43B]" />
                      Source Code Preview:
                    </span>
                    <span className="text-[10px] text-[#4d4634] dark:text-[#d0cbbf]">PYTHON / SQL RUNTIME</span>
                  </div>
                  <pre className="bg-[#1c1b1b] dark:bg-[#101114] text-[#ffd84d] dark:text-[#FFD43B] p-3.5 border-2 border-[#1c1b1b] dark:border-[#353842] font-code text-xs overflow-x-auto shadow-[inset_2px_2px_0px_rgba(0,0,0,0.5)]">
                    <code>{activeModalProject.codeSnippet}</code>
                  </pre>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-2">
                  {activeModalProject.metrics.map((m, i) => (
                    <div key={i} className="p-2 bg-[#fcf9f8] dark:bg-[#191B20] border-2 border-[#1c1b1b] dark:border-[#353842] text-center">
                      <div className="font-headline text-lg font-black text-[#725c00] dark:text-[#FFD43B]">{m.value}</div>
                      <div className="font-code text-[10px] uppercase font-bold text-[#4d4634] dark:text-[#d0cbbf]">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Modal Footer */}
                <div className="flex justify-end gap-2 pt-3 border-t-2 border-dashed border-[#1c1b1b] dark:border-[#353842]">
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-code text-xs uppercase font-bold bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-4 py-2 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#ffe07e] flex items-center gap-1"
                  >
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
