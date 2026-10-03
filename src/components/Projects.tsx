import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  ExternalLink,
  Code2,
  Terminal,
  X,
  Layers,
  CheckCircle2,
  AlertCircle,
  Database,
  Cpu,
  BarChart3,
  Cloud,
  FileCode2,
  Sparkles,
  Layout,
  Workflow,
  ShieldCheck,
  Globe,
  SlidersHorizontal
} from 'lucide-react';
import { sfx } from '../utils/sound';
import { GithubIcon } from './SocialIcons';

export interface ProjectData {
  id: string;
  fileTitle: string;
  badge: string;
  headerBg: string;
  title: string;
  desc: string;
  categories: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  overview: string;
  problemStatement: string;
  solution: string;
  mainFeatures: string[];
  architectureFlow: { step: string; label: string; desc: string }[];
  techStackBreakdown: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    analyticsOrTools?: string[];
  };
  metrics: { label: string; value: string }[];
  codeSnippet: string;
  codeLanguage: string;
}

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All Projects');
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const filterCategories = [
    'All Projects',
    'Data Engineering',
    'Data Analytics',
    'Machine Learning',
    'Full Stack Development',
    'Freelance Projects'
  ];

  const projects: ProjectData[] = [
    {
      id: 'marketing-analytics',
      fileTitle: 'marketing_analytics_platform.tsx',
      badge: 'ANALYTICS_PLATFORM',
      headerBg: 'bg-[#ffd84d] text-[#1c1b1b]',
      title: 'Marketing Analytics Platform',
      desc: 'An interactive multi-channel marketing analytics platform featuring ROI analysis, customer segmentation, email analytics, Snowflake integration and an AI-powered analytics assistant.',
      categories: ['Data Analytics', 'Full Stack Development'],
      tags: ['React', 'TypeScript', 'Python', 'Snowflake', 'Tailwind CSS', 'Recharts', 'Alteryx'],
      githubUrl: 'https://github.com/Dhanush-734/marketing_analytics',
      liveUrl: 'https://marketing-analytics-platform.onrender.com/',
      image: '/projects/marketing-analytics.png',
      overview: 'An interactive full-stack marketing analytics platform delivering multi-channel ROI visibility, customer segmentation, and campaign attribution backed by direct Snowflake Cloud Data Warehouse telemetry and an AI marketing copilot.',
      problemStatement: 'Marketing teams struggle to harmonize ad conversion data across disparate advertising channels (Google Ads, Meta, Email newsletters), resulting in inaccurate last-touch attribution, fragmented ROI metrics, and slow reporting cycles.',
      solution: 'Engineered a centralized analytics platform with Snowflake Cloud Data Warehouse integration (MARKETING_ETL schema), automated Alteryx data pipelines, multi-touch attribution modeling, and an INSIGHTS AI copilot for natural-language query analysis.',
      mainFeatures: [
        'Multi-channel campaign ROI analysis and ROAS attribution modeling across Google Ads, Meta, and Email',
        'Customer segmentation and granular cohort retention tracking',
        'Direct Snowflake Cloud Data Warehouse integration (MARKETING_SCHEMA.MARKETING_ETL)',
        'INSIGHTS AI analytics assistant for natural language SQL queries and marketing recommendations',
        'Interactive performance dashboards and KPI widgets built with Recharts',
        'Integrated Alteryx ETL workflows and data hygiene pipelines'
      ],
      architectureFlow: [
        { step: '01', label: 'Data Ingestion', desc: 'Campaign webhooks & raw advertising spend extracted from Google Ads, Meta, and Email feeds' },
        { step: '02', label: 'Alteryx ETL & Staging', desc: 'Defensive schema normalization, deduplication, and staging into Snowflake Cloud Data Warehouse' },
        { step: '03', label: 'Snowflake Analytics', desc: 'Executes attribution models, customer cohort segmentation, and ROAS calculations' },
        { step: '04', label: 'Python Backend & AI', desc: 'Python API services powering telemetry and the INSIGHTS AI analytics assistant' },
        { step: '05', label: 'React Dashboard', desc: 'Interactive React + TypeScript UI with real-time Recharts visualizations and filtering' }
      ],
      techStackBreakdown: {
        frontend: ['React 18', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Vite'],
        backend: ['Python 3.10', 'Snowflake Connector', 'FastAPI / Flask'],
        database: ['Snowflake Cloud DW', 'PostgreSQL', 'Alteryx ETL'],
        analyticsOrTools: ['Multi-Touch Attribution', 'Cohort Analysis', 'AI Analytics Copilot', 'Render']
      },
      metrics: [
        { label: 'Attributed Lift', value: '+34%' },
        { label: 'CAC Reduction', value: '-18%' },
        { label: 'Warehouse Sync', value: 'Snowflake' }
      ],
      codeSnippet: `-- Multi-Touch Attribution & ROAS Analysis Model
WITH ChannelTouchpoints AS (
    SELECT 
        customer_id,
        channel_name,
        spend_usd,
        conversion_value,
        ROW_NUMBER() OVER(PARTITION BY customer_id ORDER BY touch_timestamp ASC) as first_touch,
        ROW_NUMBER() OVER(PARTITION BY customer_id ORDER BY touch_timestamp DESC) as last_touch
    FROM MARKETING_ANALYTICS.MARKETING_SCHEMA.MARKETING_ETL
)
SELECT 
    channel_name,
    SUM(spend_usd) as total_ad_spend,
    SUM(CASE WHEN last_touch = 1 THEN conversion_value ELSE 0 END) as attributed_revenue,
    ROUND(SUM(CASE WHEN last_touch = 1 THEN conversion_value ELSE 0 END) / NULLIF(SUM(spend_usd), 0), 2) as roas
FROM ChannelTouchpoints
GROUP BY channel_name
ORDER BY roas DESC;`,
      codeLanguage: 'SQL'
    },
    {
      id: 'weather-prediction',
      fileTitle: 'weather_prediction_app.py',
      badge: 'ML_FORECASTING',
      headerBg: 'bg-[#69c9f0] text-[#1c1b1b]',
      title: 'Weather Prediction & Analytics',
      desc: 'A machine learning-based weather analytics application featuring temperature prediction, exploratory data analysis, interactive visualizations and geospatial weather analysis.',
      categories: ['Data Analytics', 'Machine Learning'],
      tags: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn', 'Plotly', 'Folium', 'Matplotlib'],
      githubUrl: 'https://github.com/Dhanush-734/WeatherPredictionProject',
      liveUrl: 'https://weatherpredictionproject-team9.streamlit.app/',
      image: '/projects/weather-prediction.png',
      overview: 'An end-to-end Machine Learning web application designed to forecast temperatures, analyze meteorological features, and visualize spatial-temporal weather patterns interactively using Scikit-Learn regression pipelines and Folium maps.',
      problemStatement: 'Meteorologists and agricultural stakeholders require fast, accurate temperature predictions without deploying complex, computationally prohibitive numerical atmospheric simulation physics engines.',
      solution: 'Developed an end-to-end Machine Learning web application utilizing Scikit-learn regression pipelines trained on historical meteorological variables, integrated with interactive geospatial maps and responsive Streamlit sliders for on-demand inference.',
      mainFeatures: [
        'Interactive Machine Learning regression models for instantaneous temperature predictions',
        'Exploratory Data Analysis (EDA) module with feature distributions, heatmaps, and correlation matrices',
        'Geospatial weather analysis with interactive Folium & GeoPandas map overlays',
        'Dynamic data visualization utilizing Plotly and Matplotlib for multi-variable trends',
        'Streamlit Community Cloud deployment with cached models and responsive sliders'
      ],
      architectureFlow: [
        { step: '01', label: 'Data Collection', desc: 'Ingestion of historical meteorological observation datasets with multi-variable sensor readings' },
        { step: '02', label: 'Feature Engineering', desc: 'Pandas & NumPy data transformations: humidity, atmospheric pressure, wind speed, precipitation' },
        { step: '03', label: 'Model Pipeline', desc: 'Scikit-Learn regression models trained, evaluated, and serialized for deployment' },
        { step: '04', label: 'GIS Mapping Engine', desc: 'Folium & GeoPandas spatial coordinate clustering and interactive heatmaps' },
        { step: '05', label: 'Streamlit UI', desc: 'Real-time parameter sliders, cached inference execution, and dynamic Plotly charts' }
      ],
      techStackBreakdown: {
        frontend: ['Streamlit', 'Plotly', 'Matplotlib', 'Seaborn'],
        backend: ['Python 3.10+', 'Scikit-Learn Regression'],
        database: ['Pandas DataFrames', 'NumPy Arrays'],
        analyticsOrTools: ['Folium GIS', 'GeoPandas', 'EDA Visualizations', 'Streamlit Cloud']
      },
      metrics: [
        { label: 'Model Precision', value: 'R² > 0.91' },
        { label: 'Inference Latency', value: '< 150ms' },
        { label: 'GIS Coverage', value: 'Multi-Region' }
      ],
      codeSnippet: `import streamlit as st
import pandas as pd
from sklearn.ensemble import RandomForestRegressor

@st.cache_resource
def load_weather_model():
    # Trained Random Forest Regressor on atmospheric features
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    return model

def predict_temperature(humidity, pressure, wind_speed):
    features = pd.DataFrame([{
        'humidity': humidity,
        'pressure': pressure,
        'wind_kph': wind_speed
    }])
    prediction = weather_model.predict(features)
    return round(float(prediction[0]), 2)`,
      codeLanguage: 'PYTHON'
    },
    {
      id: 'weather-analytics-de',
      fileTitle: 'weather_analytics_de.py',
      badge: 'DATA_ENGINEERING',
      headerBg: 'bg-[#9be5c3] text-[#1c1b1b]',
      title: 'Weather Analytics Data Engineering',
      desc: 'An end-to-end weather data engineering project that extracts weather data through an API, processes it using an ETL pipeline, stores it in PostgreSQL and displays interactive analytics dashboards.',
      categories: ['Data Engineering'],
      tags: ['Python', 'Flask', 'PostgreSQL', 'OpenWeather API', 'Docker', 'Docker Compose', 'Plotly', 'Pandas'],
      githubUrl: 'https://github.com/Dhanush-734/weather-analytics-DE',
      image: '/projects/weather-analytics-de.png',
      overview: 'A robust, containerized Data Engineering project that automates real-time weather data extraction from the OpenWeather API, executes an ETL pipeline, persists data into a PostgreSQL relational warehouse, and visualizes KPIs in an auto-refreshing dashboard.',
      problemStatement: 'Live meteorological feeds from weather stations and APIs are often volatile, inconsistent in format, and lack centralized storage for longitudinal analytics across multiple Indian cities.',
      solution: 'Engineered an automated Dockerized ETL pipeline that polls OpenWeather API endpoints, normalizes JSON payloads with Pandas, stores structured records into a relational PostgreSQL database, and serves live multi-city KPI dashboards via Flask and Plotly.',
      mainFeatures: [
        'Real-time automated weather data collection from OpenWeather API',
        'Defensive ETL pipeline handling schema validation, nulls, and unit conversions',
        'Relational PostgreSQL data storage with indexed timestamps and city partitions',
        'Interactive analytics dashboard with Plotly charts and auto-refresh mechanisms',
        'Multi-city tracking covering Karnataka cities and major Indian metropolitan centers',
        'Containerized deployment via Docker and Docker Compose with Airflow orchestration assets'
      ],
      architectureFlow: [
        { step: '01', label: 'API Ingestion', desc: 'Real-time REST calls to OpenWeather API for multi-city meteorological payloads' },
        { step: '02', label: 'ETL Pipeline', desc: 'Python extraction, validation, temperature conversions, and deduplication' },
        { step: '03', label: 'PostgreSQL Lake', desc: 'Structured relational storage with historical timestamp partitioning' },
        { step: '04', label: 'Flask Backend', desc: 'Lightweight REST endpoints querying historical and aggregated metrics' },
        { step: '05', label: 'Plotly Dashboard', desc: 'Interactive KPI cards, temperature curves, humidity charts, and city filters' }
      ],
      techStackBreakdown: {
        frontend: ['Plotly Dashboard', 'HTML5 / CSS3', 'JavaScript'],
        backend: ['Python 3.10', 'Flask REST API'],
        database: ['PostgreSQL Database', 'Relational Schemas'],
        analyticsOrTools: ['Docker', 'Docker Compose', 'ETL Pipeline', 'OpenWeather API', 'Airflow Assets']
      },
      metrics: [
        { label: 'Pipeline Interval', value: 'Auto-Batch' },
        { label: 'Data Warehouse', value: 'PostgreSQL' },
        { label: 'Architecture', value: 'Docker Compose' }
      ],
      codeSnippet: `# Real-Time Weather ETL Pipeline Ingestion Routine
import requests
import psycopg2
import pandas as pd

def extract_and_load_weather(city_name, api_key, db_conn):
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={api_key}&units=metric"
    payload = requests.get(url).json()
    
    # Transform & Extract Schema
    metrics = {
        'city': payload['name'],
        'temperature': payload['main']['temp'],
        'humidity': payload['main']['humidity'],
        'wind_speed': payload['wind']['speed'],
        'recorded_at': pd.Timestamp.now()
    }
    
    # PostgreSQL Load
    with db_conn.cursor() as cur:
        cur.execute("""
            INSERT INTO weather_logs (city, temp, humidity, wind_speed, timestamp)
            VALUES (%s, %s, %s, %s, %s);
        """, (metrics['city'], metrics['temperature'], metrics['humidity'], metrics['wind_speed'], metrics['recorded_at']))
        db_conn.commit()`,
      codeLanguage: 'PYTHON / SQL'
    },
    {
      id: 'dragonlineage',
      fileTitle: 'dragonlineage_ast.sql',
      badge: 'SQL_LINEAGE',
      headerBg: 'bg-[#ff7777] text-[#1c1b1b]',
      title: 'DragonLineage',
      desc: 'An SQL Data Lineage and Blast Radius Analysis platform that parses SQL files, discovers database dependencies, visualizes relationships and analyzes the downstream impact of schema changes.',
      categories: ['Data Engineering'],
      tags: ['Python', 'Streamlit', 'MySQL', 'SQLGlot', 'NetworkX', 'PyVis', 'Plotly', 'Pandas'],
      githubUrl: 'https://github.com/Dhanush-734/dragonlineage',
      image: '/projects/dragonlineage.png',
      overview: 'DragonLineage is an enterprise SQL Data Lineage & Blast Radius Analysis platform that automatically parses SQL files into Abstract Syntax Trees (AST), extracts database dependencies, builds interactive lineage graphs, and predicts downstream schema change impacts.',
      problemStatement: 'In enterprise databases, schema modifications or table alterations frequently trigger cascading failures across downstream views, ETL jobs, reports, and dashboards without advance warning.',
      solution: 'Created DragonLineage, an enterprise SQL lineage platform that leverages SQLGlot to parse complex SQL DDL/DML statements into ASTs, stores dependency metadata in MySQL, generates interactive Directed Acyclic Graphs (DAGs) with NetworkX/PyVis, and calculates upstream/downstream blast radius before changes are deployed.',
      mainFeatures: [
        'Multi-file SQL script upload and automatic AST parsing with SQLGlot',
        'MySQL metadata cataloging (sql_objects, lineage_edges)',
        'Automated parent-child dependency mapping (TABLE and VIEW dependencies)',
        'Predictive blast radius analysis to evaluate downstream impact before schema migrations',
        'Interactive 2D/3D lineage graph explorer with zoom, drag, and node inspection (PyVis & NetworkX)',
        'Searchable SQL catalog and statistical overview dashboards with Plotly'
      ],
      architectureFlow: [
        { step: '01', label: 'SQL File Upload', desc: 'Multi-file DDL & DML ingestion with syntax verification and live preview' },
        { step: '02', label: 'SQLGlot AST Parsing', desc: 'Tokenization into Abstract Syntax Trees extracting tables, views, CTEs, and columns' },
        { step: '03', label: 'MySQL Metadata Lake', desc: 'Relational persistence of discovered sql_objects and lineage_edges relationships' },
        { step: '04', label: 'NetworkX Graph Engine', desc: 'Constructs directed acyclic graph and computes downstream blast radius paths' },
        { step: '05', label: 'PyVis & Streamlit UI', desc: 'Interactive physics-based graph rendering with node search, filters, and metric KPIs' }
      ],
      techStackBreakdown: {
        frontend: ['Streamlit', 'PyVis Interactive Physics Graph', 'Plotly'],
        backend: ['Python 3.10', 'SQLGlot AST Parser', 'NetworkX Graph Engine'],
        database: ['MySQL (Metadata & Lineage Edges)', 'SQL DDL / DML'],
        analyticsOrTools: ['Blast Radius Engine', 'Dependency Trees', 'Pandas DataFrames']
      },
      metrics: [
        { label: 'AST Parser', value: 'SQLGlot' },
        { label: 'Graph Engine', value: 'NetworkX + PyVis' },
        { label: 'Metadata DB', value: 'MySQL' }
      ],
      codeSnippet: `# SQLGlot AST Dependency Extraction & Blast Radius Engine
import sqlglot
from sqlglot import exp
import networkx as nx

def build_sql_lineage(sql_text):
    parsed = sqlglot.parse_one(sql_text)
    sources = set()
    targets = set()
    
    # Identify Source and Target Objects in AST
    for table in parsed.find_all(exp.Table):
        sources.add(table.name)
        
    # Directed Graph for Blast Radius Analysis
    G = nx.DiGraph()
    # Traversal to find all downstream impacted tables/views
    def get_blast_radius(graph, changed_node):
        return list(nx.descendants(graph, changed_node))
        
    return sources, G`,
      codeLanguage: 'PYTHON / AST'
    },
    {
      id: 'keerthan-strength-lab',
      fileTitle: 'keerthan_assessment.tsx',
      badge: 'FREELANCE_APP',
      headerBg: 'bg-[#ffd84d] text-[#1c1b1b]',
      title: 'Keerthan Strength Lab – Client Assessment',
      desc: 'A professional digital client screening and fitness assessment application with interactive questionnaires, digital signatures, assessment documentation and PDF generation.',
      categories: ['Full Stack Development', 'Freelance Projects'],
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'PDF Generation', 'Canvas Signature', 'Vercel'],
      liveUrl: 'https://keerthanstrengthlabreport.vercel.app/',
      image: '/projects/keerthan-strength-lab.png',
      overview: 'A professional digital client screening and clinical fitness assessment application built for Keerthan Strength Lab. Includes medical readiness questionnaires, digital signatures, trainer anthropometric evaluations, and automated 4-page PDF dossier generation with native sharing via WhatsApp and AirDrop.',
      problemStatement: 'Fitness coaches and clinical assessment specialists used slow, error-prone paper questionnaires for medical history, PAR-Q clearances, body composition records, and physical signatures, leading to lost paperwork and friction in client onboarding.',
      solution: 'Designed and deployed a responsive, client-facing web assessment portal with guided multi-step questionnaires, HTML5 digital signature pad, clinical measurement records for trainers, and high-fidelity 4-page PDF dossier generation with native sharing via WhatsApp and AirDrop.',
      mainFeatures: [
        'Comprehensive client intake covering demographic, lifestyle, medical history, and goals',
        '10-point Physical Activity Readiness Questionnaire (PAR-Q) with risk evaluation',
        'Interactive HTML5 digital signature pad for legally binding informed consent',
        'Trainer section for recording blood pressure, anthropometrics, body composition, and ROM',
        'Instant vector PDF dossier generation matching the official 4-page lab template',
        'One-tap document sharing via WhatsApp, Mail, AirDrop, or local file save',
        'Responsive mobile-first layout with helpful step-by-step guides for iOS and Android'
      ],
      architectureFlow: [
        { step: '01', label: 'Client Intake Form', desc: 'Guided multi-step questionnaire collecting demographics, lifestyle, and medical background' },
        { step: '02', label: 'PAR-Q Verification', desc: '10-point clinical physical activity readiness screening with safety compliance' },
        { step: '03', label: 'Signature Canvas', desc: 'HTML5 vector digital signature pad capturing client legal consent' },
        { step: '04', label: 'Trainer Section', desc: 'Lab instructor records blood pressure, anthropometrics, body composition, and ROM' },
        { step: '05', label: 'PDF Dossier & Share', desc: 'High-fidelity 4-page PDF generated in-browser with direct WhatsApp/AirDrop sharing' }
      ],
      techStackBreakdown: {
        frontend: ['React 18', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
        backend: ['HTML5 Canvas Engine', 'Client-side PDF Generator'],
        database: ['Local State Engine', 'Session Storage'],
        analyticsOrTools: ['Web Share API (WhatsApp / AirDrop)', 'Vercel Edge Deployment']
      },
      metrics: [
        { label: 'Onboarding Speed', value: '70% Faster' },
        { label: 'Dossier Output', value: '4-Page PDF' },
        { label: 'Status', value: 'Production Live' }
      ],
      codeSnippet: `// HTML5 Digital Signature & PDF Dossier Dispatch
interface ClientAssessmentPayload {
  demographics: ClientInfo;
  parqApproved: boolean;
  trainerMeasurements: ClinicalData;
  signatureBase64: string;
}

export const generateAndShareDossier = async (data: ClientAssessmentPayload) => {
  const pdfDossierBlob = await renderOfficialLabPDF(data);
  const pdfFile = new File([pdfDossierBlob], 'keerthan_assessment.pdf', {
    type: 'application/pdf',
  });
  
  // Native Web Share API integration (WhatsApp / AirDrop)
  if (navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
    await navigator.share({
      title: 'Keerthan Strength Lab Dossier',
      files: [pdfFile],
    });
  }
};`,
      codeLanguage: 'TYPESCRIPT'
    },
    {
      id: 'keerthan-mindfit',
      fileTitle: 'keerthan_mindfit.tsx',
      badge: 'FREELANCE_SYSTEM',
      headerBg: 'bg-[#69c9f0] text-[#1c1b1b]',
      title: 'Keerthan MindFit',
      desc: 'A gym management web application with separate trainer and member entry points.',
      categories: ['Full Stack Development', 'Freelance Projects'],
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Role-Based Auth', 'Vercel'],
      liveUrl: 'https://keerthanmindfit.vercel.app/',
      image: '/projects/keerthan-mindfit.png',
      overview: 'Keerthan MindFit is a production gym management web application built with Next.js, featuring role-based portals for personal trainers (managing members, programs, and attendance) and athletes (reviewing plans, metrics, and video libraries).',
      problemStatement: 'A premier strength and conditioning facility needed a cohesive digital platform to manage trainers and athletes with role-segregated entryways, distinct workflows, and a sleek, branded gym aesthetic.',
      solution: 'Developed Keerthan MindFit, a Next.js web application featuring dedicated authentication portals for trainers (to manage members, training plans, and attendance) and members (to review customized plans, track progress metrics, and access exercise video libraries).',
      mainFeatures: [
        'Dedicated dual-portal architecture with separate /trainer/login and /member/login pathways',
        'Trainer administrative hub: manage athletes, assign customized workout plans, and track attendance',
        'Member performance portal: view active workout regimens, log personal records, and stream technique videos',
        'Custom athletic dark theme with high-performance responsive styling and smooth hover interactions',
        'Optimized Next.js server routing deployed on Vercel with high availability'
      ],
      architectureFlow: [
        { step: '01', label: 'Branded Gateway', desc: 'Athletic dark-mode entryway with animated branding and role selection' },
        { step: '02', label: 'Role-Based Auth', desc: 'Segregated authentication pathways for personal trainers and gym members' },
        { step: '03', label: 'Trainer Console', desc: 'Roster management, individualized workout programming, and attendance logs' },
        { step: '04', label: 'Member Hub', desc: 'Mobile-responsive athlete dashboard with workout tracking and video library' },
        { step: '05', label: 'Vercel Edge', desc: 'Edge-rendered Next.js application delivering low-latency page loads' }
      ],
      techStackBreakdown: {
        frontend: ['Next.js (App Router)', 'React', 'Tailwind CSS', 'Lucide React'],
        backend: ['Next.js Server Actions / API Routes', 'Role-Based Auth Engine'],
        database: ['Client Roster Schema', 'Workout Program Models'],
        analyticsOrTools: ['Vercel Production Edge CDN', 'Responsive Athletic UI']
      },
      metrics: [
        { label: 'Routing Engine', value: 'App Router' },
        { label: 'Portal Mode', value: 'Dual Role Auth' },
        { label: 'Hosting', value: 'Vercel Edge' }
      ],
      codeSnippet: `// Role-Segregated Gateway Routing (Next.js)
import Link from 'next/link';
import { ShieldCheck, User } from 'lucide-react';

export default function GatewayPortal() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-4">
      <div className="w-full max-w-[490px] space-y-4">
        {/* Trainer Gateway */}
        <Link href="/trainer/login" className="flex items-center gap-4 rounded-2xl border border-[#3A2A18] bg-[#120F0C] p-5 hover:border-[#D9A441]">
          <ShieldCheck className="h-6 w-6 text-[#F5C76A]" />
          <div>
            <p className="font-semibold text-white">I'm the trainer</p>
            <p className="text-xs text-[#A99F91]">Manage members, plans and attendance</p>
          </div>
        </Link>
        {/* Member Gateway */}
        <Link href="/member/login" className="flex items-center gap-4 rounded-2xl border border-[#3A2A18] bg-[#120F0C] p-5 hover:border-[#D9A441]">
          <User className="h-6 w-6 text-[#F5C76A]" />
          <div>
            <p className="font-semibold text-white">I'm a member</p>
            <p className="text-xs text-[#A99F91]">View your plan, progress and videos</p>
          </div>
        </Link>
      </div>
    </main>
  );
}`,
      codeLanguage: 'TSX / NEXT.JS'
    }
  ];

  // Filter projects based on activeCategory
  const filteredProjects = activeCategory === 'All Projects'
    ? projects
    : projects.filter(p => p.categories.includes(activeCategory));

  const handleOpenModal = (project: ProjectData) => {
    sfx.pop();
    setActiveModalProject(project);
  };

  const handleCloseModal = () => {
    sfx.blip(500, 0.05);
    setActiveModalProject(null);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModalProject]);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Helper for small tech icons
  const getTechIcon = (tag: string) => {
    const t = tag.toLowerCase();
    if (t.includes('python')) return <Terminal className="w-3 h-3 text-[#ffd84d] dark:text-[#FFD43B]" />;
    if (t.includes('sql') || t.includes('postgres') || t.includes('mysql') || t.includes('snowflake')) return <Database className="w-3 h-3 text-[#69c9f0] dark:text-[#55DFFF]" />;
    if (t.includes('react') || t.includes('next') || t.includes('typescript')) return <Code2 className="w-3 h-3 text-[#9be5c3] dark:text-[#4ade80]" />;
    if (t.includes('docker') || t.includes('compose')) return <Cpu className="w-3 h-3 text-[#69c9f0] dark:text-[#55DFFF]" />;
    if (t.includes('airflow') || t.includes('etl') || t.includes('alteryx')) return <Workflow className="w-3 h-3 text-[#ffd84d] dark:text-[#FFD43B]" />;
    if (t.includes('streamlit') || t.includes('layout')) return <Layout className="w-3 h-3 text-[#ff7777]" />;
    if (t.includes('scikit') || t.includes('learning')) return <Sparkles className="w-3 h-3 text-[#ffd84d] dark:text-[#FFD43B]" />;
    if (t.includes('recharts') || t.includes('plotly') || t.includes('matplotlib')) return <BarChart3 className="w-3 h-3 text-[#9be5c3] dark:text-[#4ade80]" />;
    if (t.includes('cloud') || t.includes('vercel')) return <Cloud className="w-3 h-3 text-[#bce9ff] dark:text-[#55DFFF]" />;
    if (t.includes('pdf') || t.includes('canvas')) return <FileCode2 className="w-3 h-3 text-[#ff7777]" />;
    return <Code2 className="w-3 h-3 text-[#ffd84d] dark:text-[#FFD43B]" />;
  };

  return (
    <section className="space-y-6 pt-2" id="projects">
      {/* Title & Filter Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 bg-white dark:bg-[#24262D] text-[#1c1b1b] dark:text-[#F5F1E8] px-3 py-1 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000] rotate-1">
          <FolderGit2 className="w-4 h-4 text-[#725c00] dark:text-[#FFD43B]" />
          <h2 className="font-headline text-lg font-black">
            Featured Projects & Engineering Work 🚀
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-code text-xs uppercase font-extrabold bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-2.5 py-0.5 border border-[#1c1b1b] dark:border-[#353842] shadow-[1.5px_1.5px_0px_#1c1b1b] dark:shadow-[1.5px_1.5px_0px_#000000]">
            SHOWING {filteredProjects.length} OF {projects.length} PROJECTS
          </span>
        </div>
      </div>

      {/* Interactive Category Filter Pills */}
      <div className="bg-white dark:bg-[#191B20] border-[2.5px] border-[#1c1b1b] dark:border-[#353842] p-2.5 shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000] transition-colors">
        <div className="flex items-center gap-1.5 mb-2 font-code text-[11px] uppercase font-bold text-[#4d4634] dark:text-[#d0cbbf]">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#725c00] dark:text-[#FFD43B]" />
          <span>Filter by Domain:</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {filterCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  sfx.blip(600, 0.04);
                  setActiveCategory(cat);
                }}
                className={`font-code text-xs font-bold px-3 py-1.5 border-2 border-[#1c1b1b] dark:border-[#353842] transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] shadow-[2.5px_2.5px_0px_#1c1b1b] dark:shadow-[2.5px_2.5px_0px_#000000] translate-x-[-1px] translate-y-[-1px]'
                    : 'bg-[#fcf9f8] dark:bg-[#24262D] text-[#1c1b1b] dark:text-[#F5F1E8] hover:bg-[#ffe07e] dark:hover:bg-[#353842]'
                }`}
              >
                <span>{cat}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#1c1b1b] dark:bg-[#101114]" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((proj, idx) => (
            <motion.article
              key={proj.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-white dark:bg-[#24262D] border-[3px] border-[#1c1b1b] dark:border-[#353842] shadow-[5px_5px_0px_#1c1b1b] dark:shadow-[5px_5px_0px_#000000] overflow-hidden transition-colors"
            >
              {/* Retro Window Header */}
              <div className={`${proj.headerBg} px-3.5 py-2 border-b-[2.5px] border-[#1c1b1b] dark:border-[#353842] flex items-center justify-between`}>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a] border border-[#1c1b1b] dark:border-[#353842]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffd84d] border border-[#1c1b1b] dark:border-[#353842]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#9be5c3] border border-[#1c1b1b] dark:border-[#353842]" />
                  <span className="font-code text-xs text-[#1c1b1b] font-black ml-2 truncate">
                    {proj.fileTitle}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-code text-[10px] uppercase font-black bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] px-2 py-0.5 border border-[#1c1b1b] dark:border-[#353842] shadow-[1px_1px_0px_#1c1b1b] dark:shadow-[1px_1px_0px_#000000]">
                    {proj.badge}
                  </span>
                </div>
              </div>

              {/* Card Main Body */}
              <div className="p-4 sm:p-5 space-y-4">
                {/* Project Screenshot / Thumbnail with Loading Skeleton */}
                <div
                  onClick={() => handleOpenModal(proj)}
                  className="w-full h-52 sm:h-64 border-2 border-[#1c1b1b] dark:border-[#353842] overflow-hidden relative bg-[#f0eded] dark:bg-[#191B20] shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000] cursor-pointer group"
                >
                  {/* Loading State Skeleton */}
                  {!loadedImages[proj.id] && (
                    <div className="absolute inset-0 bg-[#e5e2e1] dark:bg-[#191B20] animate-pulse flex items-center justify-center">
                      <span className="font-code text-xs text-[#4d4634] dark:text-[#d0cbbf] font-bold">
                        Loading preview...
                      </span>
                    </div>
                  )}

                  <img
                    src={proj.image}
                    alt={`${proj.title} Preview Screenshot`}
                    loading="lazy"
                    onLoad={() => setLoadedImages((prev) => ({ ...prev, [proj.id]: true }))}
                    className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] ${
                      loadedImages[proj.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Hover Overlay Badge */}
                  <div className="absolute bottom-2 right-2 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="font-code text-[11px] font-black bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-2.5 py-1 border border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] flex items-center gap-1.5">
                      <Terminal className="w-3 h-3" />
                      <span>Click to inspect specs 🔍</span>
                    </span>
                  </div>
                </div>

                {/* Title & Categories */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3
                      onClick={() => handleOpenModal(proj)}
                      className="font-headline text-xl sm:text-2xl font-black text-[#1c1b1b] dark:text-[#F5F1E8] hover:text-[#725c00] dark:hover:text-[#FFD43B] cursor-pointer transition-colors"
                    >
                      {proj.title}
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {proj.categories.map((c) => (
                        <span
                          key={c}
                          className="font-code text-[10px] font-extrabold uppercase px-2 py-0.5 bg-[#bce9ff] dark:bg-[#191B20] text-[#006783] dark:text-[#55DFFF] border border-[#1c1b1b] dark:border-[#353842]"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="font-body text-sm sm:text-base text-[#1c1b1b] dark:text-[#d0cbbf] leading-relaxed">
                    {proj.desc}
                  </p>
                </div>

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

                {/* Tech Stack Badges with Small Icons */}
                <div className="space-y-1">
                  <span className="font-code text-[10px] uppercase text-[#4d4634] dark:text-[#d0cbbf] font-bold">
                    TECH STACK:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-code text-xs font-bold bg-[#f0eded] dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] px-2.5 py-1 border border-[#1c1b1b] dark:border-[#353842] shadow-[1px_1px_0px_#1c1b1b] dark:shadow-[1px_1px_0px_#000000] flex items-center gap-1.5"
                      >
                        {getTechIcon(tag)}
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t-2 border-dashed border-[#1c1b1b] dark:border-[#353842]">
                  {/* GitHub Button (only when githubUrl exists) */}
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sfx.blip(600, 0.04)}
                      className="font-code text-xs font-black bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] px-3.5 py-2 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#ffd84d] dark:hover:bg-[#353842] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-none transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub ↗</span>
                    </a>
                  )}

                  {/* Live Demo Button (only when working liveUrl exists) */}
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sfx.blip(750, 0.05)}
                      className="font-code text-xs font-black bg-[#9be5c3] dark:bg-[#4ade80] text-[#1c1b1b] dark:text-[#101114] px-3.5 py-2 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#b0ecd2] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-none transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo ↗</span>
                    </a>
                  )}

                  {/* Project Details Modal Trigger */}
                  <button
                    onClick={() => handleOpenModal(proj)}
                    className="font-code text-xs font-black bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-3.5 py-2 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#ffe07e] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-none transition-all flex items-center gap-1.5 cursor-pointer ml-auto"
                  >
                    <Terminal className="w-3.5 h-3.5 text-[#1c1b1b] dark:text-[#101114]" />
                    <span>Project Details &amp; Architecture 🔍</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* DEDICATED COMPREHENSIVE PROJECT DETAIL INSPECTOR MODAL */}
      <AnimatePresence>
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#1c1b1b]/75 dark:bg-[#000000]/85 backdrop-blur-xs overflow-y-auto"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#24262D] border-[3.5px] border-[#1c1b1b] dark:border-[#353842] shadow-[8px_8px_0px_#1c1b1b] dark:shadow-[8px_8px_0px_#000000] max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden my-auto"
            >
              {/* Window Header */}
              <div className={`${activeModalProject.headerBg} p-3 border-b-2 border-[#1c1b1b] dark:border-[#353842] flex items-center justify-between shrink-0`}>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ba1a1a] border border-[#1c1b1b] dark:border-[#353842]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffd84d] border border-[#1c1b1b] dark:border-[#353842]" />
                  <span className="w-3 h-3 rounded-full bg-[#9be5c3] border border-[#1c1b1b] dark:border-[#353842]" />
                  <span className="font-code text-xs font-black ml-2 text-[#1c1b1b] truncate">
                    {activeModalProject.fileTitle} // PROJECT_INSPECTOR
                  </span>
                </div>
                <button
                  onClick={handleCloseModal}
                  aria-label="Close project modal"
                  className="p-1 bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] border border-[#1c1b1b] dark:border-[#353842] shadow-[1.5px_1.5px_0px_#1c1b1b] dark:shadow-[1.5px_1.5px_0px_#000000] hover:bg-[#ff7777] cursor-pointer"
                >
                  <X className="w-4 h-4 text-[#1c1b1b] dark:text-[#F5F1E8]" />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-[#1c1b1b] dark:text-[#F5F1E8] bg-[#fffdf6] dark:bg-[#191B20] transition-colors">
                {/* Header Strip with Title & Direct Links */}
                <div className="border-b-2 border-[#1c1b1b] dark:border-[#353842] pb-4 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="font-code text-[11px] uppercase font-black bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-2 py-0.5 border border-[#1c1b1b] dark:border-[#353842]">
                          {activeModalProject.badge}
                        </span>
                        {activeModalProject.categories.map((c) => (
                          <span
                            key={c}
                            className="font-code text-[10px] font-bold uppercase px-2 py-0.5 bg-[#bce9ff] dark:bg-[#24262D] text-[#006783] dark:text-[#55DFFF] border border-[#1c1b1b] dark:border-[#353842]"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-headline text-2xl sm:text-3xl font-black text-[#1c1b1b] dark:text-[#F5F1E8]">
                        {activeModalProject.title}
                      </h3>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      {activeModalProject.githubUrl && (
                        <a
                          href={activeModalProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-code text-xs font-black bg-white dark:bg-[#24262D] text-[#1c1b1b] dark:text-[#F5F1E8] px-3.5 py-1.5 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#ffd84d] flex items-center gap-1.5 cursor-pointer"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Source Code ↗</span>
                        </a>
                      )}
                      {activeModalProject.liveUrl && (
                        <a
                          href={activeModalProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-code text-xs font-black bg-[#9be5c3] dark:bg-[#4ade80] text-[#1c1b1b] dark:text-[#101114] px-3.5 py-1.5 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#b0ecd2] flex items-center gap-1.5 cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Deployment ↗</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="font-body text-sm sm:text-base text-[#4d4634] dark:text-[#d0cbbf] leading-relaxed">
                    {activeModalProject.overview}
                  </p>
                </div>

                {/* Screenshot Container */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-code text-xs font-bold text-[#1c1b1b] dark:text-[#F5F1E8]">
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[#006783] dark:text-[#55DFFF]" />
                      Verified Interface Preview:
                    </span>
                    <span className="text-[10px] text-[#4d4634] dark:text-[#d0cbbf]">
                      LIVE APPLICATION SCREENSHOT
                    </span>
                  </div>
                  <div className="w-full border-2 border-[#1c1b1b] dark:border-[#353842] overflow-hidden shadow-[4px_4px_0px_#1c1b1b] dark:shadow-[4px_4px_0px_#000000] bg-black">
                    <img
                      src={activeModalProject.image}
                      alt={`${activeModalProject.title} Interface`}
                      className="w-full h-auto max-h-[360px] object-cover object-top"
                    />
                  </div>
                </div>

                {/* Problem Statement & Technical Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Problem */}
                  <div className="bg-[#ffd0ce] dark:bg-[#24262D] p-3.5 border-2 border-[#1c1b1b] dark:border-[#ff7777] shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000] space-y-1.5">
                    <div className="font-code text-xs uppercase font-black text-[#ba1a1a] dark:text-[#ff7777] flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4" />
                      Problem Statement
                    </div>
                    <p className="font-body text-xs sm:text-sm text-[#1c1b1b] dark:text-[#F5F1E8] leading-relaxed">
                      {activeModalProject.problemStatement}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="bg-[#bce9ff] dark:bg-[#24262D] p-3.5 border-2 border-[#1c1b1b] dark:border-[#55DFFF] shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000] space-y-1.5">
                    <div className="font-code text-xs uppercase font-black text-[#006783] dark:text-[#55DFFF] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      Engineered Solution
                    </div>
                    <p className="font-body text-xs sm:text-sm text-[#1c1b1b] dark:text-[#F5F1E8] leading-relaxed">
                      {activeModalProject.solution}
                    </p>
                  </div>
                </div>

                {/* Main Features */}
                <div className="space-y-2.5">
                  <h4 className="font-headline text-lg font-black uppercase text-[#1c1b1b] dark:text-[#F5F1E8] flex items-center gap-1.5 border-b border-dashed border-[#1c1b1b] dark:border-[#353842] pb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#006d32] dark:text-[#4ade80]" />
                    Verified Main Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalProject.mainFeatures.map((f, i) => (
                      <div
                        key={i}
                        className="bg-white dark:bg-[#24262D] p-2.5 border border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#006d32] dark:text-[#4ade80] shrink-0 mt-0.5" />
                        <span className="font-body text-xs text-[#1c1b1b] dark:text-[#d0cbbf] leading-relaxed">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pipeline Architecture & Flow */}
                <div className="space-y-2.5">
                  <h4 className="font-headline text-lg font-black uppercase text-[#1c1b1b] dark:text-[#F5F1E8] flex items-center gap-1.5 border-b border-dashed border-[#1c1b1b] dark:border-[#353842] pb-1">
                    <Layers className="w-4 h-4 text-[#725c00] dark:text-[#FFD43B]" />
                    Pipeline Architecture &amp; Data Flow
                  </h4>
                  <div className="space-y-2">
                    {activeModalProject.architectureFlow.map((step, idx) => (
                      <div
                        key={idx}
                        className="bg-[#fcf9f8] dark:bg-[#24262D] p-3 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2.5px_2.5px_0px_#1c1b1b] dark:shadow-[2.5px_2.5px_0px_#000000] flex items-start gap-3"
                      >
                        <span className="font-code text-xs font-black bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-2 py-0.5 border border-[#1c1b1b] dark:border-[#353842] shrink-0">
                          {step.step}
                        </span>
                        <div>
                          <div className="font-code text-xs font-black uppercase text-[#1c1b1b] dark:text-[#F5F1E8]">
                            {step.label}
                          </div>
                          <p className="font-body text-xs text-[#4d4634] dark:text-[#d0cbbf] mt-0.5">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categorized Technology Stack */}
                <div className="space-y-2.5">
                  <h4 className="font-headline text-lg font-black uppercase text-[#1c1b1b] dark:text-[#F5F1E8] flex items-center gap-1.5 border-b border-dashed border-[#1c1b1b] dark:border-[#353842] pb-1">
                    <Cpu className="w-4 h-4 text-[#006783] dark:text-[#55DFFF]" />
                    Technology Stack Breakdown
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-code">
                    {activeModalProject.techStackBreakdown.frontend && (
                      <div className="bg-white dark:bg-[#24262D] p-2.5 border border-[#1c1b1b] dark:border-[#353842]">
                        <strong className="text-[#006783] dark:text-[#55DFFF]">Frontend / UI:</strong>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {activeModalProject.techStackBreakdown.frontend.map((t) => (
                            <span key={t} className="bg-[#f0eded] dark:bg-[#191B20] px-1.5 py-0.5 border border-[#1c1b1b] dark:border-[#353842]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeModalProject.techStackBreakdown.backend && (
                      <div className="bg-white dark:bg-[#24262D] p-2.5 border border-[#1c1b1b] dark:border-[#353842]">
                        <strong className="text-[#725c00] dark:text-[#FFD43B]">Backend &amp; Logic:</strong>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {activeModalProject.techStackBreakdown.backend.map((t) => (
                            <span key={t} className="bg-[#f0eded] dark:bg-[#191B20] px-1.5 py-0.5 border border-[#1c1b1b] dark:border-[#353842]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeModalProject.techStackBreakdown.database && (
                      <div className="bg-white dark:bg-[#24262D] p-2.5 border border-[#1c1b1b] dark:border-[#353842]">
                        <strong className="text-[#ba1a1a] dark:text-[#ff7777]">Database &amp; ETL:</strong>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {activeModalProject.techStackBreakdown.database.map((t) => (
                            <span key={t} className="bg-[#f0eded] dark:bg-[#191B20] px-1.5 py-0.5 border border-[#1c1b1b] dark:border-[#353842]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeModalProject.techStackBreakdown.analyticsOrTools && (
                      <div className="bg-white dark:bg-[#24262D] p-2.5 border border-[#1c1b1b] dark:border-[#353842]">
                        <strong className="text-[#006d32] dark:text-[#4ade80]">Analytics, AI &amp; Ops:</strong>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {activeModalProject.techStackBreakdown.analyticsOrTools.map((t) => (
                            <span key={t} className="bg-[#f0eded] dark:bg-[#191B20] px-1.5 py-0.5 border border-[#1c1b1b] dark:border-[#353842]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Source Code Snippet View */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-code text-xs font-bold text-[#1c1b1b] dark:text-[#F5F1E8]">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#725c00] dark:text-[#FFD43B]" />
                      Core Logic Code Snippet:
                    </span>
                    <span className="text-[10px] text-[#4d4634] dark:text-[#d0cbbf]">
                      {activeModalProject.codeLanguage} RUNTIME
                    </span>
                  </div>
                  <pre className="bg-[#1c1b1b] dark:bg-[#101114] text-[#ffd84d] dark:text-[#FFD43B] p-3.5 border-2 border-[#1c1b1b] dark:border-[#353842] font-code text-xs overflow-x-auto shadow-[inset_2px_2px_0px_rgba(0,0,0,0.5)]">
                    <code>{activeModalProject.codeSnippet}</code>
                  </pre>
                </div>

                {/* Key Metrics Summary */}
                <div className="grid grid-cols-3 gap-2">
                  {activeModalProject.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="p-2.5 bg-[#fcf9f8] dark:bg-[#24262D] border-2 border-[#1c1b1b] dark:border-[#353842] text-center shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000]"
                    >
                      <div className="font-headline text-lg sm:text-xl font-black text-[#725c00] dark:text-[#FFD43B]">
                        {m.value}
                      </div>
                      <div className="font-code text-[9px] sm:text-[10px] uppercase font-bold text-[#4d4634] dark:text-[#d0cbbf]">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Modal Footer Controls */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t-2 border-dashed border-[#1c1b1b] dark:border-[#353842]">
                  <button
                    onClick={handleCloseModal}
                    className="font-code text-xs uppercase font-bold bg-[#eae7e7] dark:bg-[#24262D] text-[#1c1b1b] dark:text-[#F5F1E8] px-4 py-2 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#d0c6ae] cursor-pointer"
                  >
                    Close Inspector ✕
                  </button>

                  <div className="flex items-center gap-2">
                    {activeModalProject.githubUrl && (
                      <a
                        href={activeModalProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-code text-xs uppercase font-black bg-white dark:bg-[#24262D] text-[#1c1b1b] dark:text-[#F5F1E8] px-4 py-2 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#ffd84d] flex items-center gap-1.5"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>View Repository</span>
                      </a>
                    )}
                    {activeModalProject.liveUrl && (
                      <a
                        href={activeModalProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-code text-xs uppercase font-black bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-4 py-2 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#ffe07e] flex items-center gap-1.5"
                      >
                        <span>Launch Live App</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
