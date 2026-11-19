import{a as oe,b as ne,g as le,r as g,u as re,L as p,N as w,c as ce,d as de,B as me,R as pe,e as S,f as ge}from"./vendor-react-faq2cAR5.js";import{P as I,M as O,C as K,A as v,G as ae,X as B,a as he,b as H,S as L,c as ie,d as z,e as ue,f as T,H as xe,g as te,F as be,h as fe,i as ve,j as ye,T as je,E as we,D as Ne,k as Se,L as ke,l as Fe,m as Ce,n as Te}from"./vendor-icons-BYAChfNE.js";import{L as ze}from"./vendor-lenis-9qxpAu3p.js";import{g as k,S as P}from"./vendor-gsap-Jiz4vAvE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var G={exports:{}},A={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q;function Ee(){if(Q)return A;Q=1;var a=oe(),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(i,m,n){var x,u={},f=null,h=null;n!==void 0&&(f=""+n),m.key!==void 0&&(f=""+m.key),m.ref!==void 0&&(h=m.ref);for(x in m)d.call(m,x)&&!s.hasOwnProperty(x)&&(u[x]=m[x]);if(i&&i.defaultProps)for(x in m=i.defaultProps,m)u[x]===void 0&&(u[x]=m[x]);return{$$typeof:o,type:i,key:f,ref:h,props:u,_owner:r.current}}return A.Fragment=t,A.jsx=l,A.jsxs=l,A}var _;function Ae(){return _||(_=1,G.exports=Ee()),G.exports}var e=Ae(),D={},J;function Ie(){if(J)return D;J=1;var a=ne();return D.createRoot=a.createRoot,D.hydrateRoot=a.hydrateRoot,D}var Me=Ie();const De=le(Me),Y=[{id:"laboratory",slug:"laboratory",title:"Laboratory Solutions",subtitle:"Precision Quality Control from Fibre to Finished Yarn",shortDescription:"Complete laboratory testing equipment for spinning mills, delivering world-standard accuracy in evenness, tensile strength, yarn count, and trash determination.",heroImage:"/assets/easy-evenness-tester.jpg",categoryIcon:"FlaskConical",badge:"Textile Metrology & Testing",overview:"Tomsic Laboratory Solutions provide textile laboratories and spinning mills with cutting-edge testing instruments designed for 100% reliability, reproducibility, and longevity. All instruments operate on standard modern PC architectures with Microsoft .NET software, eliminating proprietary interface card failures and ensuring zero mandatory service overheads.",keyHighlights:[{title:"Full World Standard Compatibility",description:"Numerical and graphical results perfectly match international standards, trusted by premier global textile mills like Ermenegildo Zegna and Botto Giuseppe."},{title:"3-Click Operation",description:"Intuitive software workflows allow complete sample test execution in three clicks, drastically reducing operator training requirements."},{title:"Link Job Database Integration",description:"Automatic inter-machine data synchronization between Count Analysers, Evenness Testers, and Strength Testers to eradicate manual data transcription errors."},{title:"Modular Extractable Electronics",description:"Self-testing modular slots permit effortless component inspection or replacement on-site without machine downtime."}],featuredProducts:["easy-evenness-tester","tensotester-3","tms60-nep-trash","easyf-filament","tms45-count-analyser"]},{id:"spinning",slug:"spinning",title:"Spinning Solutions",subtitle:"Online Drafting Regulation & Continuous Sliver Monitoring",shortDescription:"Patented card and drawframe autolevellers, long-fibre gill box controllers, and real-time sliver quality monitors engineered to reduce count variation by up to 70%.",heroImage:"/assets/card-autoleveller-tms25.jpg",categoryIcon:"Cpu",badge:"Online Mill Automation",overview:"With engineering roots dating back to electronic systems development for drawframe leader VOUK, Tomsic is an acknowledged international pioneer in closed-loop autolevelling. Designed for both new machinery manufacturers and modernizing retrofits across existing spinning mill equipment (Rieter, Trützschler, Marzoli, Crosrol), Tomsic autolevellers provide immediate CV improvements.",keyHighlights:[{title:"70% Count Variation Reduction",description:"Patented closed-loop regulation achieves up to a 70% decrease in 1-meter sliver count variation compared to non-autolevelled cards."},{title:"Integrated Thick Places Detection",description:"Continuous real-time optical/displacement monitoring detects sliver thick places and stores full historical anomaly logs."},{title:"Universal Mill Retrofitting",description:"Complete mechanical, electrical, and servo-drive integration kits tailored for major industrial card and drawframe brands."},{title:"Long Fibre Processing Expertise",description:"Specialized autolevelling systems developed specifically for wool, acrylic, and blended long-staple processing lines."}],featuredProducts:["card-autoleveller-tms25-r2c","drawframe-autoleveller-tms25-r2d","sliver-quality-monitor-tms25-qm2","gill-box-autoleveller"]},{id:"sugar",slug:"sugar",title:"Sugar Solutions",subtitle:"Rapid Detection & Quantification of Cotton Stickiness",shortDescription:"Fast, cost-effective chemical testing systems to detect insect honeydew and entomological sugars in raw cotton before production, preventing costly spindle lapping.",heroImage:"/assets/cotton-sugar-tms54.jpg",categoryIcon:"Beaker",badge:"Raw Fibre Contamination Control",overview:"Sticky cotton caused by whitefly and aphid secretions is among the most catastrophic disruptions in a modern spinning mill, causing roller wraps, yarn breakage, and machine stoppages. Tomsic Sugar Solutions offer a reliable, standardized 15-minute chemical test method to quantify sugar contamination levels in raw bales before blending.",keyHighlights:[{title:"15-Minute Rapid Result",description:"Complete quantitative colorimetric evaluation of cotton sugar content ready within 15 minutes per batch."},{title:"Spindle Lapping Prevention",description:"Identifies high-risk sticky bales in the warehouse prior to bale plucking, protecting downstream spinning machines."},{title:"Calibrated Glucosil Reagents",description:"Standardized TMS55 Glucosil chemical reagent solution formulated for consistent reproducibility across laboratory conditions."},{title:"Low Operating Cost",description:"Simple laboratory procedure requiring minimal specialized chemical infrastructure and low per-test expenditure."}],featuredProducts:["cotton-sugar-test-tms54","glucosil-sugar-solution-tms55"]}];function Re({onOpenEnquiry:a}){const[o,t]=g.useState(!1),[d,r]=g.useState(!1),[s,l]=g.useState(!1),[i,m]=g.useState("EN"),[n,x]=g.useState(!1),u=re();g.useEffect(()=>{const h=()=>{t(window.scrollY>15)};return window.addEventListener("scroll",h,{passive:!0}),()=>window.removeEventListener("scroll",h)},[]),g.useEffect(()=>{r(!1),l(!1),x(!1),window.scrollTo(0,0)},[u.pathname]),g.useEffect(()=>{if(d){const h=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=h}}},[d]);const f=[{code:"EN",label:"English"},{code:"IT",label:"Italiano"},{code:"ZH",label:"中文 (Simplified)"}];return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"top-technical-bar",children:e.jsxs("div",{className:"container-wide top-tech-inner",children:[e.jsxs("div",{className:"tech-meta-left",children:[e.jsx("span",{className:"concept-demo-badge font-mono",children:"CONCEPT DEMO"}),e.jsx("span",{className:"tech-sep",children:"/"}),e.jsx("span",{className:"tech-coord font-mono",children:"SAVOGNA D’ISONZO (GO) · 45°52′N 13°34′E"}),e.jsx("span",{className:"tech-sep",children:"/"}),e.jsx("span",{className:"tech-heritage",children:"ITALIAN TEXTILE MACHINERY · SINCE 1956"}),e.jsx("span",{className:"tech-sep",children:"/"}),e.jsx("span",{className:"tech-acimit",children:"MEMBER OF ACIMIT"})]}),e.jsxs("div",{className:"tech-meta-right",children:[e.jsxs("a",{href:"tel:+390481882320",className:"tech-contact-link",children:[e.jsx(I,{size:11,color:"var(--color-accent)"}),e.jsx("span",{className:"font-mono tabular-nums",children:"+39 (0481) 882320"})]}),e.jsx("span",{className:"tech-sep",children:"/"}),e.jsxs("a",{href:"mailto:sales@tomsic.it",className:"tech-contact-link",children:[e.jsx(O,{size:11,color:"var(--color-accent)"}),e.jsx("span",{children:"sales@tomsic.it"})]})]})]})}),e.jsx("header",{className:`site-header ${o?"scrolled":""}`,children:e.jsxs("div",{className:"container-wide header-inner",children:[e.jsxs(p,{to:"/",className:"brand-logo","aria-label":"Tomsic Advanced Technologies Home",children:[e.jsx("img",{src:"/assets/tomsic-logo.png",alt:"Tomsic Advanced Technologies",className:"logo-img",width:"142",height:"38"}),e.jsxs("div",{className:"brand-tag-wrapper",children:[e.jsx("span",{className:"brand-heritage-line",children:"ADVANCED TECHNOLOGIES"}),e.jsx("span",{className:"brand-origin-line font-mono",children:"100% ENGINEERED IN ITALY"})]})]}),e.jsxs("nav",{className:"desktop-nav","aria-label":"Main Navigation",children:[e.jsx(w,{to:"/",className:({isActive:h})=>`nav-link ${h?"active":""}`,end:!0,children:"Home"}),e.jsxs("div",{className:"nav-dropdown-wrapper",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[e.jsxs(w,{to:"/solutions",className:({isActive:h})=>`nav-link nav-link-dropdown ${h?"active":""}`,children:[e.jsx("span",{children:"Solutions"}),e.jsx(K,{size:13,className:`chevron-icon ${s?"rotated":""}`})]}),s&&e.jsx("div",{className:"dropdown-menu",children:e.jsxs("div",{className:"dropdown-inner",children:[e.jsxs("div",{className:"dropdown-summary",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-meta",children:"SPECIALIZED DIVISIONS"}),e.jsx("h4",{style:{fontSize:"1.05rem",margin:"0.4rem 0 0.5rem",color:"#141D24"},children:"Engineering & Metrology"}),e.jsx("p",{style:{fontSize:"0.85rem",color:"#5C7080",lineHeight:"1.5"},children:"Complete testing instrumentation and closed-loop spinning regulation engineered in Savogna d'Isonzo."})]}),e.jsxs(p,{to:"/solutions",className:"dropdown-view-all",children:[e.jsx("span",{children:"Solutions Master Overview"}),e.jsx(v,{size:14})]})]}),e.jsx("div",{className:"dropdown-items",children:Y.map((h,c)=>e.jsxs(p,{to:`/solutions/${h.slug}`,className:"dropdown-card",children:[e.jsxs("div",{className:"dropdown-card-index font-mono",children:["0",c+1]}),e.jsxs("div",{className:"dropdown-card-text",children:[e.jsx("span",{className:"dropdown-card-title",children:h.title}),e.jsx("span",{className:"dropdown-card-desc",children:h.subtitle})]})]},h.slug))})]})})]}),e.jsx(w,{to:"/products/easy-evenness-tester",className:({isActive:h})=>`nav-link ${h?"active":""}`,children:"Products"}),e.jsx(w,{to:"/company",className:({isActive:h})=>`nav-link ${h?"active":""}`,children:"Company"}),e.jsx(w,{to:"/news",className:({isActive:h})=>`nav-link ${h?"active":""}`,children:"News & Events"}),e.jsx(w,{to:"/contact",className:({isActive:h})=>`nav-link ${h?"active":""}`,children:"Contact"})]}),e.jsxs("div",{className:"header-actions",children:[e.jsxs("div",{className:"lang-selector-wrapper",children:[e.jsxs("button",{type:"button",className:"lang-toggle-btn",onClick:()=>x(!n),"aria-expanded":n,"aria-label":"Select language",children:[e.jsx(ae,{size:14,color:"#5C7080"}),e.jsx("span",{className:"lang-code font-mono",children:i}),e.jsx(K,{size:11,color:"#5C7080"})]}),n&&e.jsx("div",{className:"lang-dropdown",children:f.map(h=>e.jsxs("button",{className:`lang-option ${i===h.code?"selected":""}`,onClick:()=>{m(h.code),x(!1)},children:[e.jsx("span",{className:"lang-name",children:h.label}),i===h.code&&e.jsx("span",{className:"lang-check",children:"✓"})]},h.code))})]}),e.jsxs("button",{type:"button",className:"btn btn-primary btn-sm header-cta",onClick:()=>a&&a("","Sales"),children:[e.jsx("span",{children:"Technical Enquiry"}),e.jsx(v,{size:14})]}),e.jsx("button",{type:"button",className:"mobile-toggle",onClick:()=>r(!d),"aria-label":"Toggle navigation menu","aria-expanded":d,children:d?e.jsx(B,{size:24}):e.jsx(he,{size:24})})]})]})}),d&&e.jsx("div",{className:"mobile-drawer",role:"dialog","aria-modal":"true","data-lenis-prevent":!0,children:e.jsxs("div",{className:"mobile-drawer-content","data-lenis-prevent":!0,children:[e.jsxs("div",{className:"mobile-nav-group",children:[e.jsx("span",{className:"text-meta mobile-section-label",children:"SITE NAVIGATION"}),e.jsx(w,{to:"/",className:"mobile-nav-link",onClick:()=>r(!1),end:!0,children:"Home"}),e.jsx(w,{to:"/solutions",className:"mobile-nav-link",onClick:()=>r(!1),children:"Solutions"}),e.jsxs("div",{className:"mobile-sublinks",children:[e.jsxs(p,{to:"/solutions/laboratory",className:"mobile-sublink",onClick:()=>r(!1),children:[e.jsx("span",{children:"Laboratory Solutions"}),e.jsx("span",{className:"mobile-sub-tag font-mono",children:"LAB"})]}),e.jsxs(p,{to:"/solutions/spinning",className:"mobile-sublink",onClick:()=>r(!1),children:[e.jsx("span",{children:"Spinning Automation"}),e.jsx("span",{className:"mobile-sub-tag font-mono",children:"MILL"})]}),e.jsxs(p,{to:"/solutions/sugar",className:"mobile-sublink",onClick:()=>r(!1),children:[e.jsx("span",{children:"Sugar Contamination"}),e.jsx("span",{className:"mobile-sub-tag font-mono",children:"SUGAR"})]})]}),e.jsx("span",{className:"text-meta mobile-section-label",style:{marginTop:"1.25rem"},children:"FLAGSHIP INSTRUMENTS"}),e.jsxs("div",{className:"mobile-sublinks",children:[e.jsxs(p,{to:"/products/easy-evenness-tester",className:"mobile-sublink",onClick:()=>r(!1),children:[e.jsx("span",{children:"easy Evenness Tester"}),e.jsx("span",{className:"mobile-sub-tag font-mono",children:"EVENNESS"})]}),e.jsxs(p,{to:"/products/tensotester-3",className:"mobile-sublink",onClick:()=>r(!1),children:[e.jsx("span",{children:"TensoTester3 Strength Tester"}),e.jsx("span",{className:"mobile-sub-tag font-mono",children:"TENSILE"})]}),e.jsxs(p,{to:"/products/tms60-nep-trash",className:"mobile-sublink",onClick:()=>r(!1),children:[e.jsx("span",{children:"TMS60 Nep & Trash Tester"}),e.jsx("span",{className:"mobile-sub-tag font-mono",children:"METROLOGY"})]}),e.jsxs(p,{to:"/products/card-autoleveller-tms25-r2c",className:"mobile-sublink",onClick:()=>r(!1),children:[e.jsx("span",{children:"TMS25-R2C Card Autoleveller"}),e.jsx("span",{className:"mobile-sub-tag font-mono",children:"AUTOLEVEL"})]}),e.jsxs(p,{to:"/products/cotton-sugar-test-tms54",className:"mobile-sublink",onClick:()=>r(!1),children:[e.jsx("span",{children:"TMS54 Cotton Sugar Test"}),e.jsx("span",{className:"mobile-sub-tag font-mono",children:"STICKINESS"})]})]}),e.jsx("span",{className:"text-meta mobile-section-label",style:{marginTop:"1.25rem"},children:"ENTERPRISE & NETWORK"}),e.jsx(w,{to:"/company",className:"mobile-nav-link",onClick:()=>r(!1),children:"Company & Heritage"}),e.jsx(w,{to:"/news",className:"mobile-nav-link",onClick:()=>r(!1),children:"News & Exhibitions"}),e.jsx(w,{to:"/contact",className:"mobile-nav-link",onClick:()=>r(!1),children:"Contact & Worldwide Agents"})]}),e.jsxs("div",{className:"mobile-drawer-footer",children:[e.jsxs("div",{className:"mobile-lang-picker",children:[e.jsx("span",{className:"text-meta",children:"SELECT LANGUAGE:"}),e.jsx("div",{className:"mobile-lang-btn-row",children:f.map(h=>e.jsx("button",{className:`mobile-lang-btn font-mono ${i===h.code?"active":""}`,onClick:()=>m(h.code),children:h.code},h.code))})]}),e.jsxs("button",{className:"btn btn-primary mobile-consult-btn",onClick:()=>{r(!1),a&&a("","Sales")},children:[e.jsx("span",{children:"Request Technical Consultation"}),e.jsx(v,{size:15,style:{flexShrink:0}})]}),e.jsx("div",{className:"mobile-contact-snippet",children:e.jsxs("p",{className:"mobile-contact-text font-mono",children:["Tomsic S.r.l. · Savogna d'Isonzo (GO), Italy",e.jsx("br",{}),"Tel: +39 (0481) 882320 · sales@tomsic.it"]})})]})]})}),e.jsx("style",{children:`
        /* Top Technical Utility Bar */
        .top-technical-bar {
          background-color: var(--color-graphite-dark);
          color: #8E9EA9;
          font-size: 0.6875rem;
          letter-spacing: 0.04em;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.4rem 0;
        }
        .top-tech-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .tech-meta-left, .tech-meta-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .tech-sep {
          color: rgba(255, 255, 255, 0.2);
        }
        .tech-heritage, .tech-acimit {
          font-size: 0.6875rem;
          color: #B2C0CB;
        }
        .concept-demo-badge {
          display: inline-block;
          font-size: 0.5875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 0.12rem 0.45rem;
          background: rgba(197, 55, 39, 0.28);
          border: 1px solid rgba(197, 55, 39, 0.55);
          border-radius: var(--radius-xs);
          color: #FFFFFF;
          line-height: 1.3;
        }
        .tech-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: #B2C0CB;
          transition: color var(--transition-fast);
        }
        .tech-contact-link:hover {
          color: #FFFFFF;
        }

        /* Site Header */
        .site-header {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          background-color: var(--color-warm-ivory);
          border-bottom: 1px solid var(--border-hairline);
          z-index: 1000;
          transition: background-color var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }
        .site-header.scrolled {
          background-color: rgba(245, 244, 240, 0.96);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 4px 20px rgba(20, 29, 36, 0.04);
          border-bottom-color: var(--border-subtle);
        }
        .header-inner {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo-img {
          height: 36px;
          width: auto;
          object-fit: contain;
          transition: transform var(--transition-fast);
        }
        .brand-tag-wrapper {
          display: flex;
          flex-direction: column;
          border-left: 1px solid var(--border-subtle);
          padding-left: 1rem;
          line-height: 1.25;
        }
        .brand-heritage-line {
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: var(--color-graphite);
          white-space: nowrap;
        }
        .brand-origin-line {
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: var(--color-steel-blue);
          white-space: nowrap;
        }

        /* Desktop Nav */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: clamp(0.85rem, 1.4vw, 1.85rem);
          flex-shrink: 0;
        }
        .nav-link {
          font-family: var(--font-nav);
          font-size: 0.925rem;
          font-weight: 500;
          color: var(--color-graphite);
          padding: 0.5rem 0;
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          white-space: nowrap !important;
          flex-shrink: 0;
          transition: color var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--color-accent);
        }
        .nav-link.active {
          color: var(--color-graphite);
          font-weight: 600;
        }
        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--color-accent);
        }
        .chevron-icon {
          transition: transform var(--transition-fast);
        }
        .chevron-icon.rotated {
          transform: rotate(180deg);
        }

        /* Dropdown Architecture */
        .nav-dropdown-wrapper {
          position: relative;
        }
        .dropdown-menu {
          position: absolute;
          top: calc(100% + 12px);
          left: -40px;
          width: 620px;
          background-color: #FFFFFF;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-elevated);
          padding: 1.75rem;
          animation: dropFade 0.2s var(--ease-editorial);
          z-index: 1010;
        }
        @keyframes dropFade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .dropdown-inner {
          display: grid;
          grid-template-columns: 210px 1fr;
          gap: 1.75rem;
        }
        .dropdown-summary {
          border-right: 1px solid var(--border-hairline);
          padding-right: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .dropdown-view-all {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-accent);
          margin-top: 1.25rem;
        }
        .dropdown-items {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .dropdown-card {
          padding: 0.75rem 0.95rem;
          border-radius: var(--radius-xs);
          border: 1px solid transparent;
          transition: all var(--transition-fast);
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }
        .dropdown-card:hover {
          background-color: var(--color-warm-ivory);
          border-color: var(--border-hairline);
        }
        .dropdown-card-index {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-accent);
          margin-top: 2px;
        }
        .dropdown-card-title {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--color-graphite);
        }
        .dropdown-card-desc {
          display: block;
          font-size: 0.775rem;
          color: var(--color-steel-blue);
          line-height: 1.35;
          margin-top: 0.2rem;
        }

        /* Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-shrink: 0;
        }
        .lang-selector-wrapper {
          position: relative;
        }
        .lang-toggle-btn {
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
          padding: 0.4rem 0.65rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-graphite);
          transition: background-color var(--transition-fast), border-color var(--transition-fast);
        }
        .lang-toggle-btn:hover {
          border-color: var(--color-graphite);
        }
        .lang-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          right: 0;
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
          box-shadow: var(--shadow-card);
          padding: 0.5rem;
          width: 175px;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          z-index: 1020;
        }
        .lang-option {
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 0.65rem;
          border-radius: var(--radius-xs);
          font-size: 0.8125rem;
          color: var(--color-graphite);
          cursor: pointer;
          text-align: left;
          width: 100%;
        }
        .lang-option:hover {
          background-color: var(--color-warm-ivory);
        }
        .lang-option.selected {
          font-weight: 600;
          color: var(--color-accent);
        }
        .mobile-toggle {
          display: none;
          background: #FAF9F6;
          border: 1px solid var(--border-hairline);
          cursor: pointer;
          color: var(--color-graphite);
          padding: 0.5rem;
          min-width: 44px;
          min-height: 44px;
          border-radius: var(--radius-xs);
          align-items: center;
          justify-content: center;
          transition: background-color var(--transition-fast), border-color var(--transition-fast);
        }
        .mobile-toggle:hover {
          background-color: #FFFFFF;
          border-color: var(--color-graphite);
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: var(--header-height);
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 100%;
          height: calc(100vh - var(--header-height));
          height: calc(100dvh - var(--header-height));
          background-color: var(--color-warm-ivory);
          border-top: 1px solid var(--border-hairline);
          z-index: 999;
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          padding: 1.25rem 1.15rem 4rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          animation: drawerSlide 0.22s var(--ease-editorial);
        }
        @keyframes drawerSlide {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mobile-drawer-content {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: space-between;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }
        .mobile-section-label {
          display: block;
          margin-bottom: 0.65rem;
          letter-spacing: 0.1em;
          color: var(--color-accent);
          font-size: 0.7rem;
        }
        .mobile-nav-link {
          display: flex;
          align-items: center;
          font-family: var(--font-heading);
          font-size: clamp(1.05rem, 4.2vw, 1.2rem);
          font-weight: 700;
          color: var(--color-graphite);
          min-height: 46px;
          padding: 0.55rem 0;
          border-bottom: 1px solid var(--border-hairline);
          text-decoration: none;
          white-space: normal;
          word-break: break-word;
          overflow-wrap: break-word;
          line-height: 1.3;
          width: 100%;
          box-sizing: border-box;
        }
        .mobile-nav-link:active {
          color: var(--color-muted-bronze);
        }
        .mobile-sublinks {
          padding-left: 0.25rem;
          margin: 0.35rem 0 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          width: 100%;
          box-sizing: border-box;
        }
        .mobile-sublink {
          font-size: clamp(0.85rem, 3.6vw, 0.925rem);
          color: #4D606E;
          min-height: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          text-decoration: none;
          padding: 0.35rem 0.5rem;
          border-radius: var(--radius-xs);
          transition: background var(--transition-fast), color var(--transition-fast);
          white-space: normal;
          word-break: break-word;
          overflow-wrap: break-word;
          line-height: 1.35;
          width: 100%;
          box-sizing: border-box;
        }
        .mobile-sublink:hover, .mobile-sublink:active {
          color: var(--color-graphite);
          background-color: rgba(20, 29, 36, 0.05);
        }
        .mobile-sub-tag {
          font-size: 0.625rem;
          font-weight: 600;
          padding: 2px 5px;
          background-color: rgba(20, 29, 36, 0.05);
          border: 1px solid rgba(20, 29, 36, 0.1);
          color: var(--color-steel-blue);
          border-radius: 2px;
          letter-spacing: 0.04em;
          flex-shrink: 0;
        }
        .mobile-drawer-footer {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-subtle);
          width: 100%;
          box-sizing: border-box;
        }
        .mobile-lang-picker {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          width: 100%;
          box-sizing: border-box;
        }
        .mobile-lang-btn-row {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          width: 100%;
          box-sizing: border-box;
        }
        .mobile-lang-btn {
          min-width: 44px;
          min-height: 44px;
          padding: 0.35rem 0.85rem;
          border: 1px solid var(--border-subtle);
          background: #FFFFFF;
          border-radius: var(--radius-xs);
          font-size: 0.85rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }
        .mobile-lang-btn.active {
          background-color: var(--color-graphite);
          color: #FFFFFF;
          border-color: var(--color-graphite);
        }
        .mobile-consult-btn {
          width: 100%;
          margin-top: 1.25rem;
          justify-content: center;
          min-height: 48px;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          white-space: normal;
          text-align: center;
          box-sizing: border-box;
        }
        .mobile-contact-snippet {
          margin-top: 1.25rem;
        }
        .mobile-contact-text {
          font-size: 0.75rem;
          color: #647887;
          line-height: 1.5;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        @media (max-width: 1320px) {
          .brand-tag-wrapper {
            display: none;
          }
          .desktop-nav {
            gap: 1.15rem;
          }
        }

        @media (max-width: 1220px) {
          .header-cta {
            display: none;
          }
          .desktop-nav {
            gap: 1.1rem;
          }
          .nav-link {
            font-size: 0.875rem;
            white-space: nowrap !important;
          }
        }

        @media (max-width: 1140px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: inline-flex !important;
          }
          .header-cta {
            display: none !important;
          }
        }

        @media (max-width: 1024px) {
          .top-tech-inner {
            flex-direction: column;
            gap: 0.35rem;
            align-items: flex-start;
          }
        }
        @media (max-width: 640px) {
          .top-technical-bar {
            display: none;
          }
          .logo-img {
            height: 30px;
          }
          .header-inner {
            gap: 1rem;
          }
        }
        @media (max-width: 380px) {
          .logo-img {
            height: 26px;
          }
        }
      `})]})}const E={legalName:"Tomsic S.r.l.",registration:{vatNumber:"IT00468340310",reaNumber:"GO-54264",shareCapital:"€ 26.000,00"},contact:{emailPec:"tomsicsrl@cgn.legalmail.it"},timeline:[{year:"1956",title:"Foundation by Mr. Carlo Tomsic",description:"Mr. Carlo Tomsic establishes an engineering and manufacturing workshop in the Gorizia region of Italy, initially specializing in advanced electronic solutions, control boards, and precision services for the textile industry."},{year:"1956–1997",title:"Strategic Electronics Engineering for VOUK",description:"Tomsic serves as the core electronic systems development partner for legendary drawframe manufacturer VOUK, accumulating unmatched specialized expertise in closed-loop autolevelling, sliver quality monitoring, and high-speed drafting physics."},{year:"1992",title:"Second-Generation Family Leadership",description:"Management of the enterprise passes to the second generation of the Tomsic family, with Mr. Silvan Tomsic assuming the Presidency and Mr. Ladi Tomsic becoming Vice-President."},{year:"1997",title:"Independent Global Market Debut",description:"Tomsic concludes its exclusive cooperation with VOUK and enters the international textile machinery market independently under the TOMSIC brand, debuting innovative card and drawframe autolevelling technologies worldwide."},{year:"2003",title:"New Headquarters & Tripled Factory Facility",description:"Inauguration of the state-of-the-art corporate headquarters and expanded manufacturing complex in Savogna d’Isonzo (GO), tripling production space and launching the TMS25 series of autolevellers and online quality monitors."},{year:"2007",title:'ITMA Munich — The Landmark "easy" Evenness Tester',description:'At ITMA 2007 in Munich, Germany, Tomsic introduces the "easy" Evenness Tester, revolutionizing textile metrology with its modular chassis, standard PC architecture, and 3-click simplicity.'},{year:"2011–2015",title:"TensoTester Series & AutoCount Innovation",description:"Launch of the TensoTester 2 followed by the TensoTester3 automatic tensile tester with 24-position continuous creel, alongside the AutoCount direct count testing module."},{year:"2017",title:"TMS45 Count Analyser & Link Job Technology",description:"Introduction of the TMS45 automated count analyzer featuring proprietary Link Job synchronized database technology that connects count, evenness, and tensile data seamlessly."},{year:"2019",title:"ITMA Barcelona — easyF, TMS46-QM & Sugar Solutions",description:"Tomsic debuts the easyF tester for synthetic filament yarns, the TMS46-QM digital sensor for sliver regularity, and enters cotton stickiness detection with the TMS54 Cotton Sugar Test and TMS55 Glucosil."},{year:"2021",title:"New Generation Gill Box Autoleveller",description:"Release of modern digital closed-loop servo autoleveller retrofit kits for long-fibre gill boxes, supporting wool, flax, and acrylic spinning mills globally."},{year:"2023",title:"ITMA Milan — World Launch of TMS60 Nep & Trash Tester",description:"Tomsic showcases its latest flagship innovation at ITMA Milan: the TMS60 Nep and Trash Tester for high-speed optical classification of raw fiber and sliver impurities."},{year:"2026+",title:"Active International Expansion & Global Exhibitions",description:"Continuing to supply high-precision testing instruments to premier spinning mills in more than 30 countries, with major exhibition appearances at EGYPT STITCH & TEX and INDIA ITME."}]};function Pe({onOpenEnquiry:a}){return e.jsxs("footer",{className:"site-footer bg-graphite",role:"contentinfo",children:[e.jsx("div",{className:"footer-top-cta bg-grid-blueprint-dark",children:e.jsxs("div",{className:"container footer-top-inner",children:[e.jsxs("div",{children:[e.jsx("span",{className:"badge-overline dark font-mono",children:"DIRECT FACTORY CONSULTATION"}),e.jsx("h3",{style:{color:"#FFFFFF",fontSize:"1.85rem",marginTop:"0.25rem"},children:"Precision textile quality control from fibre to finished yarn."})]}),e.jsxs("div",{className:"footer-top-actions",children:[e.jsxs("button",{className:"btn btn-primary",onClick:()=>a&&a("","Sales"),children:[e.jsx("span",{children:"Consult Factory Engineers"}),e.jsx(v,{size:15})]}),e.jsx(p,{to:"/contact",className:"btn btn-secondary-dark",children:e.jsx("span",{children:"Find International Agent"})})]})]})}),e.jsx("div",{className:"divider-dark"}),e.jsx("div",{className:"container footer-main",children:e.jsxs("div",{className:"footer-grid",children:[e.jsxs("div",{className:"footer-col-brand",children:[e.jsxs("div",{className:"footer-brand-header",children:[e.jsx("img",{src:"/assets/tomsic-logo.png",alt:"Tomsic Advanced Technologies",className:"footer-logo-img",style:{filter:"brightness(0) invert(1)"}}),e.jsx("span",{className:"footer-heritage-badge font-mono",children:"EST. 1956 · SAVOGNA D'ISONZO (GO), ITALY"})]}),e.jsx("p",{className:"footer-brand-desc",children:"Tomsic S.r.l. is an independent Italian engineering manufacturer specialized in textile laboratory testing instruments, spinning autolevellers, and raw cotton sugar diagnostics. 100% engineered and built in Savogna d’Isonzo."}),e.jsxs("div",{className:"footer-acimit-badge",children:[e.jsx("img",{src:"/assets/acimit-logo.png",alt:"Member of ACIMIT",className:"acimit-img",width:"84"}),e.jsxs("div",{className:"acimit-text",children:[e.jsx("strong",{children:"Member of ACIMIT"}),e.jsx("span",{children:"Association of Italian Textile Machinery Manufacturers"})]})]})]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{className:"footer-col-title font-mono",children:"Solutions"}),e.jsxs("ul",{className:"footer-links",children:[e.jsx("li",{children:e.jsx(p,{to:"/solutions/laboratory",children:"Laboratory Solutions"})}),e.jsx("li",{children:e.jsx(p,{to:"/solutions/spinning",children:"Spinning Automation"})}),e.jsx("li",{children:e.jsx(p,{to:"/solutions/sugar",children:"Sugar Contamination"})}),e.jsx("li",{children:e.jsx(p,{to:"/solutions",children:"All Solutions Overview"})})]}),e.jsx("h4",{className:"footer-col-title font-mono",style:{marginTop:"1.75rem"},children:"Flagship Systems"}),e.jsxs("ul",{className:"footer-links",children:[e.jsx("li",{children:e.jsx(p,{to:"/products/easy-evenness-tester",children:"easy Evenness Tester"})}),e.jsx("li",{children:e.jsx(p,{to:"/products/tensotester-3",children:"TensoTester3 Strength Tester"})}),e.jsx("li",{children:e.jsx(p,{to:"/products/tms60-nep-trash",children:"TMS60 Nep & Trash Tester"})}),e.jsx("li",{children:e.jsx(p,{to:"/products/card-autoleveller-tms25-r2c",children:"TMS25-R2C Card Autoleveller"})}),e.jsx("li",{children:e.jsx(p,{to:"/products/cotton-sugar-test-tms54",children:"TMS54 Cotton Sugar Test"})})]})]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{className:"footer-col-title font-mono",children:"Company"}),e.jsxs("ul",{className:"footer-links",children:[e.jsx("li",{children:e.jsx(p,{to:"/company",children:"About Tomsic & History"})}),e.jsx("li",{children:e.jsx(p,{to:"/company#leadership",children:"Executive Leadership"})}),e.jsx("li",{children:e.jsx(p,{to:"/company#manufacturing",children:"100% In-House Italian Engineering"})}),e.jsx("li",{children:e.jsx(p,{to:"/news",children:"News & World Exhibitions"})}),e.jsx("li",{children:e.jsx(p,{to:"/contact",children:"Worldwide Agent Directory"})})]}),e.jsx("h4",{className:"footer-col-title font-mono",style:{marginTop:"1.75rem"},children:"Upcoming Exhibitions"}),e.jsxs("ul",{className:"footer-links font-mono",style:{fontSize:"0.8rem"},children:[e.jsxs("li",{style:{color:"#8E9EA9"},children:[e.jsx("strong",{style:{color:"#EBF0F3"},children:"INDIA ITME 2026"})," · Greater Noida"]}),e.jsxs("li",{style:{color:"#8E9EA9"},children:[e.jsx("strong",{style:{color:"#EBF0F3"},children:"EGYPT STITCH & TEX"})," · Cairo"]})]})]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{className:"footer-col-title font-mono",children:"Headquarters"}),e.jsxs("div",{className:"footer-contact-item",children:[e.jsx(H,{size:16,color:"var(--color-accent)",className:"contact-icon"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Tomsic S.r.l."}),e.jsx("span",{children:"via Malnisce, 3/B"}),e.jsx("span",{children:"34070 Savogna d’Isonzo (GO)"}),e.jsx("span",{children:"Italy – European Union"}),e.jsx("span",{className:"font-mono",style:{fontSize:"0.725rem",color:"#647887",marginTop:"0.2rem"},children:"45°52′N 13°34′E"})]})]}),e.jsxs("div",{className:"footer-contact-item",style:{marginTop:"0.85rem"},children:[e.jsx(I,{size:16,color:"#A48256",className:"contact-icon"}),e.jsxs("div",{className:"font-mono tabular-nums",children:[e.jsx("span",{children:"Admin: +39 (0481) 882320"}),e.jsx("span",{children:"Service: +39 (0481) 882032"}),e.jsx("span",{children:"Fax: +39 (0481) 882542"})]})]}),e.jsxs("div",{className:"footer-contact-item",style:{marginTop:"0.85rem"},children:[e.jsx(O,{size:16,color:"#A48256",className:"contact-icon"}),e.jsxs("div",{children:[e.jsx("a",{href:"mailto:tomsic@tomsic.it",children:"tomsic@tomsic.it"}),e.jsx("a",{href:"mailto:sales@tomsic.it",children:"sales@tomsic.it"}),e.jsx("a",{href:"mailto:service@tomsic.it",children:"service@tomsic.it"}),e.jsx("span",{className:"font-mono",style:{fontSize:"0.7rem",color:"#647887"},children:"PEC: tomsicsrl@cgn.legalmail.it"})]})]})]})]})}),e.jsx("div",{className:"divider-dark"}),e.jsxs("div",{className:"container footer-socket",children:[e.jsxs("div",{className:"socket-legal font-mono",children:[e.jsxs("span",{children:["© ",new Date().getFullYear()," Tomsic S.r.l. — P.IVA e C.F. / VAT n. IT00468340310 · REA n. GO-54264 · Capitale Sociale € 26.000,00 i.v."]}),e.jsx("span",{style:{color:"#8E9EA9",marginLeft:"0.5rem"},children:"Independent Design Concept · Source: tomsic.it"})]}),e.jsxs("div",{className:"socket-links",children:[e.jsx(p,{to:"/contact",children:"Contact Support"}),e.jsx("span",{className:"socket-sep",children:"·"}),e.jsx("a",{href:"https://www.iubenda.com/privacy-policy/76380471",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"}),e.jsx("span",{className:"socket-sep",children:"·"}),e.jsx("a",{href:"https://www.iubenda.com/privacy-policy/76380471/cookie-policy",target:"_blank",rel:"noopener noreferrer",children:"Cookie Policy"})]})]}),e.jsx("style",{children:`
        .site-footer {
          margin-top: auto;
          color: #B2C0CB;
          font-size: 0.9375rem;
        }
        .footer-top-cta {
          padding: 3.5rem 0;
        }
        .footer-top-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .footer-top-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .footer-main {
          padding-top: 4.5rem;
          padding-bottom: 3.5rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          width: 100%;
        }
        .footer-brand-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .footer-logo-img {
          height: 36px !important;
          width: auto !important;
          max-width: 150px;
          object-fit: contain;
          display: block;
        }
        .footer-heritage-badge {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-accent);
          white-space: normal !important;
          overflow-wrap: break-word !important;
          word-break: break-word !important;
          display: block;
          line-height: 1.4;
        }
        .footer-brand-desc {
          font-size: 0.875rem;
          line-height: 1.6;
          color: #8E9EA9;
          margin-bottom: 1.5rem;
          max-width: 100%;
        }
        .footer-acimit-badge {
          display: flex;
          align-items: center;
          gap: 1rem;
          background-color: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          max-width: 100%;
          box-sizing: border-box;
        }
        .acimit-img {
          height: auto;
          background: #FFFFFF;
          padding: 4px;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .acimit-text strong {
          display: block;
          font-size: 0.8125rem;
          color: #FFFFFF;
        }
        .acimit-text span {
          display: block;
          font-size: 0.7rem;
          color: #8E9EA9;
          line-height: 1.25;
        }
        .footer-col-title {
          font-size: 0.775rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #FFFFFF;
          margin-bottom: 1.25rem;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .footer-links a {
          color: #8E9EA9;
          font-size: 0.875rem;
          transition: color var(--transition-fast);
        }
        .footer-links a:hover {
          color: var(--color-accent);
        }
        .footer-contact-item {
          display: flex;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: #8E9EA9;
          line-height: 1.5;
        }
        .footer-contact-item strong {
          display: block;
          color: #FFFFFF;
        }
        .footer-contact-item span {
          display: block;
        }
        .footer-contact-item a {
          display: block;
          color: #8E9EA9;
        }
        .footer-contact-item a:hover {
          color: var(--color-accent);
        }
        .contact-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }
        .footer-socket {
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.725rem;
          color: #647887;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .socket-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .socket-links a {
          color: #8E9EA9;
        }
        .socket-links a:hover {
          color: var(--color-accent);
        }
        .socket-sep {
          color: #445766;
        }

        .socket-legal {
          overflow-wrap: break-word;
          word-break: break-word;
          max-width: 100%;
        }

        @media (max-width: 1080px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }
        @media (max-width: 768px) {
          .footer-main {
            padding-top: 3.5rem;
            padding-bottom: 2.75rem;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.25rem;
            width: 100%;
          }
          .footer-col-brand, .footer-col {
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            overflow-wrap: break-word !important;
            word-break: break-word !important;
          }
          .footer-top-inner {
            flex-direction: column;
            align-items: stretch;
            gap: 1.5rem;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .footer-top-inner h3 {
            max-width: 100%;
            font-size: 1.35rem;
            line-height: 1.25;
          }
          .footer-top-actions {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
            gap: 0.75rem;
          }
          .footer-top-actions .btn {
            width: 100%;
            justify-content: center;
          }
          .footer-socket {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
            padding-top: 1.25rem;
            padding-bottom: 1.75rem;
          }
          .footer-brand-header {
            width: 100%;
          }
          .footer-acimit-badge {
            width: 100%;
            box-sizing: border-box;
          }
        }
        @media (max-width: 380px) {
          .footer-main, .footer-top-inner, .footer-socket {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
        }
      `})]})}const j=[{slug:"easy-evenness-tester",name:"easy Evenness Tester",code:"TMS-EASY",category:"Laboratory Solutions",categorySlug:"laboratory",tagline:"High-Precision Capacitive & Optical Evenness Testing for Yarn, Roving, and Sliver",badge:"Flagship Metrology System",description:'The Tomsic "easy" Evenness Tester is an internationally recognized quality control system designed to measure the mass variation, evenness, and surface imperfection of yarn, roving, and sliver. Operating on capacitive principles with optional optical hairiness measurement, it matches international industry reference standards while providing an exceptionally simple 3-click user interface and modular architecture.',primaryImage:"/assets/easy-evenness-tester.jpg",gallery:[{url:"/assets/easy-evenness-tester.jpg",title:"easy Evenness Tester System with 24-Position Creel"},{url:"/assets/easy-sensor-detail.jpg",title:"Capacitive Measuring Slot & Tension Control"},{url:"/assets/easy-chassis.jpg",title:"Modular Hardware Chassis & Drive System"},{url:"/assets/easy-creel.jpg",title:"24-Position Automatic Yarn Changer (Autochanger)"},{url:"/assets/easy-autofeeder.jpg",title:"AutoFeeder Tension-Free Sliver Delivery System"}],features:[{title:"Full International Standard Alignment",description:"Numerical and graphical results (spectrograms, variance-length curves, 3D diagrams) align precisely with worldwide textile standards. Approved and operated by world-leading textile houses including Ermenegildo Zegna and Botto Giuseppe."},{title:"3-Click Software Workflow",description:"Operated via Microsoft .NET technology on standard commercial PCs (Windows 10 / 11 ready). All parameters and measuring units configured in a unified single screen, running tests in just 3 clicks."},{title:"Link Job Synchronized Database",description:"Direct bi-directional database link with the Tomsic TMS45 Count Analyser automatically pulls real yarn count data into the test run, eliminating human transcription error."},{title:"Modular Extractable Hardware Architecture",description:"Each functional slot is completely independent and user-extractable. Embedded diagnostic self-tests minimize maintenance time and eliminate costly proprietary technician visits."},{title:"Extensive 25-Year Database History",description:"Storage for historical production data spanning decades with instant one-click export to Microsoft Excel, Word, PDF, or network mainframes."}],applications:["Staple yarn evenness testing (Cotton, Wool, Linen, Synthetics, and Blends)","Roving regularity and mass distribution analysis","Card and drawframe sliver mass variation control","Yarn imperfection indexing (Thin places, Thick places, and Neps)","Optical hairiness index and distribution measurement","Spinning mill quality certification and comparative benchmarking"],specifications:[{parameter:"Measurement Principle (Evenness)",value:"Capacitive sensor slot with high-frequency signal processing"},{parameter:"Measurement Principle (Hairiness)",value:"Optical sensor module (optional)"},{parameter:"Measurement Principle (Count)",value:"Mass measurement integration with AutoCount"},{parameter:"Standard Measuring Range",value:"Approx. 1 tex to 12 ktex (Yarn, Roving, and Sliver)"},{parameter:"Extended Range (ECS3-EXT Sensor)",value:"24 to 40 g/m (up to ~30 ktex) for heavy wool and acrylic sliver"},{parameter:"Testing Speeds",value:"Selectable test speeds up to 400 m/min"},{parameter:"Autochanger Capacity",value:"24 package positions with automatic bobbin feed"},{parameter:"Creel Capacity",value:"24-position creel system with low-friction yarn guides"},{parameter:"Computer Interface",value:"Standard PC, monitor, keyboard, printer (no proprietary internal PCI cards)"},{parameter:"Operating System Compatibility",value:"Windows 10 / Windows 11 (Microsoft .NET Framework)"},{parameter:"Database Storage",value:"Relational SQL database, historical records, free export to Excel/Word"},{parameter:"Language Support",value:"Multilingual (English, Italian, Chinese, Spanish, Portuguese, German, Turkish)"}],modularOptions:[{name:"Hairiness Optical Module",description:"Measures yarn hairiness index simultaneously with evenness"},{name:"24-Position Autochanger",description:"Fully automated continuous testing of up to 24 yarn packages"},{name:"AutoCount Module",description:"Direct yarn count test integration feeding actual count into Easy database"},{name:"AutoFeeder Delivery System",description:"Tension-free delivery system for delicate slivers (wool, silk, linen) with optional integrated scale"},{name:"ECS3-EXT External Sensor",description:"Dedicated external sensor (L=120 mm) with specialized feed cylinders for heavy wool & acrylic"}],officialCatalogName:"TOMSIC General Metrology Catalogue (Laboratory Line)",relatedProducts:["tensotester-3","tms60-nep-trash","easyf-filament","tms45-count-analyser"]},{slug:"tensotester-3",name:"TensoTester3 — Strength Tester",code:"TMS-TT3",category:"Laboratory Solutions",categorySlug:"laboratory",tagline:"Automatic Constant Rate of Elongation (C.R.E.) Tensile Tester for Yarns and Leas",badge:"Universal Tensile Testing",description:"The TensoTester3 is a fully automated tensile strength and elongation tester designed according to international Constant Rate of Elongation (C.R.E.) standards. Equipped with a 24-position autochanger and rapid-interchange load cells ranging from 3 kg up to 500 kg, it performs unattended batch tensile evaluations of yarns, skeins, and technical textiles with precision repeatability.",primaryImage:"/assets/tensotester3-main.png",gallery:[{url:"/assets/tensotester3-main.png",title:"TensoTester3 Automated System"},{url:"/assets/tensotester3-clamps.jpg",title:"Precision Pneumatic Clamping Assembly"},{url:"/assets/tensotester3-overview.jpg",title:"On-Board Creel and Waste Evacuation System"}],features:[{title:"C.R.E. Standard Measurement Principle",description:"Complies fully with ISO 2062, ASTM D2256, and international textile standards for single-strand and lea tensile testing."},{title:"Rapid Interchangeable Load Cells",description:"Quick-release sensor mechanism allows rapid cell swaps from 3 kg up to 100 kg (and 500 kg with special lea clamps) in seconds."},{title:"Continuous 24-Package Autochanger",description:"Integrated pneumatic changer processes 24 yarn packages sequentially with automatic waste aspiration and yarn catching."},{title:"On-Board Turbo Blower System",description:"High-suction pneumatic evacuation automatically removes broken yarn remnants after every test cycle, preventing clamp contamination."},{title:"Unified Link Job Integration",description:"Shares common database architecture with Tomsic Evenness Tester and Count Analyser for comprehensive quality records."}],applications:["Single yarn breaking force, tenacity (cN/tex, RKM), and elongation testing","Lea and skein breaking strength measurement (up to 500 kg load)","Work of rupture and elastic deformation profiling","Filament and continuous synthetic yarn tensile verification","Sewing thread and technical industrial yarn quality assurance"],specifications:[{parameter:"Measurement Method",value:"Constant Rate of Elongation (C.R.E.)"},{parameter:"Testing Speed",value:"Infinitely adjustable up to 5,000 mm/min"},{parameter:"Test Gauge Length",value:"Adjustable up to 500 mm (standard 250 mm / 500 mm)"},{parameter:"Available Load Cells",value:"3, 6, 10, 15, 20, 25, 50, 100 kg (optional 500 kg for Lea tests)"},{parameter:"Load Cell Accuracy",value:"Class 0.5 (±0.5% of indicated value)"},{parameter:"Autochanger Capacity",value:"24 bobbin positions with automated yarn clamp feed"},{parameter:"Pneumatic System",value:"On-board turbo blower yarn waste evacuation"},{parameter:"Working Pressure",value:"6 bar compressed air"},{parameter:"Software Platform",value:"Microsoft .NET, Windows 10/11, comprehensive statistical reports"}],modularOptions:[{name:"Special Lea Clamps (500 kg)",description:"Heavy-duty clamping fixtures for skein/lea tensile evaluations"},{name:"Interchangeable 3 kg / 10 kg / 50 kg Load Cells",description:"Factory-calibrated precision strain gauge cells"},{name:"Bar Code Reader",description:"Instant package lot identification and automated test parameter selection"}],officialCatalogName:"TensoTester3 Technical Specification Sheet",relatedProducts:["easy-evenness-tester","tms45-count-analyser","tms60-nep-trash"]},{slug:"tms60-nep-trash",name:"TMS60 Nep and Trash Tester",code:"TMS60",category:"Laboratory Solutions",categorySlug:"laboratory",tagline:"High-Speed Optical Impurity and Seed-Coat Fragment Classifier for Cotton Slivers",badge:"ITMA 2023 Breakthrough",description:"Unveiled at ITMA 2023 in Milan, the TMS60 Nep and Trash Tester represents Tomsic’s latest generation in raw material impurity diagnostics. 100% designed and built in Savogna d’Isonzo, Italy, the TMS60 rapidly counts and categorizes neps, trash particles, dust, and seed-coat fragments in card and drawframe slivers, enabling spinning mills to fine-tune opening, cleaning, and carding efficiency.",primaryImage:"/assets/tms60-nep-trash.jpg",gallery:[{url:"/assets/tms60-nep-trash.jpg",title:"TMS60 Nep and Trash Tester with Integrated Display"}],features:[{title:"High-Resolution Optical Particle Classification",description:"Advanced electro-optical sensors differentiate between botanical trash, seed-coat neps, fiber neps, and fine dust particles."},{title:"Immediate Card & Cleaning Diagnostic",description:"Pinpoints whether high yarn nep counts originate from raw cotton quality or worn card clothing, optimizing maintenance cycles."},{title:"100% Made in Italy Engineering",description:"Designed, precision machined, assembled, and quality-verified at Tomsic’s Savogna d’Isonzo manufacturing facility."},{title:"Comprehensive Image and Spectrogram Archiving",description:"Digital capture of detected impurities provides visual validation of trash classification alongside quantitative counts."}],applications:["Carding machine efficiency assessment (Nep removal efficiency NRE%)","Seed-coat fragment identification in raw and processed slivers","Blowroom cleaning efficiency verification","Cotton ginning and lint quality evaluation","Comber noil and sliver cleanliness benchmarking"],specifications:[{parameter:"Analyzed Material",value:"Card sliver, drawframe sliver, raw cotton web"},{parameter:"Detection Categories",value:"Fiber neps, seed-coat neps, botanical trash, fine dust"},{parameter:"Measurement Principle",value:"High-speed electro-optical scanning and image analysis"},{parameter:"Sample Length",value:"Configurable test length per sliver pass"},{parameter:"Data Reporting",value:"Neps/gram, trash size distribution (microns), total dust index"},{parameter:"Construction",value:"Solid industrial steel chassis, 100% Italian manufacturing"}],modularOptions:[{name:"High-Capacity Sliver Feeder",description:"Smooth motorized feeding mechanism for uniform web presentation"},{name:"Extended Spectrogram Software Module",description:"Periodic fault frequency analysis for drafting mechanisms"}],officialCatalogName:"TMS60 Product Launch Brochure — ITMA Milan",relatedProducts:["easy-evenness-tester","tensotester-3","cotton-sugar-test-tms54"]},{slug:"easyf-filament",name:"easyF — Evenness Tester for Filament",code:"TMS-EASY-F",category:"Laboratory Solutions",categorySlug:"laboratory",tagline:"Dedicated Regularity and Mass Variation Analyzer for Synthetic Continuous Filaments",badge:"Synthetic & Filament QC",description:"Introduced at ITMA Barcelona, the easyF is customized specifically for manufacturers and processors of synthetic continuous filament yarns (POY, DTY, FDY). Featuring low-friction sapphire and ceramic guides, rapid yarn transport, and specialized capacitance geometry, it captures micro-variations without inducing filament electrostatic charge or tension distortion.",primaryImage:"/assets/easyf-filament.jpg",gallery:[{url:"/assets/easyf-filament.jpg",title:"easyF Filament Evenness Tester"}],features:[{title:"Zero-Electrostatic Filament Handling",description:"Special ceramic guides and ground path eliminate static electricity build-up common to POY and DTY synthetic polymers."},{title:"Continuous High-Speed Transport",description:"Precision motorized drive pulls filament smoothly at speeds up to 400 m/min without flattening or stretching the yarn cross-section."},{title:"Tight Capacitance Tolerances",description:"Sensor electronics calibrated specifically for low-denier synthetic fibers (Polyester, Polyamide, Polypropylene, Viscose)."}],applications:["POY, DTY, and FDY synthetic yarn mass uniformity testing","Texturing fault detection (draw variations, surging, friction inconsistencies)","Spinning finish and polymer blend consistency monitoring"],specifications:[{parameter:"Fibre Types",value:"Polyester (PES), Polyamide (PA 6 / PA 6.6), Polypropylene (PP), Rayon"},{parameter:"Count Range",value:"10 dtex to 2,000 dtex continuous filament"},{parameter:"Measurement Sensor",value:"High-sensitivity capacitive slot for low denier filaments"},{parameter:"Software",value:"easyF Dedicated Suite with periodic defect & surging spectrograms"}],modularOptions:[{name:"Rotary Bobbin Stand",description:"Vibration-damped spool rack for industrial texturing bobbins"}],officialCatalogName:"easyF Technical Sheet — Synthetic Filament Testing",relatedProducts:["easy-evenness-tester","tensotester-3"]},{slug:"tms45-count-analyser",name:"TMS45 — Count Analyser",code:"TMS45",category:"Laboratory Solutions",categorySlug:"laboratory",tagline:"Automatic Yarn, Roving, and Sliver Count Determination with Direct Database Link",badge:"Precision Count Metrology",description:'The TMS45 Count Analyser is an automated electronic yarn count determination station. Integrating a precision electronic balance with automated length calculation, it seamlessly communicates with Tomsic’s "easy" Evenness Tester and TensoTester3 through proprietary Link Job technology, feeding real count measurements directly into global quality indices.',primaryImage:"/assets/tms45-count-analyser.jpg",gallery:[{url:"/assets/tms45-count-analyser.jpg",title:"TMS45 High-Precision Count Analyser Station"}],features:[{title:"Link Job Direct Integration",description:"Eliminates manual keyboard entry of yarn numbers into testers, preventing expensive lot grading misclassifications."},{title:"Multi-Unit Calculation",description:"Instant conversion between all global count systems: Nm, Ne, tex, dtex, Denier, and grains/yd."},{title:"High-Resolution Balance",description:"Industrial precision balance with draft shield and rapid settling time for high-throughput laboratory workflow."}],applications:["Sliver, roving, and yarn count (linear density) verification","Wrap reel skein mass weighing and statistical lot variation (CV% of count)","Moisture regain mass compensation"],specifications:[{parameter:"Resolution",value:"0.001 g (1 mg) or 0.0001 g (0.1 mg optional)"},{parameter:"Supported Count Systems",value:"Ne, Nm, tex, dtex, Den, Worsted, Woollen, Grains/yd"},{parameter:"Connectivity",value:"RS-232 / USB / Ethernet to Tomsic Network and PC"},{parameter:"Calibration",value:"Internal and external motorized standard weight calibration"}],modularOptions:[{name:"EleWrap XT Reel Interface",description:"Direct synchronization with motorized wrap reel"}],officialCatalogName:"TMS45 Technical Datasheet",relatedProducts:["easy-evenness-tester","tensotester-3"]},{slug:"card-autoleveller-tms25-r2c",name:"Card Autoleveller TMS25-R2C",code:"TMS25-R2C",category:"Spinning Solutions",categorySlug:"spinning",tagline:"Patented Short-Term Card Autolevelling System with Slub & Thick Places Monitoring",badge:"70% Count Variation Reduction",description:"The Tomsic TMS25-R2C is a globally patented short-term card autoleveller engineered both for original equipment card manufacturers and for modernizing existing industrial cards (Rieter C4/C10/C50/C51, Trützschler DK740/760/803, Marzoli CX300/400, Crosrol MK4/MK5). By measuring web thickness before coiling and controlling feed roller drives via high-speed digital servo loops, it slashes 1-meter count variation by up to 70%.",primaryImage:"/assets/card-autoleveller-tms25.jpg",gallery:[{url:"/assets/card-autoleveller-tms25.jpg",title:"TMS25-R2C Installed on Industrial Card"},{url:"/assets/card-autoleveller-diagram.png",title:"Autoleveller Control Circuit and Real-Time Graphing"}],features:[{title:"Patented Short-Term Regulation",description:"True real-time short-term card autoleveller that corrects sliver thickness deviations over short lengths before material reaches the coiler can."},{title:"Built-in Thick Places Monitoring",description:"Integrated monitoring detects sudden heavy slubs and foreign matter intrusions, logging time histories and triggering automatic stop motions."},{title:"Complete Upgrade Kit Provided",description:"Supplied as a complete turnkey retrofit package including precision measuring head, digital control processor, servo drives, timing belts, and brackets."},{title:"70% Reduction in 1-Meter CV",description:"Consistently improves the 1-meter count variation (CVm 1m) of older cards to meet modern ring and rotor spinning quality thresholds."}],applications:["Carding machine count regulation for short and medium staple cotton","Modernization and modernization of older carding machines","Thick places detection and automatic card stop-motion control","Sliver uniformity optimization for open-end rotor and vortex spinning"],specifications:[{parameter:"Compatibility",value:"Rieter (C4, C10, C50), Trützschler (DK740, DK760, DK803), Marzoli, Crosrol MK4/MK5"},{parameter:"Autolevelling Principle",value:"Displacement measuring tongues with high-resolution digital rotary transducer"},{parameter:"Control Actuator",value:"High-dynamic AC brushless servo motor on feed roller drive"},{parameter:"Regulation Range",value:"±25% to ±30% sliver weight compensation"},{parameter:"Response Time",value:"Millisecond closed-loop digital signal processing"},{parameter:"Operator Interface",value:"Multilingual graphic terminal displaying continuous sliver graph and alerts"}],modularOptions:[{name:"Slub Inventor Software Extension",description:"Patterned thick place insertion for intentional slub/flammé yarn production"},{name:"Mill Central Monitoring Network Interface",description:"Centralized RS-485 / Ethernet connection for plant-wide card CV tracking"}],officialCatalogName:"TMS25-R2C Card Autoleveller Comprehensive Brochure",relatedProducts:["drawframe-autoleveller-tms25-r2d","sliver-quality-monitor-tms25-qm2","gill-box-autoleveller"]},{slug:"drawframe-autoleveller-tms25-r2d",name:"Drawframe Autoleveller TMS25-R2D",code:"TMS25-R2D",category:"Spinning Solutions",categorySlug:"spinning",tagline:"High-Speed Closed-Loop Drafting Regulation for Drawframes (Short and Long Fibres)",badge:"High-Speed Precision Drafting",description:"Built on Tomsic’s decades-long pedigree of electronic engineering for drawframe pioneer VOUK, the TMS25-R2D provides digital closed-loop regulation of drawframe drafting zones at delivery speeds up to 1,000 m/min. Available in dedicated configurations for short cotton staple as well as long wool and synthetic fibres, it guarantees consistent sliver count entering the roving frame or open-end rotor.",primaryImage:"/assets/card-autoleveller-tms25.jpg",gallery:[{url:"/assets/card-autoleveller-tms25.jpg",title:"Drawframe Autoleveller Electronics Assembly"},{url:"/assets/card-autoleveller-diagram.png",title:"Closed-Loop Drafting Control Architecture"}],features:[{title:"Heritage of Vouk Drawframe Expertise",description:"Engineered by the team that originated electronic control systems for VOUK drawframes, reflecting 60+ years of drafting physics knowledge."},{title:"Long Fibre & Short Fibre Variants",description:"Configurable sensor heads and drafting servo kinematics tailored for cotton short fibers or worsted/synthetic long fibres."},{title:"Spectrogram and Periodic Fault Suppression",description:"Real-time FFT spectrogram monitors drafting roller eccentricity and alerts maintenance to mechanical wear."}],applications:["First and second passage drawframe autolevelling in spinning mills","Worsted and semi-worsted spinning preparation","Delivery count standardization for high-speed rotor and air-jet spinning"],specifications:[{parameter:"Delivery Speed Support",value:"Up to 1,000 m/min continuous drafting speed"},{parameter:"Measuring Principle",value:"Pair of groove-and-tongue measuring rollers with inductive displacement sensor"},{parameter:"Correction Length",value:"Short-term autolevelling correcting down to sub-meter sliver intervals"},{parameter:"Processor",value:"Dedicated real-time digital signal processor (DSP)"}],modularOptions:[{name:"Long Fibre Dedicated Measuring Roller Head",description:"Extended roller geometry designed for wool and long synthetic staples"}],officialCatalogName:"TMS25-R2D Drawframe Autoleveller Specification",relatedProducts:["card-autoleveller-tms25-r2c","gill-box-autoleveller","sliver-quality-monitor-tms25-qm2"]},{slug:"gill-box-autoleveller",name:"New Generation Gill Box Autoleveller",code:"TMS-GILLBOX",category:"Spinning Solutions",categorySlug:"spinning",tagline:"High-Performance Autolevelling Upgrade for Long-Fibre Gill Boxes (Wool & Acrylic)",badge:"Long Fibre Innovation",description:"Released specifically to address the specialized requirements of the wool, acrylic, and flax sectors, the new generation Tomsic Gill Box Autoleveller brings modern digital closed-loop regulation to existing chain gill and screw gill machines (Cognetex, Sant’Andrea Novara, NSC Schlumberger). It delivers superior long-fibre uniformity while drastically cutting electrical power draw.",primaryImage:"/assets/gillbox-autoleveller.jpg",gallery:[{url:"/assets/gillbox-autoleveller.jpg",title:"New Generation Tomsic Gill Box Autoleveller"}],features:[{title:"Modern Retrofit for Classic Gill Boxes",description:"Replaces obsolete analog electronic boards and mechanical gear differentials with state-of-the-art brushless servo drives."},{title:"Specialized Wool & Acrylic Drafting Algorithms",description:"Compensates for long-fibre inter-fiber friction dynamics and crimp behavior characteristic of worsted tops."},{title:"Reduced Maintenance & Energy Consumption",description:"Direct servo coupling eliminates mechanical belts, clutches, and oil baths, saving energy and downtime."}],applications:["Worsted wool top preparation and blending","Acrylic tow-to-top converting lines","Flax and blended long-staple drafting passages"],specifications:[{parameter:"Machine Compatibility",value:"NSC Schlumberger, Cognetex, Sant’Andrea Novara, Vouk long fibre drawframes"},{parameter:"Drive System",value:"Digital synchronous AC servo motor with energy recovery braking"},{parameter:"HMI Screen",value:"Color touch interface with intuitive graphic setup and diagnostics"}],modularOptions:[{name:"Full Electrical Cabinet Retrofit Kit",description:"Pre-wired IP54 electrical enclosure ready for rapid weekend installation"}],officialCatalogName:"Tomsic Gill Box Autoleveller Technical Announcement",relatedProducts:["drawframe-autoleveller-tms25-r2d","card-autoleveller-tms25-r2c"]},{slug:"sliver-quality-monitor-tms25-qm2",name:"Sliver Quality Monitoring TMS25-QM2",code:"TMS25-QM2",category:"Spinning Solutions",categorySlug:"spinning",tagline:"Continuous Online Sliver Count and Periodic Regularity Surveillance for Cards & Drawframes",badge:"Continuous Online Quality",description:"The TMS25-QM2 is an online quality monitoring system that mounts directly onto production drawframes and cards. Acting as an independent supervisory sentinel, it continuously checks sliver count, detects out-of-tolerance drift, identifies periodic draft waves (spectrogram peaks), and commands immediate machine stoppage before defective sliver enters spinning cans.",primaryImage:"/assets/sliver-quality-monitor.jpg",gallery:[{url:"/assets/sliver-quality-monitor.jpg",title:"TMS25-QM2 Sliver Quality Monitor Sensor"}],features:[{title:"Real-Time Spectrogram Calculation",description:"Online FFT analysis identifies gear tooth wear, eccentric rollers, and defective drive belts before yarn defects manifest."},{title:"Instant Cut-Off / Stop Motion",description:"Safeguards the mill against massive off-count production by stopping the machine the moment tolerances are breached."},{title:"Industry 4.0 Central Connectivity",description:"Exports shift production metrics and quality spectrograms to plant ERP and mill management networks."}],applications:["Card sliver online count surveillance","Drawframe delivery quality monitoring","Periodic defect prevention and predictive mechanical maintenance"],specifications:[{parameter:"Sensor Principle",value:"Precision displacement caliper or capacitive sensor"},{parameter:"Data Logging",value:"Shift reports, CV%, A%, count variation, periodic fault alerts"},{parameter:"Interface",value:"Industrial RS-485 / Modbus / Ethernet output"}],modularOptions:[{name:"Mill Central Server Software",description:"Monitors all mill cards and drawframes on a central dashboard"}],officialCatalogName:"TMS25-QM2 Quality Monitoring Datasheet",relatedProducts:["card-autoleveller-tms25-r2c","drawframe-autoleveller-tms25-r2d"]},{slug:"cotton-sugar-test-tms54",name:"Cotton Sugar Test — TMS54",code:"TMS54",category:"Sugar Solutions",categorySlug:"sugar",tagline:"Standardized 15-Minute Chemical Test Method to Determine Sugar Contamination in Raw Cotton",badge:"15-Minute Stickiness Test",description:"The Tomsic TMS54 Cotton Sugar Test is a simple, standardized, and cost-effective chemical testing methodology engineered to determine the exact sugar concentration in raw cotton bales within 15 minutes. By detecting insect honeydew (from aphids and whiteflies) in bale samples before blending, it prevents sticky cotton from causing catastrophic roller lapping and yarn breaks in carding and spinning.",primaryImage:"/assets/cotton-sugar-tms54.jpg",gallery:[{url:"/assets/cotton-sugar-tms54.jpg",title:"TMS54 Cotton Sugar Test Chemical Kit & Reagents"}],features:[{title:"Fast 15-Minute Chemical Evaluation",description:"Delivers conclusive sugar contamination levels in 15 minutes, allowing incoming cotton warehouse shipments to be screened before release to production."},{title:"Protection Against Spindle Lapping",description:"Prevents insect honeydew sugars from adhering to card clothing, drawframe drafting cots, and spinning ring travelers."},{title:"Economical Per-Sample Cost",description:"Requires minimal equipment investment and low chemical consumable cost compared to expensive thermomechanical sticky cotton instruments."},{title:"Colorimetric Scale Accuracy",description:"Provides standardized color-graded quantitative classification from non-sticky (grade 0) to severe sticky contamination."}],applications:["Raw cotton bale incoming quality inspection and sorting","Bale laydown formulation to manage average stickiness thresholds","Supplier quality dispute resolution and claim documentation","Spinning preparation optimization for sticky cotton harvests"],specifications:[{parameter:"Test Duration",value:"Approximately 15 minutes per sample"},{parameter:"Detected Compounds",value:"Entomological sugars (melezitose, trehalulose) and plant sugars (glucose, fructose)"},{parameter:"Reading Method",value:"Standardized colorimetric comparison with calibrated reference scale"},{parameter:"Recommended Sample Size",value:"Representative 5 g lint sample per bale lot"},{parameter:"Chemical Formulations",value:"Designed for use with Tomsic TMS55 Glucosil calibrated reagent"}],modularOptions:[{name:"TMS54 Laboratory Starter Kit",description:"Complete set with reaction beakers, test tubes, calibrated pipettes, and colorimetric scale"},{name:"Consumable Reagent Refill Packs",description:"Economical bulk packaging for high-volume harvest testing"}],officialCatalogName:"TOMSIC Cotton Sugar Solutions Technical Leaflet",relatedProducts:["glucosil-sugar-solution-tms55","tms60-nep-trash","easy-evenness-tester"]},{slug:"glucosil-sugar-solution-tms55",name:"Glucosil — Sugar Solution TMS55",code:"TMS55",category:"Sugar Solutions",categorySlug:"sugar",tagline:"Calibrated Chemical Reagent Formulation for Quantitative Cotton Sugar Analysis",badge:"Calibrated Reagent System",description:"Glucosil (TMS55) is Tomsic’s specialized, laboratory-calibrated chemical reagent solution formulated specifically for use in conjunction with the TMS54 Cotton Sugar Test. Manufactured in Italy under stringent chemical purity controls, Glucosil ensures repeatable colorimetric reaction kinetics, allowing laboratories to achieve consistent results regardless of environmental ambient temperatures.",primaryImage:"/assets/glucosil-tms55.png",gallery:[{url:"/assets/glucosil-tms55.png",title:"Glucosil TMS55 Calibrated Chemical Reagent Bottle"}],features:[{title:"Standardized Reaction Kinetics",description:"Formulated to provide uniform reaction rates across varying laboratory temperature ranges."},{title:"High Chemical Purity",description:"Manufactured and bottled in Italy with analytical grade purity for maximum shelf stability."},{title:"Direct Pairing with TMS54 Protocol",description:"Optimized concentration specifically calibrated against the Tomsic sugar colorimetric evaluation charts."}],applications:["Laboratory testing of sticky cotton honeydew levels","Standardized calibration of spinning mill raw material testing benches"],specifications:[{parameter:"Packaging",value:"Sealed chemical-resistant laboratory bottles"},{parameter:"Shelf Life",value:"Stable storage up to 24 months under standard laboratory conditions"},{parameter:"Compatibility",value:"Exclusively calibrated for TMS54 Cotton Sugar Test methodology"},{parameter:"Origin",value:"100% Formulated and bottled in Italy"}],modularOptions:[{name:"Multipack Reagent Carton",description:"Box of 6 bottles for spinning mill harvest testing season"}],officialCatalogName:"Glucosil Safety & Application Data Sheet",relatedProducts:["cotton-sugar-test-tms54","easy-evenness-tester"]}];function Oe({isOpen:a,onClose:o,initialProduct:t="",initialDepartment:d="Sales"}){const[r,s]=g.useState({name:"",company:"",email:"",phone:"",country:"",department:d,product:t,message:""}),[l,i]=g.useState(!1),[m,n]=g.useState(""),[x,u]=g.useState(!1);if(g.useEffect(()=>{t&&s(c=>({...c,product:t})),d&&s(c=>({...c,department:d}))},[t,d,a]),g.useEffect(()=>{const c=M=>{M.key==="Escape"&&a&&o()};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[a,o]),g.useEffect(()=>{if(a){const c=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=c}}},[a]),!a)return null;const f=c=>{c.preventDefault(),u(!0),setTimeout(()=>{u(!1),i(!0)},400)},h=()=>{i(!1),o()};return e.jsxs("div",{className:"modal-backdrop",onClick:o,role:"dialog","aria-modal":"true","aria-labelledby":"modal-title","data-lenis-prevent":!0,children:[e.jsxs("div",{className:"modal-window",onClick:c=>c.stopPropagation(),"data-lenis-prevent":!0,children:[e.jsx("button",{className:"modal-close-btn",onClick:o,"aria-label":"Close dialog",children:e.jsx(B,{size:18})}),e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{className:"header-badge-row",children:[e.jsx("span",{className:"badge-overline font-mono",children:"DEMO INTERACTION"}),e.jsx("span",{className:"badge-subtag font-mono",children:"CONCEPT PROTOTYPE"})]}),e.jsx("h3",{id:"modal-title",className:"modal-title",children:"Technical Enquiry & Quotation"}),e.jsx("p",{className:"modal-subtitle",children:"Simulate a technical inquiry to test the user flow. (Interactive demonstration)"})]}),e.jsx("div",{className:"modal-body-scrollable","data-lenis-prevent":!0,children:l?e.jsxs("div",{className:"submission-success",children:[e.jsx("div",{className:"success-icon-wrap",children:e.jsx(z,{size:40,color:"var(--color-accent)"})}),e.jsx("h3",{style:{fontSize:"1.4rem",marginTop:"0.5rem",fontFamily:"var(--font-heading)"},children:"Demo submission complete — no enquiry was sent."}),e.jsx("p",{style:{margin:"0.85rem 0 1.25rem",color:"#445766",fontSize:"0.925rem",lineHeight:"1.6"},children:"This website is an independent digital concept and demonstration prototype for Tomsic Advanced Technologies. Your form input was validated locally in your browser for demonstration purposes and has not been transmitted to Tomsic S.r.l."}),e.jsxs("div",{className:"direct-contact-box",children:[e.jsx("strong",{style:{fontSize:"0.85rem",display:"block",marginBottom:"0.35rem"},children:"Official Factory Inquiries:"}),e.jsx("p",{style:{fontSize:"0.8125rem",color:"#5C7080",lineHeight:"1.45",margin:"0 0 0.5rem"},children:"For genuine commercial or technical inquiries, please contact Tomsic S.r.l. directly via their official Italian headquarters:"}),e.jsxs("div",{style:{display:"flex",gap:"1.25rem",fontSize:"0.8125rem",color:"#141D24",flexWrap:"wrap"},children:[e.jsxs("a",{href:"tel:+390481882320",style:{color:"#141D24",textDecoration:"none",display:"inline-flex",alignItems:"center"},children:[e.jsx(I,{size:13,style:{display:"inline",marginRight:"4px"}})," +39 (0481) 882320"]}),e.jsxs("a",{href:"mailto:sales@tomsic.it",style:{color:"#141D24",textDecoration:"none",display:"inline-flex",alignItems:"center"},children:[e.jsx(O,{size:13,style:{display:"inline",marginRight:"4px"}})," sales@tomsic.it"]})]})]}),e.jsx("button",{className:"btn btn-primary",onClick:h,style:{marginTop:"1.5rem",width:"100%",justifyContent:"center"},children:"Close Demo Window"})]}):e.jsxs("form",{onSubmit:f,className:"enquiry-form",children:[e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"enquiry-name",children:"Full Name *"}),e.jsx("input",{id:"enquiry-name",type:"text",required:!0,placeholder:"e.g. Ing. Marco Rossi",value:r.name,onChange:c=>s({...r,name:c.target.value})})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"enquiry-company",children:"Company / Spinning Mill *"}),e.jsx("input",{id:"enquiry-company",type:"text",required:!0,placeholder:"e.g. Milano Yarns S.p.A.",value:r.company,onChange:c=>s({...r,company:c.target.value})})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"enquiry-email",children:"Corporate Email *"}),e.jsx("input",{id:"enquiry-email",type:"email",required:!0,placeholder:"name@company.com",value:r.email,onChange:c=>s({...r,email:c.target.value})})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"enquiry-phone",children:"Phone / WhatsApp *"}),e.jsx("input",{id:"enquiry-phone",type:"tel",required:!0,placeholder:"+39 012 345678",value:r.phone,onChange:c=>s({...r,phone:c.target.value})})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"enquiry-country",children:"Country / Mill Location *"}),e.jsx("input",{id:"enquiry-country",type:"text",required:!0,placeholder:"e.g. Italy, Turkey, India, Egypt",value:r.country,onChange:c=>s({...r,country:c.target.value})})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"enquiry-department",children:"Target Department *"}),e.jsxs("select",{id:"enquiry-department",value:r.department,onChange:c=>s({...r,department:c.target.value}),children:[e.jsx("option",{value:"Sales",children:"Sales & New Equipment Quotation"}),e.jsx("option",{value:"Service",children:"After-Sales Technical Service & Calibration"}),e.jsx("option",{value:"Spares",children:"Spare Parts & Consumables (Glucosil, Guides)"}),e.jsx("option",{value:"General",children:"General Inquiries / Management"})]})]})]}),e.jsxs("div",{className:"form-group",style:{marginTop:"1rem"},children:[e.jsx("label",{htmlFor:"enquiry-product",children:"Product of Interest"}),e.jsxs("select",{id:"enquiry-product",value:r.product,onChange:c=>s({...r,product:c.target.value}),children:[e.jsx("option",{value:"",children:"Select a product or solution category..."}),e.jsx("optgroup",{label:"Laboratory Solutions",children:j.filter(c=>c.categorySlug==="laboratory").map(c=>e.jsxs("option",{value:c.name,children:[c.name," (",c.code,")"]},c.slug))}),e.jsx("optgroup",{label:"Spinning Solutions",children:j.filter(c=>c.categorySlug==="spinning").map(c=>e.jsxs("option",{value:c.name,children:[c.name," (",c.code,")"]},c.slug))}),e.jsx("optgroup",{label:"Sugar Solutions",children:j.filter(c=>c.categorySlug==="sugar").map(c=>e.jsxs("option",{value:c.name,children:[c.name," (",c.code,")"]},c.slug))})]})]}),e.jsxs("div",{className:"form-group",style:{marginTop:"1rem"},children:[e.jsx("label",{htmlFor:"enquiry-message",children:"Technical Parameters & Application Scope *"}),e.jsx("textarea",{id:"enquiry-message",rows:3,required:!0,placeholder:"Please specify yarn count range (Ne, Nm, tex), fiber types (cotton, wool, synthetic), carding machine model to be autolevelled, or specific laboratory testing goals...",value:r.message,onChange:c=>s({...r,message:c.target.value})})]}),e.jsxs("div",{className:"form-footer",children:[e.jsxs("div",{className:"privacy-note",children:[e.jsx(L,{size:16,color:"var(--color-accent)",style:{flexShrink:0}}),e.jsx("span",{children:"Interactive demonstration prototype. Submissions are processed locally."})]}),e.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:x,children:[e.jsx(ie,{size:15}),e.jsx("span",{children:x?"Validating...":"Simulate Submission"})]})]})]})})]}),e.jsx("style",{children:`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          width: 100%;
          max-width: 100%;
          height: 100%;
          background-color: rgba(13, 19, 24, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.25rem;
          overflow-y: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }
        .modal-window {
          background-color: #FFFFFF;
          border-radius: var(--radius-sm);
          max-width: 680px;
          width: 100%;
          position: relative;
          padding: 2.25rem 2.25rem 2rem;
          box-shadow: var(--shadow-modal);
          border: 1px solid var(--border-subtle);
          animation: modalAppear 0.25s var(--ease-editorial);
          max-height: min(92vh, 840px);
          display: flex;
          flex-direction: column;
          margin: 0;
          overflow: hidden;
          box-sizing: border-box;
        }
        @keyframes modalAppear {
          from { opacity: 0; transform: scale(0.97) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .modal-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: #FAF9F6;
          border: 1px solid var(--border-hairline);
          cursor: pointer;
          color: #647887;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-xs);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast);
          z-index: 10;
        }
        .modal-close-btn:hover {
          background-color: var(--color-graphite);
          border-color: var(--color-graphite);
          color: #FFFFFF;
        }
        .modal-header {
          margin-bottom: 1.25rem;
          padding-bottom: 1.15rem;
          border-bottom: 1px solid var(--border-hairline);
          flex-shrink: 0;
          padding-right: 3rem;
          padding-top: 0.25rem;
        }
        .modal-title {
          font-size: 1.65rem;
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--color-graphite);
          margin: 0.45rem 0 0.35rem;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        .modal-subtitle {
          font-size: 0.9rem;
          color: #5C7080;
          line-height: 1.5;
          margin: 0;
        }
        .modal-body-scrollable {
          overflow-y: auto;
          overflow-x: hidden;
          padding-right: 0.5rem;
          padding-top: 0.25rem;
          flex-grow: 1;
          -webkit-overflow-scrolling: touch;
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .form-group label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-graphite);
        }
        .form-group input, .form-group select, .form-group textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 0.75rem 0.9rem;
          border: 1px solid #CFD8DE;
          border-radius: var(--radius-xs);
          font-family: var(--font-body);
          font-size: 0.9375rem;
          color: var(--color-graphite);
          background-color: #FAFAFA;
          transition: border-color var(--transition-fast), background-color var(--transition-fast);
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: var(--color-accent);
          background-color: #FFFFFF;
          outline: none;
        }
        .form-footer {
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-hairline);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .privacy-note {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.775rem;
          color: #647887;
          line-height: 1.35;
        }
        .submission-success {
          text-align: center;
          padding: 1rem 0;
        }
        .success-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: #F8F5F0;
          margin-bottom: 0.5rem;
        }
        .success-ref {
          font-size: 0.85rem;
          background-color: var(--color-warm-ivory);
          display: inline-block;
          padding: 0.4rem 1rem;
          border-radius: var(--radius-xs);
          border: 1px solid #E2DFD8;
          color: var(--color-graphite);
          margin-top: 0.5rem;
        }
        .direct-contact-box {
          background-color: #FAF9F6;
          border: 1px solid #EAE6DF;
          padding: 1rem 1.25rem;
          border-radius: var(--radius-xs);
          text-align: left;
        }
        @media (max-width: 640px) {
          .modal-backdrop {
            padding: 1.25rem 0.75rem;
            align-items: flex-start;
          }
          .modal-window {
            margin: auto 0;
            padding: 1.5rem 1.15rem 1.25rem;
            max-height: calc(100dvh - 2.5rem);
          }
          .modal-close-btn {
            top: 0.85rem;
            right: 0.85rem;
            width: 36px;
            height: 36px;
          }
          .modal-header {
            margin-bottom: 0.85rem;
            padding-bottom: 0.75rem;
            padding-right: 2.75rem;
            padding-top: 0;
          }
          .modal-title {
            font-size: 1.35rem;
            margin-top: 0.35rem;
          }
          .modal-subtitle {
            font-size: 0.8125rem;
          }
          .form-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
          .form-footer {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }
          .form-footer .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `})]})}k.registerPlugin(P);const se=g.createContext(null);function Le(){return g.useContext(se)}function qe({children:a}){const[o,t]=g.useState(null),d=g.useRef(null),r=re();return g.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const l=new ze({autoRaf:!1,smoothWheel:!0,syncTouch:!1,wheelMultiplier:.95,touchMultiplier:1.5,duration:1.15,easing:n=>Math.min(1,1.001-Math.pow(2,-10*n))});d.current=l,t(l),l.on("scroll",P.update);const i=n=>{l.raf(n*1e3)};k.ticker.add(i),k.ticker.lagSmoothing(0);const m=n=>{const x=n.target.closest('a[href^="#"]');if(!x)return;const u=x.getAttribute("href");if(!u||u==="#")return;const f=document.querySelector(u);f&&(n.preventDefault(),l.scrollTo(f,{offset:-85,duration:1.1,easing:h=>Math.min(1,1.001-Math.pow(2,-10*h))}))};return document.addEventListener("click",m),()=>{document.removeEventListener("click",m),k.ticker.remove(i),l.destroy(),d.current=null,t(null)}},[]),g.useEffect(()=>{const s=d.current;if(!s){window.scrollTo(0,0);return}if(r.hash){const l=document.querySelector(r.hash);if(l){setTimeout(()=>{s.scrollTo(l,{offset:-85,duration:.9})},80);return}}s.scrollTo(0,{immediate:!0}),P.refresh()},[r.pathname,r.hash]),e.jsx(se.Provider,{value:o,children:a})}function Ge(){const[a,o]=g.useState(!1),t=Le();g.useEffect(()=>{if(t){const s=({scroll:l})=>{o(l>450)};return t.on("scroll",s),()=>{t.off("scroll",s)}}const r=()=>{o(window.scrollY>450)};return window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r)}},[t]);const d=()=>{const r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(t){r?t.scrollTo(0,{immediate:!0}):t.scrollTo(0,{duration:1.15,easing:s=>Math.min(1,1.001-Math.pow(2,-10*s))});return}window.scrollTo({top:0,behavior:r?"auto":"smooth"})};return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:`back-to-top-btn ${a?"is-visible":""}`,onClick:d,"aria-label":"Back to top",title:"Back to top",children:e.jsx(ue,{size:20,strokeWidth:2.2})}),e.jsx("style",{children:`
        .back-to-top-btn {
          position: fixed;
          bottom: max(1.5rem, calc(env(safe-area-inset-bottom, 0px) + 1.25rem));
          right: max(1.5rem, calc(env(safe-area-inset-right, 0px) + 1.25rem));
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: var(--color-graphite, #141D24);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 16px rgba(20, 29, 36, 0.25), 0 1px 3px rgba(20, 29, 36, 0.12);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 900;
          opacity: 0;
          pointer-events: none;
          transform: translateY(12px) scale(0.92);
          transition: opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                      background-color 0.18s ease,
                      box-shadow 0.18s ease;
          touch-action: manipulation;
        }

        .back-to-top-btn.is-visible {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0) scale(1);
        }

        .back-to-top-btn:hover {
          background-color: var(--color-muted-bronze, #A48256);
          border-color: rgba(255, 255, 255, 0.35);
          box-shadow: 0 8px 24px rgba(164, 130, 86, 0.35), 0 2px 6px rgba(20, 29, 36, 0.15);
          transform: translateY(-2px) scale(1.03);
        }

        .back-to-top-btn:active {
          transform: translateY(1px) scale(0.97);
          box-shadow: 0 2px 8px rgba(20, 29, 36, 0.2);
        }

        .back-to-top-btn:focus-visible {
          outline: 2px solid var(--color-muted-bronze, #A48256);
          outline-offset: 3px;
        }

        @media (max-width: 480px) {
          .back-to-top-btn {
            width: 46px;
            height: 46px;
            bottom: max(1.15rem, calc(env(safe-area-inset-bottom, 0px) + 0.95rem));
            right: max(1.15rem, calc(env(safe-area-inset-right, 0px) + 0.95rem));
          }
          .back-to-top-btn svg {
            width: 18px;
            height: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .back-to-top-btn {
            transition: none !important;
          }
        }
      `})]})}const R=[{id:"india-itme-2026",slug:"india-itme-2026",type:"Event",title:"INDIA ITME 2026 — Tomsic Showcases Quality Control From Fibre to Yarn",date:"October 1, 2026",location:"India Exposition Mart, Greater Noida, India",image:"/assets/india-itme.png",excerpt:"Tomsic Srl exhibits at INDIA ITME 2026, presenting its complete portfolio of textile laboratory testing instruments and spinning autolevellers to the Indian sub-continent.",content:`Tomsic Srl is pleased to announce its participation at INDIA ITME 2026, one of the premier textile engineering exhibitions in Asia. 

At the event, Tomsic presents its comprehensive philosophy of "Quality Control from Fibre to Finished Yarn", highlighting:
- The flagship **easy Evenness Tester** with 24-position continuous automatic changer
- The **TensoTester3** automatic single yarn and lea strength tester with rapid load cell interchange
- The **TMS60 Nep and Trash Tester** for precise raw sliver impurity classification
- The **TMS25-R2C Card Autoleveller** and long-fibre drafting modernization kits

Visitors to the Tomsic booth will meet our Italian engineering team and our certified local Indian agent network for live demonstrations and technical consultations.`},{id:"egypt-stitch-tex-expo",slug:"egypt-stitch-tex-expo",type:"Event",title:"EGYPT STITCH & TEX EXPO — Hall 1 Stand 1A1",date:"August 31, 2026",location:"Cairo International Convention & Exhibition Centre (CICC), Cairo, Egypt",image:"/assets/egypt-expo.png",excerpt:"Tomsic Srl exhibits at Egypt Stitch & Tex Expo, connecting with spinning mills and textile leaders across Egypt, the Middle East, and North Africa.",content:`Tomsic Srl warmly invites all customers and industry professionals to visit our stand (Hall 1, Stand 1A1) at Egypt Stitch & Tex Expo in Cairo. 

Egypt represents an essential heritage market for long-staple Giza cotton spinning mills. Tomsic’s specialized testing instruments—including the **TMS54 Cotton Sugar Test** for rapid stickiness detection and the **easy Evenness Tester** with specialized fine-count settings—offer Egyptian spinning mills the precision tools necessary to maintain global premium yarn certifications.

Our technical service engineers will be available throughout the fair to discuss new testing equipment installations and retrofit autoleveller upgrades on existing carding machinery.`},{id:"welcome-tms60-nep-trash-tester",slug:"welcome-tms60-nep-trash-tester",type:"Product News",title:"Welcome to TMS60 — The Next Generation Nep & Trash Tester",date:"November 30, 2023",location:"Savogna d’Isonzo, Italy",image:"/assets/tms60-nep-trash.jpg",excerpt:"Following its celebrated world premiere at ITMA 2023 in Milan, Tomsic officially begins deliveries of the TMS60 Nep and Trash Tester for sliver quality control.",content:`Tomsic Srl officially launches commercial distribution of the new **TMS60 Nep and Trash Tester**, following an exceptional reception at ITMA 2023 in Milan.

Designed and manufactured 100% in Italy at our Savogna d’Isonzo facilities, the TMS60 provides spinning mills with unmatched diagnostic visibility into raw material cleanliness. By rapidly categorizing neps, seed-coat fragments, botanical trash, and dust particles in card and drawframe slivers, spinning managers can optimize opening rollers, card clothing sharpness, and revolving flats settings to achieve maximum yarn purity while minimizing fibre waste.`},{id:"new-tomsic-gill-box-autoleveller",slug:"new-tomsic-gill-box-autoleveller",type:"Product News",title:"News in the Long Fiber Process: New Tomsic Gill Box Autoleveller",date:"May 27, 2021",location:"Savogna d’Isonzo, Italy",image:"/assets/gillbox-autoleveller.jpg",excerpt:"The new generation of Tomsic Gill Box autolevellers is equipped with advanced servo-drive kinematics, modern color touch HMI, and specialized algorithms for wool and acrylic tops.",content:`The long fiber process requires unique drafting mechanics to accommodate natural crimp, variable staple lengths, and inter-fiber friction. The new generation of Tomsic Gill Box Autolevellers is engineered specifically for wool, blended tops, and synthetic long fibers.

Equipped with direct-drive digital brushless servo actuators, high-resolution measuring heads, and user-friendly touch screens, the new autoleveller replaces complex mechanical gear differentials on classic gill boxes (including Cognetex and NSC Schlumberger). The result is a dramatic improvement in sliver regularity, lower power consumption, and virtually zero mechanical drive maintenance.`}],X={regions:[{name:"Europe & Mediterranean",countries:[{name:"Italy",role:"Global Headquarters & Direct Engineering Support",city:"Savogna d'Isonzo (GO)"},{name:"Turkey",role:"Certified Agent Network & Technical Support",city:"Istanbul / Bursa / Kahramanmaraş"},{name:"Germany",role:"Technical Representative",city:"Nordrhein-Westfalen"},{name:"Spain & Portugal",role:"Regional Sales & Service Agency",city:"Barcelona / Porto"},{name:"Greece",role:"Sales & Spares Agency",city:"Athens / Thessaloniki"}]},{name:"Middle East & North Africa (MENA)",countries:[{name:"Egypt",role:"Primary Textile Agency (Exhibiting at Egy Stitch & Tex)",city:"Cairo / Alexandria"},{name:"Morocco & Tunisia",role:"Regional Agent & Technical Assistance",city:"Casablanca / Tunis"},{name:"Uzbekistan & Central Asia",role:"Representative Office for Cotton Spinning Mills",city:"Tashkent"}]},{name:"Asia-Pacific & Indian Subcontinent",countries:[{name:"India",role:"Authorized Sales, Technical Support & Calibration Services",city:"Coimbatore / Mumbai / Ahmedabad"},{name:"Pakistan",role:"Sales & Factory Certified Maintenance Center",city:"Karachi / Lahore / Faisalabad"},{name:"Bangladesh",role:"Textile Metrology Agent & Spare Parts Hub",city:"Dhaka / Chittagong"},{name:"China",role:"Regional Representative & Support Service",city:"Shanghai / Qingdao"},{name:"Vietnam & Indonesia",role:"Sales & Service Partner",city:"Ho Chi Minh City / Jakarta"}]},{name:"The Americas",countries:[{name:"United States",role:"Technical Sales Representative & Spares Distribution",city:"North Carolina / Georgia"},{name:"Brazil",role:"Certified South American Agency",city:"São Paulo / Santa Catarina"},{name:"Argentina",role:"Local Sales & Support Agency (Simatex Exhibitor)",city:"Buenos Aires"},{name:"Mexico",role:"Technical Sales Agency",city:"Puebla / Mexico City"},{name:"Peru & Colombia",role:"Andean Regional Representation",city:"Lima / Medellín"}]}],supportDepartments:[{title:"Commercial & Project Planning",email:"sales@tomsic.it",phone:"+39 (0481) 882320",description:"Consultation on new laboratory setups, machinery upgrades, project sizing, and formal technical quotation."},{title:"Technical After-Sales & Calibration",email:"service@tomsic.it",phone:"+39 (0481) 882032",description:"Commissioning, operator training, remote diagnostics, periodic calibration certification, and troubleshooting."},{title:"Spare Parts & Consumables",email:"spares@tomsic.it",phone:"+39 (0481) 882320",description:"Original factory replacement sensors, ceramic yarn guides, Glucosil reagents, drive belts, and load cells."},{title:"General Administration & Legal",email:"tomsic@tomsic.it",pec:"tomsicsrl@cgn.legalmail.it",phone:"+39 (0481) 882320",description:"Corporate affairs, logistics, import/export compliance, and certified administrative inquiries."}]};k.registerPlugin(P);function Z({onOpenEnquiry:a}){const o=g.useRef(null),[t,d]=g.useState("stage-yarn"),[r,s]=g.useState("all"),l=[{id:"stage-raw",number:"01",name:"Raw Cotton & Stickiness",subtitle:"Entomological Honeydew Detection",image:"/assets/cotton-sugar-tms54.jpg",problem:"Insect honeydew sugars liquefy under mill humidity, sticking to card clothing, rubber cots, and ring travelers, causing catastrophic yarn breakage and downtime.",solution:"The TMS54 chemical colorimetric test detects and grades stickiness in 15 minutes prior to bale opening, allowing mills to blend or neutralize sticky cotton before it enters the blowroom.",instruments:["cotton-sugar-test-tms54","glucosil-sugar-solution-tms55"]},{id:"stage-card",number:"02",name:"Carding Preparation & Impurities",subtitle:"Sliver Regulation & Nep Diagnostics",image:"/assets/tms60-nep-trash.jpg",problem:"Variations in carding web density and undetected trash or neps carry forward into drawframes, permanently degrading yarn evenness and surface appearance.",solution:"TMS25-R2C card autolevelling reduces 1-meter sliver count CV% by up to 70%, while TMS60 optical sensors classify neps, seed-coat fragments, and dust in real time.",instruments:["card-autoleveller-tms25-r2c","tms60-nep-trash"]},{id:"stage-draw",number:"03",name:"Drafting & Drawing Regulation",subtitle:"High-Speed Kinematic Autolevelling",image:"/assets/card-autoleveller-diagram.png",problem:"High delivery speeds up to 1,000 m/min amplify drafting errors. Gear differential systems wear out and create long-period periodic mass variations.",solution:"Direct digital servo autolevelling for cotton drawframes and wool/acrylic gill boxes replaces mechanical differentials with high-response digital kinematic control.",instruments:["drawframe-autoleveller-tms25-r2d","gill-box-autoleveller","sliver-quality-monitor-tms25-qm2"]},{id:"stage-yarn",number:"04",name:"Finished Yarn Metrology",subtitle:"Evenness, Tensile Strength & Count",image:"/assets/easy-evenness-tester.jpg",problem:"Quality certifications require rigorous compliance with international standards (ISO 2062, ASTM D2256) without proprietary testing bench vendor lock-in.",solution:"Comprehensive laboratory instruments operating on standard PC platforms with 3-click test simplicity, automatic inter-machine database synchronization, and decades of reliable service.",instruments:["easy-evenness-tester","tensotester-3","easyf-filament","tms45-count-analyser"]}],i=l.find(n=>n.id===t)||l[3],m=j.filter(n=>i.instruments.includes(n.slug));return r==="all"?j.slice(0,6):j.filter(n=>n.categorySlug===r),g.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const x=k.context(()=>{k.timeline({defaults:{ease:"power3.out"}}).fromTo(".hero-dateline",{opacity:0,y:12},{opacity:1,y:0,duration:.6,delay:.1}).fromTo(".hero-headline",{opacity:0,y:24},{opacity:1,y:0,duration:.8},"-=0.4").fromTo(".hero-lead",{opacity:0,y:16},{opacity:1,y:0,duration:.7},"-=0.5").fromTo(".hero-cta-row",{opacity:0,y:12},{opacity:1,y:0,duration:.6},"-=0.45").fromTo(".hero-image-canvas",{opacity:0,y:30},{opacity:1,y:0,duration:1,ease:"power3.out"},.2),k.fromTo(".statement-text",{opacity:0,y:24},{opacity:1,y:0,duration:.85,ease:"power3.out",scrollTrigger:{trigger:".statement-section",start:"top 82%",toggleActions:"play none none none"}}),k.fromTo(".flagship-feature-grid",{opacity:0,y:28},{opacity:1,y:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".flagship-section",start:"top 80%",toggleActions:"play none none none"}})},o);return()=>x.revert()},[]),e.jsxs("div",{className:"homepage-editorial",ref:o,children:[e.jsx("section",{className:"hero-editorial bg-grid-blueprint",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"hero-header-block",children:[e.jsx("span",{className:"hero-dateline font-mono",children:"SAVOGNA D’ISONZO (GO), ITALY · EST. 1956 · ACIMIT MEMBER"}),e.jsx("h1",{className:"hero-headline",children:"Seven Decades of Precision Textile Metrology."}),e.jsx("p",{className:"hero-lead",children:"Tomsic designs and manufactures high-precision textile laboratory testing instruments, spinning autolevellers, and raw cotton sugar diagnostics. 100% engineered in Savogna d'Isonzo on open, non-proprietary architecture."}),e.jsxs("div",{className:"hero-cta-row",children:[e.jsxs(p,{to:"/solutions",className:"btn btn-primary",children:[e.jsx("span",{children:"Explore Engineering Solutions"}),e.jsx(T,{size:15})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>a&&a("","Sales"),children:[e.jsx("span",{children:"Request Factory Consultation"}),e.jsx(v,{size:15})]})]})]}),e.jsxs("div",{className:"hero-image-canvas",children:[e.jsx("div",{className:"hero-image-wrap",children:e.jsx("img",{src:"/assets/hero-machine.webp",alt:"Tomsic TMS60 Nep and Trash Testing Metrology Instrument",className:"hero-machinery-img",loading:"eager"})}),e.jsxs("div",{className:"hero-image-caption font-mono",children:[e.jsx("span",{children:"TMS60 NEP & TRASH METROLOGY SYSTEM"}),e.jsx("span",{className:"caption-dot",children:"/"}),e.jsx("span",{children:"100% IN-HOUSE ITALIAN SYNTHESIS"}),e.jsx("span",{className:"caption-dot",children:"/"}),e.jsxs(p,{to:"/products/tms60-nep-trash",className:"caption-link",children:["View Datasheet ",e.jsx(v,{size:12})]})]})]})]})}),e.jsx("section",{className:"statement-section border-top-hairline",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"statement-grid",children:[e.jsxs("div",{className:"statement-left",children:[e.jsx("span",{className:"badge-overline accent",children:"Core engineering principles"}),e.jsx("blockquote",{className:"statement-quote",children:'"We reject proprietary obsolescence. Every electronic board, mechanical assembly, and measurement software algorithm is engineered and synthesized under one Italian roof."'})]}),e.jsxs("div",{className:"statement-right",children:[e.jsx("p",{className:"statement-desc",children:"Founded in 1956 by Mr. Carlo Tomsic, our enterprise began with electronic systems and control engineering for legendary drawframe specialist VOUK. Over four decades of specialized collaboration, we accumulated singular mastery in autolevelling kinematics and textile metrology."}),e.jsx("p",{className:"statement-desc",children:"Today, managed by the second generation—Mr. Silvan Tomsic (President) and Mr. Ladi Tomsic (Vice-President)—we operate from our modern complex in Savogna d'Isonzo. Every Tomsic system runs on standard commercial computer hardware and open Windows platforms, ensuring decades of reliable service without forced proprietary software fees."}),e.jsxs("div",{className:"statement-meta-row font-mono",children:[e.jsxs("div",{className:"meta-fact",children:[e.jsx("span",{className:"fact-num",children:"1956"}),e.jsx("span",{className:"fact-label",children:"Founding Year · Gorizia"})]}),e.jsxs("div",{className:"meta-fact",children:[e.jsx("span",{className:"fact-num",children:"2003"}),e.jsx("span",{className:"fact-label",children:"Savogna d’Isonzo Expansion"})]}),e.jsxs("div",{className:"meta-fact",children:[e.jsx("span",{className:"fact-num",children:"30+"}),e.jsx("span",{className:"fact-label",children:"Export Countries Supplied"})]})]})]})]}),e.jsxs("div",{className:"statement-diptych",children:[e.jsxs("div",{className:"diptych-card",children:[e.jsx("img",{src:"/assets/tomsic-facility.jpg",alt:"Tomsic industrial engineering plant in Savogna d'Isonzo (GO), Italy",className:"diptych-img",loading:"lazy"}),e.jsx("div",{className:"diptych-caption font-mono",children:e.jsx("span",{children:"HEADQUARTERS & MANUFACTURING COMPLEX · SAVOGNA D’ISONZO (GO), ITALY"})})]}),e.jsxs("div",{className:"diptych-card",children:[e.jsx("img",{src:"/assets/italian-heritage.jpg",alt:"Italian Spun Yarn Heritage cones",className:"diptych-img",loading:"lazy"}),e.jsx("div",{className:"diptych-caption font-mono",children:e.jsx("span",{children:"SEVEN DECADES OF TEXTILE METROLOGY PARTNERSHIP"})})]})]})]})}),e.jsx("section",{className:"section bg-white border-top-hairline",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header-editorial",children:[e.jsx("span",{className:"badge-overline",children:"Process-oriented metrology"}),e.jsx("h2",{className:"section-title-editorial",children:"Quality Control from Raw Fibre to Spun Yarn."}),e.jsx("p",{className:"section-lead-editorial",children:"Each production stage requires dedicated physics, sensors, and regulation. Select a phase below to inspect the metrological challenge and Tomsic's engineering solution."})]}),e.jsx("div",{className:"process-pipeline-nav",children:l.map(n=>e.jsxs("button",{type:"button",className:`pipeline-nav-btn ${t===n.id?"active":""}`,onClick:()=>d(n.id),children:[e.jsx("span",{className:"btn-stage-num font-mono",children:n.number}),e.jsx("span",{className:"btn-stage-name",children:n.name})]},n.id))}),e.jsxs("div",{className:"stage-editorial-spread",children:[e.jsxs("div",{className:"stage-text-block",children:[e.jsxs("span",{className:"stage-overline font-mono",children:["PHASE ",i.number," · ",i.subtitle]}),e.jsx("h3",{className:"stage-heading",children:i.name}),e.jsxs("div",{className:"stage-editorial-comparison",children:[e.jsxs("div",{className:"comparison-col",children:[e.jsx("h4",{className:"comparison-title font-mono",children:"THE METROLOGICAL RISK"}),e.jsx("p",{className:"comparison-text",children:i.problem})]}),e.jsxs("div",{className:"comparison-col",children:[e.jsx("h4",{className:"comparison-title font-mono",children:"THE TOMSIC SYNTHESIS"}),e.jsx("p",{className:"comparison-text",children:i.solution})]})]}),e.jsxs("div",{className:"stage-instruments-group",children:[e.jsxs("span",{className:"instruments-label font-mono",children:["DEDICATED SYSTEMS (",m.length,")"]}),e.jsx("div",{className:"stage-instruments-grid",children:m.map(n=>e.jsxs(p,{to:`/products/${n.slug}`,className:"stage-product-card",children:[e.jsx("div",{className:"prod-thumb",children:e.jsx("img",{src:n.primaryImage,alt:n.name})}),e.jsxs("div",{className:"prod-details",children:[e.jsx("span",{className:"prod-code font-mono",children:n.code}),e.jsx("strong",{className:"prod-name",children:n.name})]}),e.jsx(v,{size:15,className:"prod-arrow"})]},n.slug))})]})]}),e.jsx("div",{className:"stage-image-block",children:e.jsx("img",{src:i.image,alt:i.name,className:"stage-large-img",loading:"lazy"})})]})]})}),e.jsx("section",{className:"section bg-warm-ivory border-top-hairline flagship-section",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"flagship-feature-grid",children:[e.jsxs("div",{className:"flagship-image-col",children:[e.jsx("img",{src:"/assets/easy-evenness-tester.jpg",alt:"Tomsic easy Evenness Tester System",className:"flagship-img",loading:"lazy"}),e.jsxs("div",{className:"flagship-img-meta font-mono",children:[e.jsx("span",{children:"DUAL CAPACITIVE & OPTICAL METROLOGY"}),e.jsx("span",{children:"24-POSITION AUTOCHANGER"})]})]}),e.jsxs("div",{className:"flagship-content-col",children:[e.jsx("span",{className:"badge-overline accent",children:"Flagship testing system"}),e.jsx("h2",{className:"flagship-headline",children:"“easy” Evenness Tester"}),e.jsx("p",{className:"flagship-tagline",children:"World-standard mass variation and spectrogram testing for yarn, roving, and sliver."}),e.jsx("p",{className:"flagship-body",children:'Designed to replace cumbersome, proprietary testing benches with an extractable modular architecture, the "easy" Evenness Tester operates on standard commercial PCs using Microsoft .NET technology. Tested and approved by world-renowned textile manufacturers including Ermenegildo Zegna and Botto Giuseppe.'}),e.jsxs("div",{className:"flagship-specs-matrix",children:[e.jsxs("div",{className:"flagship-spec-cell",children:[e.jsx("strong",{className:"spec-big font-mono",children:"3 Clicks"}),e.jsx("span",{className:"spec-sub",children:"Complete test protocol execution"})]}),e.jsxs("div",{className:"flagship-spec-cell",children:[e.jsx("strong",{className:"spec-big font-mono",children:"400 m/min"}),e.jsx("span",{className:"spec-sub",children:"Continuous precision testing speed"})]}),e.jsxs("div",{className:"flagship-spec-cell",children:[e.jsx("strong",{className:"spec-big font-mono",children:"Link Job"}),e.jsx("span",{className:"spec-sub",children:"Automatic count sync with TMS45"})]}),e.jsxs("div",{className:"flagship-spec-cell",children:[e.jsx("strong",{className:"spec-big font-mono",children:"25 Years"}),e.jsx("span",{className:"spec-sub",children:"Relational database history & Excel export"})]})]}),e.jsxs("div",{className:"flagship-actions-row",children:[e.jsxs(p,{to:"/products/easy-evenness-tester",className:"btn btn-primary",children:[e.jsx("span",{children:"Complete Technical Specifications"}),e.jsx(T,{size:15})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>a&&a("easy Evenness Tester","Sales"),children:[e.jsx("span",{children:"Request Factory Quotation"}),e.jsx(v,{size:15})]})]})]})]})})}),e.jsx("section",{className:"section bg-white border-top-hairline",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header-editorial",children:[e.jsx("span",{className:"badge-overline",children:"Manufacturing divisions"}),e.jsx("h2",{className:"section-title-editorial",children:"Three Pillars of Industrial Competence."}),e.jsx("p",{className:"section-lead-editorial",children:"Each division provides dedicated instrumentation engineered for specific mill operations."})]}),e.jsxs("div",{className:"divisions-editorial-grid",children:[e.jsxs("article",{className:"division-editorial-card",children:[e.jsx("div",{className:"div-media",children:e.jsx("img",{src:"/assets/tensotester3-overview.jpg",alt:"Laboratory Testing Solutions",className:"div-img",loading:"lazy"})}),e.jsxs("div",{className:"div-body",children:[e.jsx("span",{className:"div-num font-mono",children:"01"}),e.jsx("h3",{className:"div-title",children:"Laboratory Testing Solutions"}),e.jsx("p",{className:"div-desc",children:"Evenness testers, tensile strength meters, and count analyzers compatible with ISO 2062 and ASTM standards. Operates on standard Windows PC platforms."}),e.jsxs(p,{to:"/solutions/laboratory",className:"div-link",children:[e.jsx("span",{children:"Explore Laboratory Division"}),e.jsx(T,{size:14})]})]})]}),e.jsxs("article",{className:"division-editorial-card",children:[e.jsx("div",{className:"div-media",children:e.jsx("img",{src:"/assets/card-autoleveller-tms25.jpg",alt:"Spinning Mill Automation",className:"div-img",loading:"lazy"})}),e.jsxs("div",{className:"div-body",children:[e.jsx("span",{className:"div-num font-mono",children:"02"}),e.jsx("h3",{className:"div-title",children:"Spinning Automation"}),e.jsx("p",{className:"div-desc",children:"Closed-loop digital drafting and autoleveller retrofit kits for carding machines, cotton drawframes, and wool/acrylic gill boxes."}),e.jsxs(p,{to:"/solutions/spinning",className:"div-link",children:[e.jsx("span",{children:"Explore Spinning Division"}),e.jsx(T,{size:14})]})]})]}),e.jsxs("article",{className:"division-editorial-card",children:[e.jsx("div",{className:"div-media",children:e.jsx("img",{src:"/assets/cotton-sugar-tms54.jpg",alt:"Sugar Contamination Diagnostics",className:"div-img",loading:"lazy"})}),e.jsxs("div",{className:"div-body",children:[e.jsx("span",{className:"div-num font-mono",children:"03"}),e.jsx("h3",{className:"div-title",children:"Sugar Contamination Diagnostics"}),e.jsx("p",{className:"div-desc",children:"Chemical colorimetric testing instruments and Glucosil neutralizing solutions to detect and treat sticky honeydew cotton in 15 minutes."}),e.jsxs(p,{to:"/solutions/sugar",className:"div-link",children:[e.jsx("span",{children:"Explore Sugar Division"}),e.jsx(T,{size:14})]})]})]})]})]})}),e.jsx("section",{className:"section bg-graphite text-white border-top-hairline bg-grid-blueprint-dark",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"philosophy-layout",children:[e.jsxs("div",{className:"philosophy-header",children:[e.jsx("span",{className:"badge-overline dark",children:"Open engineering standard"}),e.jsx("h2",{className:"philosophy-headline",children:"Rejecting Planned Obsolescence in Industrial Metrology."}),e.jsx("p",{className:"philosophy-lead",children:"Most testing instrument vendors lock spinning mills into proprietary bus architectures and expensive recurring software contracts. We engineer our systems on standard commercial PC hardware with open Microsoft .NET architecture. If a computer component fails after 15 years, it can be replaced locally—without proprietary technician dependencies."})]}),e.jsxs("div",{className:"philosophy-pillars-row",children:[e.jsxs("div",{className:"phil-pillar",children:[e.jsx("span",{className:"phil-num font-mono",children:"01"}),e.jsx("h4",{className:"phil-title",children:"Open Architecture"}),e.jsx("p",{className:"phil-desc",children:"Standard industrial PC motherboards and commercial Windows platforms ensure components are serviceable anywhere on earth."})]}),e.jsxs("div",{className:"phil-pillar",children:[e.jsx("span",{className:"phil-num font-mono",children:"02"}),e.jsx("h4",{className:"phil-title",children:"Link Job Synchronization"}),e.jsx("p",{className:"phil-desc",children:"Testing benches share a unified relational SQL database, eliminating transcription errors across 25 years of stored mill history."})]}),e.jsxs("div",{className:"phil-pillar",children:[e.jsx("span",{className:"phil-num font-mono",children:"03"}),e.jsx("h4",{className:"phil-title",children:"Direct Factory Accountability"}),e.jsx("p",{className:"phil-desc",children:"Direct access to our engineering team in Savogna d'Isonzo. No bureaucratic call centers or distributor delays."})]})]})]})})}),e.jsx("section",{className:"section bg-white border-top-hairline",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"section-header-editorial",children:e.jsxs("div",{className:"flex justify-between items-end flex-wrap gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"badge-overline",children:"Dispatches and exhibitions"}),e.jsx("h2",{className:"section-title-editorial",children:"News & International Exhibitions"}),e.jsx("p",{className:"section-lead-editorial",children:"Meet Tomsic engineers at premier international textile technology events."})]}),e.jsxs(p,{to:"/news",className:"editorial-action-link",children:[e.jsx("span",{children:"All Announcements & Events"}),e.jsx(v,{size:15})]})]})}),e.jsx("div",{className:"news-editorial-grid",children:R.slice(0,3).map(n=>e.jsxs("article",{className:"news-editorial-card",children:[e.jsxs("div",{className:"news-img-box",children:[e.jsx("img",{src:n.image,alt:n.title,className:"news-card-img",loading:"lazy"}),e.jsx("span",{className:"news-type-tag font-mono",children:n.type})]}),e.jsxs("div",{className:"news-body-box",children:[e.jsxs("div",{className:"news-meta-line font-mono",children:[e.jsx("span",{children:n.date}),e.jsx("span",{children:"•"}),e.jsx("span",{children:n.location})]}),e.jsx("h3",{className:"news-card-title",children:e.jsx(p,{to:"/news",children:n.title})}),e.jsx("p",{className:"news-card-excerpt",children:n.excerpt}),e.jsxs(p,{to:"/news",className:"news-card-cta",children:[e.jsx("span",{children:"Read Full Dispatch"}),e.jsx(T,{size:13})]})]})]},n.slug))})]})}),e.jsx("section",{className:"section bg-warm-ivory border-top-hairline",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"enquiry-editorial-box",children:[e.jsxs("div",{className:"enquiry-text-col",children:[e.jsx("span",{className:"badge-overline accent",children:"Factory consultation"}),e.jsx("h2",{className:"enquiry-headline",children:"Connect Directly with Factory Engineers in Savogna d'Isonzo."}),e.jsx("p",{className:"enquiry-lead",children:"Whether you are equipping a modern textile testing laboratory, modernizing carding autolevellers, or addressing sticky cotton challenges—our Italian engineering team is ready to assist."}),e.jsxs("div",{className:"enquiry-actions-group",children:[e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>a&&a("","Sales"),children:[e.jsx("span",{children:"Request Factory Quotation"}),e.jsx(v,{size:15})]}),e.jsx(p,{to:"/contact",className:"btn btn-secondary",children:e.jsx("span",{children:"Worldwide Agent Directory"})})]})]}),e.jsxs("div",{className:"enquiry-contacts-col font-mono",children:[e.jsxs("div",{className:"contact-item",children:[e.jsx("span",{className:"contact-label",children:"COMMERCIAL DESK"}),e.jsx("a",{href:"mailto:sales@tomsic.it",className:"contact-link",children:"sales@tomsic.it"})]}),e.jsxs("div",{className:"contact-item",children:[e.jsx("span",{className:"contact-label",children:"TECHNICAL AFTER-SALES"}),e.jsx("a",{href:"mailto:service@tomsic.it",className:"contact-link",children:"service@tomsic.it"})]}),e.jsxs("div",{className:"contact-item",children:[e.jsx("span",{className:"contact-label",children:"FACTORY SWITCHBOARD"}),e.jsx("a",{href:"tel:+390481882320",className:"contact-link tabular-nums",children:"+39 (0481) 882320"})]}),e.jsxs("div",{className:"contact-item",children:[e.jsx("span",{className:"contact-label",children:"FACILITY LOCATION"}),e.jsx("span",{className:"contact-text",children:"via Malnisce, 3/B · 34070 Savogna d’Isonzo (GO), Italy"})]})]})]})})}),e.jsx("style",{children:`
        .homepage-editorial {
          width: 100%;
          overflow-x: hidden;
        }

        /* 1. HERO EDITORIAL */
        .hero-editorial {
          padding-top: 4.5rem;
          padding-bottom: 5rem;
          background-color: var(--color-warm-ivory);
        }
        .hero-header-block {
          max-width: 920px;
          margin-bottom: 3.5rem;
        }
        .hero-dateline {
          display: block;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          color: var(--color-steel-blue);
          margin-bottom: 1.25rem;
        }
        .hero-headline {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5.5vw, 4.5rem);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--color-graphite);
          margin-bottom: 1.5rem;
          text-wrap: balance;
        }
        .hero-lead {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          line-height: 1.6;
          color: #3C4A54;
          max-width: 68ch;
          margin-bottom: 2.25rem;
        }
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        /* Machinery Hero Canvas */
        .hero-image-canvas {
          margin-top: 2rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          padding: 2.5rem;
          box-shadow: var(--shadow-subtle);
        }
        .hero-image-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 380px;
          max-height: 520px;
          padding: 1.5rem;
        }
        .hero-machinery-img {
          max-width: 100%;
          max-height: 480px;
          height: auto;
          object-fit: contain;
        }
        .hero-image-caption {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          margin-top: 1rem;
          border-top: 1px solid var(--border-hairline);
          font-size: 0.75rem;
          color: var(--color-steel-blue);
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .caption-dot {
          color: var(--border-subtle);
        }
        .caption-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--color-accent);
          font-weight: 600;
        }

        /* 2. STATEMENT SECTION */
        .statement-section {
          padding-top: 6rem;
          padding-bottom: 6rem;
          background-color: var(--color-white);
        }
        .statement-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 4.5rem;
          align-items: start;
          margin-bottom: 4.5rem;
        }
        .statement-quote {
          font-family: var(--font-heading);
          font-size: clamp(1.85rem, 3.2vw, 2.75rem);
          line-height: 1.18;
          letter-spacing: -0.025em;
          color: var(--color-graphite);
          font-weight: 700;
          text-wrap: balance;
        }
        .statement-desc {
          font-size: 1.05rem;
          line-height: 1.68;
          color: #4A5863;
          margin-bottom: 1.25rem;
        }
        .statement-meta-row {
          display: flex;
          gap: 2.5rem;
          padding-top: 1.5rem;
          margin-top: 1.5rem;
          border-top: 1px solid var(--border-hairline);
          flex-wrap: wrap;
        }
        .meta-fact {
          display: flex;
          flex-direction: column;
        }
        .fact-num {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-graphite);
          line-height: 1.1;
        }
        .fact-label {
          font-size: 0.75rem;
          color: var(--color-steel-blue);
          margin-top: 0.25rem;
        }

        .statement-diptych {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
        }
        .diptych-card {
          background-color: var(--color-warm-ivory);
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-xs);
          overflow: hidden;
        }
        .diptych-img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          display: block;
        }
        .diptych-caption {
          padding: 1rem 1.25rem;
          font-size: 0.725rem;
          color: var(--color-steel-blue);
          background-color: #FFFFFF;
          border-top: 1px solid var(--border-hairline);
        }

        /* 3. PROCESS PIPELINE SECTION */
        .section-header-editorial {
          margin-bottom: 3.5rem;
          max-width: 840px;
        }
        .section-title-editorial {
          font-size: clamp(2rem, 3.5vw, 2.85rem);
          font-weight: 700;
          color: var(--color-graphite);
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin: 0.5rem 0 0.85rem;
          text-wrap: balance;
        }
        .section-lead-editorial {
          font-size: 1.125rem;
          color: #4D606E;
          line-height: 1.6;
        }

        .process-pipeline-nav {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-xs);
          background-color: var(--color-warm-ivory);
          margin-bottom: 2.5rem;
          overflow: hidden;
        }
        .pipeline-nav-btn {
          padding: 1.25rem 1.5rem;
          text-align: left;
          background: transparent;
          border: none;
          border-right: 1px solid var(--border-hairline);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          transition: background-color var(--transition-fast);
        }
        .pipeline-nav-btn:last-child {
          border-right: none;
        }
        .pipeline-nav-btn:hover {
          background-color: rgba(255, 255, 255, 0.7);
        }
        .pipeline-nav-btn.active {
          background-color: #FFFFFF;
          box-shadow: inset 0 3px 0 var(--color-accent);
        }
        .btn-stage-num {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-steel-blue);
        }
        .pipeline-nav-btn.active .btn-stage-num {
          color: var(--color-accent);
        }
        .btn-stage-name {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-graphite);
          line-height: 1.3;
        }

        .stage-editorial-spread {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3.5rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          padding: 3rem;
          align-items: center;
        }
        .stage-overline {
          font-size: 0.75rem;
          color: var(--color-accent);
          letter-spacing: 0.06em;
          display: block;
          margin-bottom: 0.5rem;
        }
        .stage-heading {
          font-size: 1.85rem;
          font-weight: 700;
          color: var(--color-graphite);
          margin-bottom: 1.75rem;
        }
        .stage-editorial-comparison {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border-hairline);
          margin-bottom: 2rem;
        }
        .comparison-title {
          font-size: 0.725rem;
          letter-spacing: 0.08em;
          color: var(--color-steel-blue);
          margin-bottom: 0.5rem;
        }
        .comparison-text {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #3C4A54;
        }
        .instruments-label {
          font-size: 0.725rem;
          color: var(--color-steel-blue);
          display: block;
          margin-bottom: 0.85rem;
        }
        .stage-instruments-grid {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .stage-product-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          background-color: var(--color-warm-ivory);
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-xs);
          transition: border-color var(--transition-fast), background-color var(--transition-fast);
        }
        .stage-product-card:hover {
          background-color: #FFFFFF;
          border-color: var(--color-accent);
        }
        .prod-thumb {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #FFFFFF;
          border-radius: var(--radius-xs);
          padding: 4px;
        }
        .prod-thumb img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .prod-details {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .prod-code {
          font-size: 0.6875rem;
          color: var(--color-steel-blue);
        }
        .prod-name {
          font-size: 0.9375rem;
          color: var(--color-graphite);
        }
        .prod-arrow {
          color: var(--color-steel-blue);
          transition: transform var(--transition-fast), color var(--transition-fast);
        }
        .stage-product-card:hover .prod-arrow {
          color: var(--color-accent);
          transform: translate(2px, -2px);
        }
        .stage-image-block {
          background-color: var(--color-warm-ivory);
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-xs);
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 380px;
        }
        .stage-large-img {
          max-width: 100%;
          max-height: 360px;
          object-fit: contain;
        }

        /* 4. FLAGSHIP SECTION */
        .flagship-feature-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 4.5rem;
          align-items: center;
        }
        .flagship-image-col {
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          padding: 2.5rem;
          box-shadow: var(--shadow-subtle);
        }
        .flagship-img {
          width: 100%;
          height: auto;
          max-height: 460px;
          object-fit: contain;
          display: block;
        }
        .flagship-img-meta {
          display: flex;
          justify-content: space-between;
          padding-top: 1.25rem;
          margin-top: 1.25rem;
          border-top: 1px solid var(--border-hairline);
          font-size: 0.725rem;
          color: var(--color-steel-blue);
        }
        .flagship-headline {
          font-size: clamp(2.25rem, 3.8vw, 3.25rem);
          font-weight: 700;
          color: var(--color-graphite);
          line-height: 1.1;
          margin: 0.5rem 0 0.85rem;
          letter-spacing: -0.025em;
        }
        .flagship-tagline {
          font-size: 1.15rem;
          line-height: 1.5;
          color: #2D3A44;
          font-weight: 550;
          margin-bottom: 1.25rem;
        }
        .flagship-body {
          font-size: 0.975rem;
          line-height: 1.65;
          color: #4D606E;
          margin-bottom: 2rem;
        }
        .flagship-specs-matrix {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          padding-top: 1.75rem;
          margin-top: 1.75rem;
          border-top: 1px solid var(--border-hairline);
          margin-bottom: 2.25rem;
        }
        .spec-big {
          display: block;
          font-size: 1.5rem;
          color: var(--color-graphite);
          line-height: 1.1;
        }
        .spec-sub {
          font-size: 0.8125rem;
          color: var(--color-steel-blue);
          line-height: 1.4;
          margin-top: 0.25rem;
          display: block;
        }
        .flagship-actions-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        /* 5. DIVISIONS SECTION */
        .divisions-editorial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        .division-editorial-card {
          background-color: var(--color-warm-ivory);
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color var(--transition-fast), transform var(--transition-fast);
        }
        .division-editorial-card:hover {
          border-color: var(--color-accent);
          transform: translateY(-2px);
        }
        .div-media {
          height: 240px;
          background-color: #FFFFFF;
          border-bottom: 1px solid var(--border-hairline);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .div-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .div-body {
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .div-num {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-accent);
          margin-bottom: 0.5rem;
        }
        .div-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-graphite);
          margin-bottom: 0.85rem;
          line-height: 1.25;
        }
        .div-desc {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #4D606E;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .div-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-graphite);
          transition: color var(--transition-fast);
        }
        .division-editorial-card:hover .div-link {
          color: var(--color-accent);
        }

        /* 6. PHILOSOPHY SECTION */
        .philosophy-layout {
          max-width: 1080px;
        }
        .philosophy-headline {
          font-size: clamp(2.25rem, 4vw, 3.5rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.025em;
          margin: 0.75rem 0 1.5rem;
          color: #FFFFFF;
          text-wrap: balance;
        }
        .philosophy-lead {
          font-size: 1.15rem;
          line-height: 1.7;
          color: #A4B2BC;
          max-width: 72ch;
          margin-bottom: 4rem;
        }
        .philosophy-pillars-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          padding-top: 3rem;
          border-top: 1px solid var(--border-dark-hairline);
        }
        .phil-num {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-accent);
          display: block;
          margin-bottom: 0.75rem;
        }
        .phil-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.65rem;
        }
        .phil-desc {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #8E9EA9;
        }

        /* 7. NEWS EDITORIAL */
        .news-editorial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        .news-editorial-card {
          background-color: var(--color-warm-ivory);
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .news-img-box {
          position: relative;
          height: 220px;
          background-color: #FFFFFF;
          border-bottom: 1px solid var(--border-hairline);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .news-card-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .news-type-tag {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background-color: var(--color-graphite);
          color: #FFFFFF;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.25rem 0.55rem;
          border-radius: var(--radius-xs);
        }
        .news-body-box {
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .news-meta-line {
          font-size: 0.75rem;
          color: var(--color-steel-blue);
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .news-card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-graphite);
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .news-card-title a:hover {
          color: var(--color-accent);
        }
        .news-card-excerpt {
          font-size: 0.8875rem;
          line-height: 1.58;
          color: #4D606E;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }
        .news-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-graphite);
          transition: color var(--transition-fast);
        }
        .news-card-cta:hover {
          color: var(--color-accent);
        }

        /* 8. ENQUIRY EDITORIAL BOX */
        .enquiry-editorial-box {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4.5rem;
          align-items: center;
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          padding: 4rem;
          box-shadow: var(--shadow-subtle);
        }
        .enquiry-headline {
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: var(--color-graphite);
          margin: 0.5rem 0 1rem;
        }
        .enquiry-lead {
          font-size: 1.05rem;
          line-height: 1.65;
          color: #4D606E;
          margin-bottom: 2.25rem;
        }
        .enquiry-actions-group {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }
        .enquiry-contacts-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-left: 3rem;
          border-left: 1px solid var(--border-hairline);
        }
        .contact-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .contact-label {
          font-size: 0.6875rem;
          color: var(--color-steel-blue);
          letter-spacing: 0.08em;
        }
        .contact-link {
          font-size: 0.9375rem;
          color: var(--color-graphite);
          font-weight: 600;
          transition: color var(--transition-fast);
        }
        .contact-link:hover {
          color: var(--color-accent);
        }
        .contact-text {
          font-size: 0.8125rem;
          color: #4D606E;
          line-height: 1.45;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .statement-grid,
          .stage-editorial-spread,
          .flagship-feature-grid,
          .enquiry-editorial-box {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .statement-diptych {
            grid-template-columns: 1fr;
          }
          .divisions-editorial-grid,
          .news-editorial-grid,
          .philosophy-pillars-row {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .enquiry-contacts-col {
            padding-left: 0;
            border-left: none;
            padding-top: 2rem;
            border-top: 1px solid var(--border-hairline);
          }
        }

        @media (max-width: 768px) {
          .process-pipeline-nav {
            grid-template-columns: 1fr 1fr;
          }
          .stage-editorial-comparison {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .stage-editorial-spread {
            padding: 1.75rem 1.5rem;
          }
          .flagship-image-col {
            padding: 1.5rem;
          }
          .enquiry-editorial-box {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .process-pipeline-nav {
            grid-template-columns: 1fr;
          }
          .hero-cta-row,
          .enquiry-actions-group,
          .flagship-actions-row {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
          }
          .hero-cta-row .btn,
          .enquiry-actions-group .btn,
          .flagship-actions-row .btn {
            width: 100%;
            justify-content: center;
          }
          .hero-image-canvas {
            padding: 1.5rem 1rem;
          }
          .hero-image-wrap {
            min-height: 240px;
          }
          .statement-meta-row {
            flex-direction: column;
            gap: 1.25rem;
          }
        }
      `})]})}function F({items:a=[]}){return e.jsxs("nav",{className:"breadcrumbs-nav","aria-label":"Breadcrumb",children:[e.jsxs("ol",{className:"breadcrumbs-list",children:[e.jsx("li",{className:"breadcrumbs-item",children:e.jsxs(p,{to:"/",className:"breadcrumbs-link",title:"Home",children:[e.jsx(xe,{size:14}),e.jsx("span",{className:"sr-only",children:"Home"})]})}),a.map((o,t)=>{const d=t===a.length-1;return e.jsxs("li",{className:"breadcrumbs-item",children:[e.jsx(te,{size:13,className:"breadcrumbs-separator"}),d||!o.href?e.jsx("span",{className:"breadcrumbs-current","aria-current":"page",children:o.label}):e.jsx(p,{to:o.href,className:"breadcrumbs-link",children:o.label})]},t)})]}),e.jsx("style",{children:`
        .breadcrumbs-nav {
          padding: 1rem 0;
          font-size: 0.8125rem;
          color: #647887;
        }
        .breadcrumbs-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.35rem;
          list-style: none;
        }
        .breadcrumbs-item {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }
        .breadcrumbs-link {
          color: #647887;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: color var(--transition-fast);
        }
        .breadcrumbs-link:hover {
          color: #17232D;
        }
        .breadcrumbs-separator {
          color: #A4B2BC;
          flex-shrink: 0;
        }
        .breadcrumbs-current {
          color: #17232D;
          font-weight: 600;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
      `})]})}function ee({overline:a,title:o,subtitle:t,linkText:d,linkHref:r,onLinkClick:s,dark:l=!1,align:i="left"}){return e.jsxs("div",{className:`editorial-section-heading align-${i} ${l?"dark":""}`,children:[e.jsxs("div",{className:"heading-content-col",children:[a&&e.jsx("span",{className:`badge-overline ${l?"dark":""}`,children:a}),e.jsx("h2",{className:"heading-main-title",children:o}),t&&e.jsx("p",{className:"heading-subtitle",children:t})]}),d&&(r||s)&&e.jsx("div",{className:"heading-action-col",children:r?e.jsxs(p,{to:r,className:`editorial-action-link ${l?"dark":""}`,children:[e.jsx("span",{children:d}),e.jsx(v,{size:16})]}):e.jsxs("button",{type:"button",onClick:s,className:`editorial-action-link ${l?"dark":""}`,children:[e.jsx("span",{children:d}),e.jsx(v,{size:16})]})}),e.jsx("style",{children:`
        .editorial-section-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }
        .editorial-section-heading.align-center {
          text-align: center;
          justify-content: center;
        }
        .heading-content-col {
          max-width: 760px;
        }
        .heading-main-title {
          font-family: var(--font-heading);
          color: var(--color-graphite);
          margin-top: 0.35rem;
        }
        .editorial-section-heading.dark .heading-main-title {
          color: #FFFFFF;
        }
        .heading-subtitle {
          margin-top: 0.85rem;
          font-size: 1.15rem;
          line-height: 1.6;
          color: #4D606E;
        }
        .editorial-section-heading.dark .heading-subtitle {
          color: #B2C0CB;
        }
        .editorial-action-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-body);
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-graphite);
          padding-bottom: 0.25rem;
          border-bottom: 2px solid var(--color-accent);
          background: none;
          border-top: none;
          border-left: none;
          border-right: none;
          cursor: pointer;
          transition: color var(--transition-fast), border-color var(--transition-fast);
        }
        .editorial-action-link:hover {
          color: var(--color-accent);
        }
        .editorial-action-link.dark {
          color: #FFFFFF;
        }
        .editorial-action-link.dark:hover {
          color: var(--color-accent);
        }
        @media (max-width: 768px) {
          .editorial-section-heading {
            margin-bottom: 2.25rem;
          }
          .heading-subtitle {
            font-size: 1rem;
          }
        }
      `})]})}function Be({onOpenEnquiry:a}){const[o,t]=g.useState("all"),d=[{id:"all",label:"All Engineering Divisions",subtitle:"Complete Tomsic production & metrology portfolio"},{id:"unevenness",label:"High Sliver / Yarn Count CV%",targetDivision:"spinning",recommended:["TMS25-R2C Card Autoleveller","TMS25-R2D Drawframe Autoleveller","easy Evenness Tester"],summary:"Eliminate periodic drafting faults and reduce count variation up to 70% with high-frequency DSP autolevelling and off-line capacitive validation."},{id:"stickiness",label:"Sticky Cotton Roller Lapping",targetDivision:"sugar",recommended:["TMS54 Cotton Sugar Test","Glucosil TMS55 Solution"],summary:"Prevent catastrophic card wire clothing and drawframe roller wrapping by testing incoming raw cotton bales in 15 minutes before opening."},{id:"strength",label:"High Yarn Breaks in Weaving / Knitting",targetDivision:"laboratory",recommended:["Tensotester 3 Automatic Strength Tester","easy Evenness Tester"],summary:"Automate single-end breaking force and elongation testing across 24 bobbins to identify weak spots before shipment to fabric mills."},{id:"data-entry",label:"Laboratory Transcription Errors",targetDivision:"laboratory",recommended:["TMS45 Count Analyser","Link Job Technology SQL Network"],summary:"Eliminate keyboard typing mistakes by automatically transmitting balance count data into evenness and tensile testing records via shared SQL database."}];return e.jsxs("div",{className:"solutions-overview-page",children:[e.jsx("section",{className:"page-header-section bg-warm-ivory border-bottom-hairline bg-grid-blueprint relative",children:e.jsxs("div",{className:"container relative z-10",children:[e.jsx(F,{items:[{label:"Solutions Overview"}]}),e.jsxs("div",{className:"page-header-content",children:[e.jsxs("div",{className:"header-badge-row",children:[e.jsx("span",{className:"badge-overline",children:"Engineering capabilities"}),e.jsx("span",{className:"badge-subtag font-mono",children:"3 Specialized Divisions"})]}),e.jsx("h1",{className:"page-header-title",children:"Three specialized divisions for the modern textile mill."}),e.jsx("p",{className:"page-header-lead",children:"From raw bale stickiness detection to high-speed sliver drafting regulation and comprehensive laboratory metrology, Tomsic provides precision technologies engineered and manufactured in Italy."})]})]})}),e.jsx("section",{className:"section-sm bg-white border-bottom-hairline",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"challenge-filter-card relative",children:[e.jsx("div",{className:"drafting-crosshair top-left"}),e.jsx("div",{className:"drafting-crosshair top-right"}),e.jsx("div",{className:"drafting-crosshair bottom-left"}),e.jsx("div",{className:"drafting-crosshair bottom-right"}),e.jsxs("div",{className:"challenge-filter-header",children:[e.jsxs("div",{className:"challenge-label-group font-mono",children:[e.jsx(be,{size:15,color:"#A48256"}),e.jsx("span",{children:"FILTER BY PRODUCTION CHALLENGE:"})]}),e.jsx("span",{className:"challenge-header-hint",children:"Select your mill's primary operational focus to pinpoint engineered solutions"})]}),e.jsx("div",{className:"challenge-pills-row",children:d.map(r=>e.jsx("button",{type:"button",onClick:()=>t(r.id),className:`challenge-pill ${o===r.id?"active":""}`,children:r.label},r.id))}),o!=="all"&&e.jsx("div",{className:"challenge-result-card",children:(()=>{const r=d.find(s=>s.id===o);return e.jsxs("div",{className:"challenge-result-inner",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"challenge-target-tag font-mono",children:[e.jsxs("span",{children:["TARGET DIVISION: ",r.targetDivision.toUpperCase()]}),e.jsx("strong",{className:"challenge-active-name",children:r.label})]}),e.jsx("p",{className:"challenge-summary-text",children:r.summary})]}),e.jsxs(p,{to:`/solutions/${r.targetDivision}`,className:"btn btn-secondary btn-sm challenge-goto-btn",children:[e.jsxs("span",{children:["View ",r.targetDivision," Division"]}),e.jsx(te,{size:14})]})]})})()})]})})}),e.jsx("section",{className:"section bg-white",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"solutions-breakdown-list",children:Y.filter(r=>{if(o==="all")return!0;const s=d.find(l=>l.id===o);return(s==null?void 0:s.targetDivision)===r.slug}).map((r,s)=>{const l=j.filter(i=>i.categorySlug===r.slug);return e.jsxs("article",{className:`solution-breakdown-item ${s%2===1?"reverse":""}`,id:r.slug,children:[e.jsxs("div",{className:"solution-visual relative",children:[e.jsx("div",{className:"drafting-crosshair top-left"}),e.jsx("div",{className:"drafting-crosshair top-right"}),e.jsx("div",{className:"drafting-crosshair bottom-left"}),e.jsx("div",{className:"drafting-crosshair bottom-right"}),e.jsx("img",{src:r.heroImage,alt:r.title,className:"solution-hero-img",loading:"lazy"}),e.jsxs("div",{className:"solution-visual-badge",children:[e.jsxs("span",{children:["DIVISION 0",s+1]}),e.jsx("strong",{children:r.title})]})]}),e.jsxs("div",{className:"solution-text-col",children:[e.jsx("span",{className:"badge-overline",children:r.badge}),e.jsx("h2",{className:"solution-item-title",children:r.title}),e.jsx("h3",{className:"solution-item-subtitle",children:r.subtitle}),e.jsx("p",{className:"solution-item-desc",children:r.overview}),e.jsx("div",{className:"solution-key-grid",children:r.keyHighlights.map((i,m)=>e.jsxs("div",{className:"key-item",children:[e.jsx(z,{size:16,color:"#AA8B62",className:"key-icon"}),e.jsxs("div",{children:[e.jsx("strong",{children:i.title}),e.jsx("p",{children:i.description})]})]},m))}),e.jsxs("div",{className:"solution-products-strip",children:[e.jsx("span",{className:"strip-label",children:"ENGINEERED SYSTEMS:"}),e.jsx("div",{className:"strip-tags",children:l.map(i=>e.jsxs(p,{to:`/products/${i.slug}`,className:"strip-product-link",children:[e.jsx("span",{children:i.name}),e.jsx(v,{size:12})]},i.slug))})]}),e.jsxs("div",{className:"solution-item-actions",children:[e.jsxs(p,{to:`/solutions/${r.slug}`,className:"btn btn-primary",children:[e.jsxs("span",{children:["Explore ",r.title," In-Depth"]}),e.jsx(T,{size:16})]}),e.jsx("button",{className:"btn btn-secondary",onClick:()=>a&&a(r.title,"Sales"),children:e.jsx("span",{children:"Request Division Datasheets"})})]})]})]},r.slug)})})})}),e.jsx("section",{className:"section bg-warm-ivory border-top-hairline",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"overview-callout-card relative",children:[e.jsx("span",{className:"drafting-crosshair top-left"}),e.jsx("span",{className:"drafting-crosshair top-right"}),e.jsx("span",{className:"drafting-crosshair bottom-left"}),e.jsx("span",{className:"drafting-crosshair bottom-right"}),e.jsxs("div",{className:"callout-text",children:[e.jsx("span",{className:"badge-overline",children:"Mill consultation"}),e.jsx("h3",{className:"callout-title",children:"Need a complete laboratory & card room consultation?"}),e.jsx("p",{className:"callout-desc",children:"Our application engineers in Savogna d'Isonzo review your production counts (Ne, Nm, tex), staple lengths, card brands, and ring spinning frames to configure the ideal instrumentation and autolevelling package."})]}),e.jsx("div",{className:"callout-action-block",children:e.jsxs("button",{className:"btn btn-bronze",onClick:()=>a&&a("Integrated Mill Consultation","Sales"),children:[e.jsx("span",{children:"Initiate Laboratory Consultation"}),e.jsx(v,{size:16})]})})]})})}),e.jsx("style",{children:`
        .page-header-section {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }
        .page-header-content {
          max-width: 880px;
          margin-top: 1.5rem;
        }
        .page-header-title {
          font-size: clamp(2.25rem, 4vw, 3.25rem);
          margin: 0.5rem 0 1.25rem;
          line-height: 1.12;
        }
        .page-header-lead {
          font-size: 1.25rem;
          line-height: 1.6;
          color: #384A59;
        }
        .border-bottom-hairline {
          border-bottom: 1px solid var(--border-hairline);
        }
        .border-top-hairline {
          border-top: 1px solid var(--border-hairline);
        }
        .solutions-breakdown-list {
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }
        .solution-breakdown-item {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 4rem;
          align-items: center;
        }
        .solution-breakdown-item.reverse {
          grid-template-columns: 1.1fr 1fr;
        }
        .solution-breakdown-item.reverse .solution-visual {
          order: 2;
        }
        .solution-breakdown-item.reverse .solution-text-col {
          order: 1;
        }
        .solution-visual {
          position: relative;
          background-color: #F5F4F0;
          border: 1px solid var(--border-subtle);
          padding: 1.5rem;
          border-radius: var(--radius-sm);
        }
        .solution-hero-img {
          width: 100%;
          height: auto;
          max-height: 380px;
          object-fit: contain;
          display: block;
        }
        .solution-visual-badge {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: rgba(23, 35, 45, 0.9);
          backdrop-filter: blur(4px);
          color: #FFFFFF;
          padding: 0.5rem 0.85rem;
          border-radius: var(--radius-xs);
          display: flex;
          flex-direction: column;
          font-size: 0.75rem;
        }
        .solution-visual-badge span {
          color: #AA8B62;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          letter-spacing: 0.05em;
        }
        .solution-visual-badge strong {
          color: #FFFFFF;
          font-weight: 600;
        }
        .solution-item-title {
          font-size: clamp(1.85rem, 3vw, 2.35rem);
          line-height: 1.15;
          margin: 0.35rem 0 0.5rem;
        }
        .solution-item-subtitle {
          font-size: 1.1rem;
          color: #647887;
          font-weight: 500;
          margin-bottom: 1.25rem;
        }
        .solution-item-desc {
          font-size: 1rem;
          color: #384A59;
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }
        .solution-key-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 2rem;
          padding: 1.25rem;
          background-color: #FAF9F6;
          border-radius: var(--radius-xs);
          border: 1px solid var(--border-hairline);
        }
        .key-item {
          display: flex;
          gap: 0.65rem;
          align-items: flex-start;
        }
        .key-icon {
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        .key-item strong {
          display: block;
          font-size: 0.875rem;
          color: #17232D;
          margin-bottom: 0.2rem;
        }
        .key-item p {
          font-size: 0.8125rem;
          color: #647887;
          line-height: 1.45;
          margin: 0;
        }
        .solution-products-strip {
          margin-bottom: 2rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-hairline);
        }
        .strip-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #647887;
          margin-bottom: 0.65rem;
          letter-spacing: 0.05em;
        }
        .strip-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .strip-product-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8125rem;
          padding: 0.35rem 0.65rem;
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-xs);
          color: #17232D;
          font-weight: 500;
          transition: all var(--transition-fast);
        }
        .strip-product-link:hover {
          background-color: #17232D;
          color: #FFFFFF;
          border-color: #17232D;
        }
        .solution-item-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Challenge Filter Card */
        .challenge-filter-card {
          background-color: #FAF9F6;
          border: 1px solid var(--border-subtle);
          padding: 1.75rem 2rem;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-subtle);
        }
        .challenge-filter-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }
        .challenge-label-group {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-graphite);
          letter-spacing: 0.06em;
        }
        .challenge-header-hint {
          font-size: 0.8125rem;
          color: var(--color-steel-blue);
        }
        .challenge-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        .challenge-pill {
          background-color: #FFFFFF;
          color: var(--color-graphite);
          border: 1px solid var(--border-subtle);
          padding: 0.55rem 1rem;
          font-family: var(--font-body);
          font-size: 0.8125rem;
          font-weight: 600;
          border-radius: var(--radius-xs);
          cursor: pointer;
          transition: all var(--transition-fast);
          line-height: 1.2;
        }
        .challenge-pill:hover {
          border-color: var(--color-graphite);
          background-color: var(--color-warm-ivory);
        }
        .challenge-pill.active {
          background-color: var(--color-graphite);
          color: #FFFFFF;
          border-color: var(--color-graphite);
          box-shadow: 0 2px 6px rgba(20, 29, 36, 0.15);
        }
        .challenge-result-card {
          margin-top: 1.25rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-xs);
          animation: tabFade 0.25s var(--ease-editorial);
        }
        .challenge-result-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .challenge-target-tag {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.35rem;
          font-size: 0.6875rem;
          color: var(--color-muted-bronze);
          letter-spacing: 0.05em;
        }
        .challenge-active-name {
          color: var(--color-graphite);
          font-family: var(--font-heading);
          font-size: 0.9375rem;
          letter-spacing: normal;
        }
        .challenge-summary-text {
          font-size: 0.875rem;
          color: #4D606E;
          line-height: 1.5;
          margin: 0;
          max-width: 720px;
        }
        .challenge-goto-btn {
          flex-shrink: 0;
        }

        /* Overview Callout Card */
        .overview-callout-card {
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 2.75rem 3rem;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-card);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          flex-wrap: wrap;
        }
        .callout-title {
          font-size: 1.75rem;
          margin-bottom: 0.6rem;
          line-height: 1.2;
        }
        .callout-desc {
          color: #4D606E;
          font-size: 1.025rem;
          line-height: 1.6;
          margin: 0;
        }
        .callout-action-block {
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .solution-breakdown-item,
          .solution-breakdown-item.reverse {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .solution-breakdown-item.reverse .solution-visual {
            order: 1;
          }
          .solution-breakdown-item.reverse .solution-text-col {
            order: 2;
          }
          .solutions-breakdown-list {
            gap: 4rem;
          }
        }
        @media (max-width: 640px) {
          .challenge-filter-card {
            padding: 1.5rem 1.15rem;
          }
          .challenge-pill {
            min-height: 42px;
            font-size: 0.8125rem;
          }
          .challenge-result-inner {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }
          .challenge-goto-btn {
            width: 100%;
            justify-content: center;
          }
          .solution-key-grid {
            grid-template-columns: 1fr;
          }
          .solution-item-actions {
            flex-direction: column;
            width: 100%;
            gap: 0.75rem;
          }
          .solution-item-actions .btn {
            width: 100%;
            justify-content: center;
          }
          .overview-callout-card {
            padding: 1.75rem 1.25rem;
            gap: 1.5rem;
          }
          .callout-title {
            font-size: 1.4rem;
          }
          .callout-action-block {
            width: 100%;
          }
          .callout-action-block .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `})]})}function q({product:a,variant:o="default"}){return a?e.jsxs("article",{className:`editorial-product-card ${o}`,children:[e.jsxs(p,{to:`/products/${a.slug}`,className:"product-card-media-wrap",children:[e.jsx("img",{src:a.primaryImage,alt:a.name,className:"product-card-img",loading:"lazy"}),a.badge&&e.jsx("span",{className:"product-card-badge font-mono",children:a.badge})]}),e.jsxs("div",{className:"product-card-content",children:[e.jsxs("div",{className:"product-card-header font-mono",children:[e.jsx("span",{className:"product-card-cat",children:a.category}),e.jsx("span",{className:"product-card-code",children:a.code})]}),e.jsx("h3",{className:"product-card-title",children:e.jsx(p,{to:`/products/${a.slug}`,children:a.name})}),e.jsx("p",{className:"product-card-desc",children:a.tagline||a.description}),e.jsx("div",{className:"product-card-footer",children:e.jsxs(p,{to:`/products/${a.slug}`,className:"product-card-cta",children:[e.jsx("span",{children:"Explore Engineering Specifications"}),e.jsx(v,{size:14})]})})]}),e.jsx("style",{children:`
        .editorial-product-card {
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: border-color var(--transition-normal), box-shadow var(--transition-normal), transform var(--transition-normal);
          position: relative;
        }
        .editorial-product-card:hover {
          border-color: var(--color-accent);
          box-shadow: var(--shadow-card);
          transform: translateY(-2px);
        }
        .product-card-media-wrap {
          position: relative;
          width: 100%;
          height: 250px;
          background-color: #FAF9F6;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.75rem;
          border-bottom: 1px solid var(--border-hairline);
          overflow: hidden;
        }
        .product-card-img {
          max-height: 100%;
          width: auto;
          object-fit: contain;
          transition: transform var(--transition-smooth);
        }
        .editorial-product-card:hover .product-card-img {
          transform: scale(1.03);
        }
        .product-card-badge {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          background-color: var(--color-graphite);
          color: #FFFFFF;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-xs);
        }
        .product-card-content {
          padding: 1.65rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .product-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.6rem;
        }
        .product-card-cat {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-steel-blue);
        }
        .product-card-code {
          font-size: 0.725rem;
          font-weight: 600;
          color: var(--color-graphite);
          background-color: var(--color-warm-ivory);
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-xs);
        }
        .product-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-graphite);
          margin-bottom: 0.6rem;
          line-height: 1.25;
        }
        .product-card-title a {
          color: inherit;
        }
        .product-card-title a:hover {
          color: var(--color-accent);
        }
        .product-card-desc {
          font-size: 0.8875rem;
          line-height: 1.58;
          color: #4D606E;
          margin-bottom: 1.25rem;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .product-card-footer {
          padding-top: 1rem;
          border-top: 1px solid var(--border-hairline);
        }
        .product-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-graphite);
          transition: color var(--transition-fast);
        }
        .product-card-cta svg {
          transition: transform var(--transition-fast);
        }
        .product-card-cta:hover {
          color: var(--color-accent);
        }
        .product-card-cta:hover svg {
          transform: translate(2px, -2px);
        }
      `})]}):null}function He({onOpenEnquiry:a}){Y.find(n=>n.slug==="laboratory");const o=j.filter(n=>n.categorySlug==="laboratory"),[t,d]=g.useState("30"),[r,s]=g.useState("Ne"),i=((n,x)=>{const u=parseFloat(n);if(isNaN(u)||u<=0)return{Ne:"—",Nm:"—",tex:"—",dtex:"—",Den:"—"};let f=0;switch(x){case"Ne":f=590.541/u;break;case"Nm":f=1e3/u;break;case"tex":f=u;break;case"dtex":f=u/10;break;case"Den":f=u/9;break;default:f=u}return{Ne:(590.541/f).toFixed(2),Nm:(1e3/f).toFixed(2),tex:f.toFixed(2),dtex:(f*10).toFixed(1),Den:(f*9).toFixed(1)}})(t,r),m=[{code:"ISO 2062",title:"Tensile Properties of Yarns",description:"Single-end automatic breaking force, tenacity (cN/tex), and elongation at break curves via Tensotester 3.",certifiedTolerance:"Class 0.5 (DIN 51221)"},{code:"ASTM D2256",title:"Standard Test Method for Tensile Properties",description:"Constant rate of extension (CRE) tensile metrology across spun, filament, and elastomeric package lots.",certifiedTolerance:"±0.5% Load Cell Accuracy"},{code:"ASTM D1425",title:"Unevenness of Textile Strands",description:"Mass variation CV%, spectrogram fast Fourier analysis, periodic wavelength pinpointing, and IPI imperfection count.",certifiedTolerance:"Capacitive Class 0.5"},{code:"DIN 53834",title:"Testing of Textiles: Tensile Testing",description:"German national textile tensile standard conformity with automated 24-position creel sequencing.",certifiedTolerance:"Certified In-House Metrology"}];return e.jsxs("div",{className:"solution-category-page",children:[e.jsx("section",{className:"solution-header-hero bg-warm-ivory border-bottom-hairline bg-grid-blueprint relative",children:e.jsxs("div",{className:"container relative z-10",children:[e.jsx(F,{items:[{label:"Solutions",href:"/solutions"},{label:"Laboratory Solutions"}]}),e.jsxs("div",{className:"solution-header-grid",children:[e.jsxs("div",{className:"solution-header-copy",children:[e.jsxs("div",{className:"header-badge-row",children:[e.jsx("span",{className:"badge-overline",children:"Division 01 · Textile metrology"}),e.jsx("span",{className:"badge-subtag font-mono",children:"Class 0.5 calibrated"})]}),e.jsx("h1",{className:"solution-header-title",children:"Laboratory Solutions"}),e.jsx("p",{className:"solution-header-lead",children:"Precision textile quality control from raw fibre to finished yarn. Certified international testing standard compatibility, 3-click simplicity, and zero proprietary bus obsolescence."}),e.jsxs("div",{className:"solution-actions-row",children:[e.jsxs("button",{className:"btn btn-primary",onClick:()=>a&&a("","Sales"),children:[e.jsx("span",{children:"Request Metrology Catalog"}),e.jsx(v,{size:15})]}),e.jsx("a",{href:"#lab-calculator",className:"btn btn-secondary",children:e.jsx("span",{children:"Count Converter"})}),e.jsx("a",{href:"#lab-products",className:"btn btn-secondary",children:e.jsxs("span",{children:["Browse Instruments (",o.length,")"]})})]})]}),e.jsxs("div",{className:"solution-header-media relative",children:[e.jsx("div",{className:"drafting-crosshair top-left"}),e.jsx("div",{className:"drafting-crosshair top-right"}),e.jsx("div",{className:"drafting-crosshair bottom-left"}),e.jsx("div",{className:"drafting-crosshair bottom-right"}),e.jsx("img",{src:"/assets/easy-evenness-tester.jpg",alt:"easy Evenness Tester Laboratory Setup",className:"solution-hero-img-framed"}),e.jsxs("div",{className:"media-legend-bar",children:[e.jsx("span",{className:"font-mono text-xs text-graphite/70",children:'REF: TOMSIC "easy" EVENNESS TESTER'}),e.jsx("span",{className:"font-mono text-xs text-graphite/70",children:"ORIGIN: SAVOGNA D'ISONZO"})]})]})]})]})}),e.jsx("section",{className:"section bg-white",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"architecture-grid",children:[e.jsxs("div",{children:[e.jsx("span",{className:"badge-overline",children:"Engineering philosophy"}),e.jsx("h2",{style:{fontSize:"2.15rem",marginBottom:"1.25rem"},children:"Why global spinning mills choose Tomsic testing benches."}),e.jsx("p",{style:{fontSize:"1.05rem",color:"#384A59",lineHeight:"1.65",marginBottom:"1.5rem"},children:"For decades, testing equipment vendors forced spinning mills to replace functioning machinery because proprietary internal computer cards or obsolete operating systems became unserviceable. Tomsic eliminated this trap."}),e.jsx("p",{style:{fontSize:"1rem",color:"#4D606E",lineHeight:"1.6",marginBottom:"1.5rem"},children:"Our systems operate on standard commercial personal computers running modern Windows platforms using Microsoft .NET framework. All electronic modules are self-testing and user-extractable. A minor board fault can be pinpointed and addressed on-site in minutes without expensive international flight dispatches."})]}),e.jsxs("div",{className:"architecture-features",children:[e.jsxs("div",{className:"arch-card relative",children:[e.jsx("div",{className:"drafting-crosshair top-left"}),e.jsx("div",{className:"drafting-crosshair top-right"}),e.jsx("strong",{className:"arch-title",children:"3-Click Software Flow"}),e.jsx("p",{className:"arch-desc",children:"Execute full testing protocols in three clicks. All operating parameters and units configured on a single unified interface window."})]}),e.jsxs("div",{className:"arch-card relative",children:[e.jsx("div",{className:"drafting-crosshair top-left"}),e.jsx("div",{className:"drafting-crosshair top-right"}),e.jsx("strong",{className:"arch-title",children:"Link Job Technology"}),e.jsx("p",{className:"arch-desc",children:"Synchronizes count data from the TMS45 Count Analyser into evenness and strength testers without manual keyboard entry errors."})]}),e.jsxs("div",{className:"arch-card relative",children:[e.jsx("div",{className:"drafting-crosshair top-left"}),e.jsx("div",{className:"drafting-crosshair top-right"}),e.jsx("strong",{className:"arch-title",children:"25-Year Database Longevity"}),e.jsx("p",{className:"arch-desc",children:"Retain quarter-century mill history with instant export to Microsoft Excel, Word, or plant-wide ERP servers."})]}),e.jsxs("div",{className:"arch-card relative",children:[e.jsx("div",{className:"drafting-crosshair top-left"}),e.jsx("div",{className:"drafting-crosshair top-right"}),e.jsx("strong",{className:"arch-title",children:"World Standard Benchmarks"}),e.jsx("p",{className:"arch-desc",children:"Capacitive and optical measurement results align 100% with global reference standards recognized by international retailers."})]})]})]})})}),e.jsx("section",{className:"section bg-warm-ivory border-top-hairline",id:"lab-calculator",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-title-wrap text-center max-w-3xl mx-auto",style:{marginBottom:"2.5rem"},children:[e.jsx("span",{className:"badge-overline",children:"Textile count conversion tool"}),e.jsx("h2",{style:{fontSize:"clamp(1.75rem, 3.5vw, 2.5rem)"},children:"Textile Count & Linear Density Converter"}),e.jsx("p",{style:{color:"#647887",fontSize:"1.05rem",marginTop:"0.5rem"},children:"Universal conversion between English cotton count (Ne), Metric count (Nm), Universal mass (tex), Decitex (dtex), and Denier used by Tomsic Link Job SQL software."})]}),e.jsxs("div",{className:"converter-card bg-white border border-border-subtle p-6 md:p-8 rounded-sm shadow-card max-w-4xl mx-auto relative",children:[e.jsx("div",{className:"drafting-crosshair top-left"}),e.jsx("div",{className:"drafting-crosshair top-right"}),e.jsx("div",{className:"drafting-crosshair bottom-left"}),e.jsx("div",{className:"drafting-crosshair bottom-right"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6 items-end pb-6 border-b border-border-hairline",children:[e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"block text-xs font-mono font-bold text-graphite mb-2 uppercase tracking-wider",children:"Input Count Value:"}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[e.jsx("input",{type:"number",step:"any",value:t,onChange:n=>d(n.target.value),className:"flex-1 px-4 py-2.5 font-mono text-lg font-bold border border-border-subtle rounded-sm bg-warm-ivory/50 text-graphite focus:outline-none focus:border-graphite",placeholder:"Enter value..."}),e.jsxs("select",{value:r,onChange:n=>s(n.target.value),className:"px-4 py-2.5 font-mono font-bold text-sm border border-border-subtle rounded-sm bg-warm-ivory text-graphite cursor-pointer focus:outline-none focus:border-graphite",children:[e.jsx("option",{value:"Ne",children:"Ne (English Cotton)"}),e.jsx("option",{value:"Nm",children:"Nm (Metric Count)"}),e.jsx("option",{value:"tex",children:"tex (Universal Mass)"}),e.jsx("option",{value:"dtex",children:"dtex (Decitex)"}),e.jsx("option",{value:"Den",children:"Den (Denier)"})]})]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-mono text-xs text-steel-blue block mb-1",children:"Active Reference:"}),e.jsxs("span",{className:"font-mono text-sm font-bold text-graphite block",children:[t," ",r]}),e.jsx("span",{className:"text-[11px] text-graphite/50 block font-mono",children:"Standard 20°C / 65% RH"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-6",children:[e.jsxs("div",{className:`p-3 rounded-sm border ${r==="Ne"?"bg-warm-ivory border-graphite":"bg-white border-border-hairline"}`,children:[e.jsx("span",{className:"font-mono text-[11px] text-graphite/60 uppercase block",children:"Ne (Cotton)"}),e.jsx("strong",{className:"font-mono text-xl text-graphite block my-1 tabular-nums",children:i.Ne}),e.jsx("span",{className:"font-mono text-[10px] text-graphite/40",children:"tex = 590.54 / Ne"})]}),e.jsxs("div",{className:`p-3 rounded-sm border ${r==="Nm"?"bg-warm-ivory border-graphite":"bg-white border-border-hairline"}`,children:[e.jsx("span",{className:"font-mono text-[11px] text-graphite/60 uppercase block",children:"Nm (Metric)"}),e.jsx("strong",{className:"font-mono text-xl text-graphite block my-1 tabular-nums",children:i.Nm}),e.jsx("span",{className:"font-mono text-[10px] text-graphite/40",children:"Nm = 1000 / tex"})]}),e.jsxs("div",{className:`p-3 rounded-sm border ${r==="tex"?"bg-warm-ivory border-graphite":"bg-white border-border-hairline"}`,children:[e.jsx("span",{className:"font-mono text-[11px] text-graphite/60 uppercase block",children:"tex (Universal)"}),e.jsx("strong",{className:"font-mono text-xl text-graphite block my-1 tabular-nums",children:i.tex}),e.jsx("span",{className:"font-mono text-[10px] text-graphite/40",children:"g / 1,000 meters"})]}),e.jsxs("div",{className:`p-3 rounded-sm border ${r==="dtex"?"bg-warm-ivory border-graphite":"bg-white border-border-hairline"}`,children:[e.jsx("span",{className:"font-mono text-[11px] text-graphite/60 uppercase block",children:"dtex (Decitex)"}),e.jsx("strong",{className:"font-mono text-xl text-graphite block my-1 tabular-nums",children:i.dtex}),e.jsx("span",{className:"font-mono text-[10px] text-graphite/40",children:"dtex = tex * 10"})]}),e.jsxs("div",{className:`p-3 rounded-sm border ${r==="Den"?"bg-warm-ivory border-graphite":"bg-white border-border-hairline"}`,children:[e.jsx("span",{className:"font-mono text-[11px] text-graphite/60 uppercase block",children:"Denier (Den)"}),e.jsx("strong",{className:"font-mono text-xl text-graphite block my-1 tabular-nums",children:i.Den}),e.jsx("span",{className:"font-mono text-[10px] text-graphite/40",children:"Den = tex * 9"})]})]})]})]})}),e.jsx("section",{className:"section bg-white border-top-hairline",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-title-wrap max-w-2xl mb-8",children:[e.jsx("span",{className:"badge-overline",children:"International standard harmonization"}),e.jsx("h3",{className:"text-2xl font-bold text-graphite",children:"Certified Metrological Testing Standards"}),e.jsx("p",{className:"text-steel-blue text-sm mt-1",children:"Every Tomsic laboratory system is calibrated according to strict European and international norms to guarantee third-party audit acceptance."})]}),e.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:m.map((n,x)=>e.jsxs("div",{className:"p-5 border border-border-subtle bg-warm-ivory/30 rounded-sm relative",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"font-mono text-sm font-bold text-graphite bg-white px-2 py-0.5 border border-border-subtle rounded-sm",children:n.code}),e.jsx("span",{className:"font-mono text-[11px] text-muted-bronze font-semibold",children:n.certifiedTolerance})]}),e.jsx("h4",{className:"text-base font-bold text-graphite mb-1",children:n.title}),e.jsx("p",{className:"text-xs text-steel-blue leading-relaxed m-0",children:n.description})]},x))})]})}),e.jsx("section",{className:"section bg-warm-ivory border-top-hairline",id:"lab-products",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-title-wrap",style:{marginBottom:"3rem"},children:[e.jsx("span",{className:"badge-overline",children:"Testing instruments portfolio"}),e.jsx("h2",{children:"Laboratory Testing Instruments"}),e.jsx("p",{style:{color:"#647887",fontSize:"1.1rem",marginTop:"0.4rem"},children:"Engineered, machined, and calibrated 100% in Savogna d'Isonzo, Italy."})]}),e.jsx("div",{className:"lab-products-grid",children:o.map(n=>e.jsx(q,{product:n},n.slug))})]})}),e.jsx("section",{className:"section bg-white border-top-hairline",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"ancillary-section-box",children:[e.jsxs("div",{children:[e.jsx("span",{className:"badge-overline",children:"Ancillary laboratory equipment"}),e.jsx("h3",{style:{fontSize:"1.5rem",marginBottom:"0.5rem"},children:"Complete Spinning Laboratory Ancillary Equipment"}),e.jsx("p",{style:{color:"#4D606E",fontSize:"0.95rem",lineHeight:"1.6"},children:"In addition to our flagship evenness, tensile, and trash systems, Tomsic manufactures a complete range of spinning laboratory auxiliary instruments:"}),e.jsxs("ul",{className:"ancillary-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"AutoWinder:"})," Automated package winding for sample preparation"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"EleTwist & CompuTwist:"})," Electronic yarn twist counters with digital display"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"EleWrap XT:"})," Electronic motorized yarn wrap reel with tension controller"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Electric Sliver & Roving Reel:"})," High-precision sliver length measurement"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Automatic & Manual Crockmeter:"})," Color rub-fastness testing units"]})]})]}),e.jsx("div",{className:"ancillary-action",children:e.jsxs("button",{className:"btn btn-secondary",onClick:()=>a&&a("Ancillary Instruments","Sales"),children:[e.jsx("span",{children:"Request Ancillary Catalog"}),e.jsx(v,{size:14})]})})]})})}),e.jsx("style",{children:`
        .solution-header-hero {
          padding-top: 2rem;
          padding-bottom: 4.5rem;
        }
        .solution-header-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
          margin-top: 1.5rem;
        }
        .solution-header-title {
          font-size: clamp(2.25rem, 4.5vw, 3.5rem);
          line-height: 1.1;
          margin: 0.5rem 0 1.25rem;
        }
        .solution-header-lead {
          font-size: 1.2rem;
          line-height: 1.65;
          color: #384A59;
          margin-bottom: 2rem;
        }
        .solution-actions-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .solution-header-media {
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 1.5rem;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-card);
        }
        .solution-hero-img-framed {
          width: 100%;
          max-height: 340px;
          object-fit: contain;
        }
        .media-legend-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          margin-top: 0.75rem;
          border-top: 1px solid var(--border-hairline);
        }
        .architecture-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .architecture-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .arch-card {
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          padding: 1.5rem;
          border-radius: var(--radius-sm);
        }
        .arch-title {
          display: block;
          font-size: 1rem;
          color: #17232D;
          margin-bottom: 0.4rem;
        }
        .arch-desc {
          font-size: 0.85rem;
          color: #647887;
          line-height: 1.5;
        }
        .converter-card .grid > div {
          transition: background-color var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
        }
        .converter-card .grid > div:hover {
          transform: translateY(-2px);
        }
        .lab-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .ancillary-section-box {
          background-color: #FAF9F6;
          border: 1px solid var(--border-subtle);
          padding: 2.5rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          flex-wrap: wrap;
        }
        .ancillary-list {
          list-style: none;
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .ancillary-list li {
          font-size: 0.875rem;
          color: #384A59;
        }
        .ancillary-list strong {
          color: #17232D;
        }

        @media (max-width: 1024px) {
          .solution-header-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .architecture-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .converter-card .grid > div {
          transition: background-color var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
        }
        .converter-card .grid > div:hover {
          transform: translateY(-2px);
        }
        .lab-products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .solution-actions-row {
            flex-direction: column;
            align-items: stretch;
            gap: 0.75rem;
          }
          .solution-actions-row .btn {
            width: 100%;
            justify-content: center;
          }
          .architecture-features {
            grid-template-columns: 1fr;
          }
          .converter-card {
            padding: 1.25rem 1rem !important;
          }
          .lab-products-grid {
            grid-template-columns: 1fr;
          }
          .ancillary-section-box {
            padding: 1.5rem 1.15rem;
            gap: 1.5rem;
          }
          .ancillary-section-box .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `})]})}function Ye({onOpenEnquiry:a}){const o=j.filter(m=>m.categorySlug==="spinning"),[t,d]=g.useState(18),[r,s]=g.useState(250),l=(t*.32).toFixed(1),i=(l*.28).toFixed(2);return e.jsxs("div",{className:"solution-category-page",children:[e.jsx("section",{className:"solution-header-hero bg-warm-ivory border-bottom-hairline bg-grid-blueprint relative",children:e.jsxs("div",{className:"container relative z-10",children:[e.jsx(F,{items:[{label:"Solutions",href:"/solutions"},{label:"Spinning Solutions"}]}),e.jsxs("div",{className:"solution-header-grid",children:[e.jsxs("div",{className:"solution-header-copy",children:[e.jsxs("div",{className:"header-badge-row",children:[e.jsx("span",{className:"badge-overline",children:"Division 02 · Spinning automation"}),e.jsx("span",{className:"badge-subtag font-mono",children:"DSP Control"})]}),e.jsx("h1",{className:"solution-header-title",children:"Spinning Solutions"}),e.jsx("p",{className:"solution-header-lead",children:"Patented short-term and long-term autolevellers, long-fibre gill box controllers, and real-time sliver quality monitors. Engineered to reduce sliver count variation by up to 70%."}),e.jsxs("div",{className:"solution-actions-row",children:[e.jsxs("button",{className:"btn btn-primary",onClick:()=>a&&a("TMS25-R2C Card Autoleveller","Sales"),children:[e.jsx("span",{children:"Request Card Retrofit Audit"}),e.jsx(v,{size:15})]}),e.jsx("a",{href:"#cv-calculator",className:"btn btn-secondary",children:e.jsx("span",{children:"CV% Regulation Simulator"})}),e.jsx("a",{href:"#spinning-products",className:"btn btn-secondary",children:e.jsxs("span",{children:["Browse Systems (",o.length,")"]})})]})]}),e.jsxs("div",{className:"solution-header-media relative",children:[e.jsx("div",{className:"drafting-crosshair top-left"}),e.jsx("div",{className:"drafting-crosshair top-right"}),e.jsx("div",{className:"drafting-crosshair bottom-left"}),e.jsx("div",{className:"drafting-crosshair bottom-right"}),e.jsx("img",{src:"/assets/card-autoleveller-tms25.jpg",alt:"Card Autoleveller TMS25-R2C Installation",className:"solution-hero-img-framed"}),e.jsxs("div",{className:"media-legend-bar",children:[e.jsx("span",{className:"font-mono text-xs text-graphite/70",children:"REF: TMS25-R2C HIGH PRODUCTION CARD"}),e.jsx("span",{className:"font-mono text-xs text-graphite/70",children:"TOLERANCE: CLASS 0.5"})]})]})]})]})}),e.jsx("section",{className:"section bg-white",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"spinning-highlight-grid",children:[e.jsxs("div",{className:"spinning-chart-card relative",children:[e.jsx("div",{className:"drafting-crosshair top-left"}),e.jsx("div",{className:"drafting-crosshair top-right"}),e.jsx("div",{className:"drafting-crosshair bottom-left"}),e.jsx("div",{className:"drafting-crosshair bottom-right"}),e.jsx("span",{className:"badge-overline",children:"Closed-loop autolevelling kinematics"}),e.jsx("h3",{style:{fontSize:"1.5rem",marginBottom:"0.75rem"},children:"70% Reduction in 1-Meter Sliver Count Variation"}),e.jsx("p",{style:{color:"#4D606E",fontSize:"0.95rem",lineHeight:"1.6",marginBottom:"1.5rem"},children:"By continuously measuring sliver thickness at the card delivery tongue and modulating the feed roll speed through millisecond AC brushless servo feedback, the TMS25-R2C levels out mass deviations before coiling."}),e.jsxs("div",{className:"spinning-diagram-box",children:[e.jsx("img",{src:"/assets/card-autoleveller-diagram.png",alt:"Autoleveller Control Circuit and Real-Time Signal Processing",style:{width:"100%",height:"auto",borderRadius:"4px"}}),e.jsx("span",{style:{display:"block",fontSize:"0.75rem",color:"#647887",marginTop:"0.75rem",fontFamily:"var(--font-mono)"},children:"Real-time DSP closed-loop signal diagram and thick places history"})]})]}),e.jsxs("div",{className:"spinning-retrofit-card relative",children:[e.jsx("div",{className:"drafting-crosshair top-left"}),e.jsx("div",{className:"drafting-crosshair top-right"}),e.jsx("div",{className:"drafting-crosshair bottom-left"}),e.jsx("div",{className:"drafting-crosshair bottom-right"}),e.jsx("span",{className:"badge-overline",children:"Turnkey retrofit packages"}),e.jsx("h3",{style:{fontSize:"1.5rem",marginBottom:"1rem"},children:"Turnkey Mechanical & Electronic Kits for Industrial Cards"}),e.jsx("p",{style:{color:"#384A59",fontSize:"0.95rem",lineHeight:"1.6",marginBottom:"1.25rem"},children:"Upgrading existing carding machines with Tomsic autolevellers provides modern count regularity without the multi-million Euro capital expenditure of replacing entire machinery lines. Complete pre-assembled kits available for:"}),e.jsxs("div",{className:"card-brand-chips",children:[e.jsxs("div",{className:"brand-chip",children:[e.jsx("strong",{children:"Rieter Cards"}),e.jsx("span",{children:"C4, C10, C50, C51"})]}),e.jsxs("div",{className:"brand-chip",children:[e.jsx("strong",{children:"Trützschler Cards"}),e.jsx("span",{children:"DK 740, DK 760, DK 803"})]}),e.jsxs("div",{className:"brand-chip",children:[e.jsx("strong",{children:"Marzoli Cards"}),e.jsx("span",{children:"CX300, CX400"})]}),e.jsxs("div",{className:"brand-chip",children:[e.jsx("strong",{children:"Crosrol Cards"}),e.jsx("span",{children:"MK4, MK5 Series"})]})]}),e.jsxs("div",{className:"thick-places-notice",children:[e.jsx(fe,{size:20,color:"#AA8B62",className:"flex-shrink-0 mt-0.5"}),e.jsxs("div",{children:[e.jsx("strong",{style:{display:"block",color:"#17232D",fontSize:"0.9rem"},children:"Built-in Thick Places Monitoring"}),e.jsx("span",{style:{fontSize:"0.8125rem",color:"#647887",display:"block",marginTop:"0.2rem"},children:"Detects sudden heavy sliver clusters, stores time history, and commands instantaneous machine stop before wire clothing damage."})]})]})]})]})})}),e.jsx("section",{className:"section bg-warm-ivory border-top-hairline",id:"cv-calculator",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-title-wrap text-center max-w-3xl mx-auto",style:{marginBottom:"2.5rem"},children:[e.jsx("span",{className:"badge-overline",children:"Sliver autolevelling simulation"}),e.jsx("h2",{style:{fontSize:"clamp(1.75rem, 3.5vw, 2.5rem)"},children:"Interactive Sliver Autolevelling Simulator"}),e.jsx("p",{style:{color:"#647887",fontSize:"1.05rem",marginTop:"0.5rem"},children:"Adjust incoming card chute mass variation and production delivery speed to inspect the estimated real-time damping performance of the Tomsic TMS25-R2C digital servo loop."})]}),e.jsxs("div",{className:"bg-white border border-border-subtle p-6 md:p-8 rounded-sm shadow-card max-w-4xl mx-auto relative",children:[e.jsx("div",{className:"drafting-crosshair top-left"}),e.jsx("div",{className:"drafting-crosshair top-right"}),e.jsx("div",{className:"drafting-crosshair bottom-left"}),e.jsx("div",{className:"drafting-crosshair bottom-right"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8 items-center pb-6 border-b border-border-hairline",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsxs("label",{className:"font-semibold text-sm text-graphite flex items-center gap-2",children:[e.jsx(ve,{size:16,className:"text-muted-bronze"}),"Incoming Chute Mass Deviation:"]}),e.jsxs("span",{className:"font-mono text-sm font-bold text-graphite bg-warm-ivory px-2 py-0.5 border border-border-subtle rounded-sm",children:["±",t,"%"]})]}),e.jsx("input",{type:"range",min:"5",max:"30",step:"1",value:t,onChange:m=>d(Number(m.target.value)),className:"w-full h-2 bg-warm-ivory rounded-lg appearance-none cursor-pointer accent-graphite"}),e.jsxs("div",{className:"flex justify-between text-[11px] text-graphite/50 font-mono mt-1",children:[e.jsx("span",{children:"±5% (Stable blend)"}),e.jsx("span",{children:"±18% (Average)"}),e.jsx("span",{children:"±30% (Severe unlevelness)"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsxs("label",{className:"font-semibold text-sm text-graphite flex items-center gap-2",children:[e.jsx(ye,{size:16,className:"text-muted-bronze"}),"Card Delivery Speed:"]}),e.jsxs("span",{className:"font-mono text-sm font-bold text-graphite bg-warm-ivory px-2 py-0.5 border border-border-subtle rounded-sm",children:[r," m/min"]})]}),e.jsx("input",{type:"range",min:"100",max:"400",step:"25",value:r,onChange:m=>s(Number(m.target.value)),className:"w-full h-2 bg-warm-ivory rounded-lg appearance-none cursor-pointer accent-graphite"}),e.jsxs("div",{className:"flex justify-between text-[11px] text-graphite/50 font-mono mt-1",children:[e.jsx("span",{children:"100 m/min"}),e.jsx("span",{children:"250 m/min (Standard)"}),e.jsx("span",{children:"400 m/min (Max)"})]})]})]}),e.jsxs("div",{className:"bg-graphite text-white p-6 rounded-sm relative overflow-hidden",children:[e.jsx("span",{className:"font-mono text-[10px] uppercase tracking-wider text-muted-bronze block mb-2",children:"DSP CLOSED-LOOP REGULATION OUTPUT"}),e.jsx("div",{className:"w-full bg-white/10 h-1.5 rounded-full overflow-hidden my-3",children:e.jsx("div",{className:"bg-emerald-400 h-full rounded-full transition-all duration-300 ease-out",style:{width:`${Math.min(100,Math.max(20,100-l*3.5))}%`}})}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 my-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-mono text-xs text-white/60 block",children:"Regulated Sliver Count Deviation"}),e.jsxs("strong",{className:"text-2xl md:text-3xl font-mono text-white block mt-1 transition-all duration-200",children:["±",l,"%"]}),e.jsx("span",{className:"text-[11px] text-emerald-400 font-mono",children:"~68% deviation dampened"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-mono text-xs text-white/60 block",children:"Estimated 1m Sliver CV%"}),e.jsxs("strong",{className:"text-2xl md:text-3xl font-mono text-white block mt-1 transition-all duration-200",children:[i,"%"]}),e.jsx("span",{className:"text-[11px] text-white/70 font-mono",children:"Within Uster 5% benchmark"})]})]}),e.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10 text-xs text-white/80 leading-relaxed font-sans",children:[e.jsx("strong",{children:"Digital Servo Response:"})," AC brushless motor operates at < 5ms lag from delivery tongue displacement, eliminating long-term periodicity in downstream drawframes and ring frames."]})]})]}),e.jsxs("div",{className:"mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-steel-blue",children:[e.jsx("span",{children:"* Empirical simulation based on Tomsic field test data from 500+ industrial installations."}),e.jsxs("button",{className:"btn btn-secondary text-xs py-2 px-3",onClick:()=>a&&a("TMS25-R2C Simulation Audit","Sales"),children:[e.jsx("span",{children:"Request Detailed Mill Calculation"}),e.jsx(v,{size:13})]})]})]})]})}),e.jsx("section",{className:"section bg-white border-top-hairline",id:"spinning-products",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-title-wrap",style:{marginBottom:"3rem"},children:[e.jsx("span",{className:"badge-overline",children:"Spinning automation portfolio"}),e.jsx("h2",{children:"Spinning Autolevelling & Monitoring Systems"}),e.jsx("p",{style:{color:"#647887",fontSize:"1.1rem",marginTop:"0.4rem"},children:"Engineered for short staple cotton and long staple wool, acrylic, and blended top processing."})]}),e.jsx("div",{className:"spinning-products-grid",children:o.map(m=>e.jsx(q,{product:m},m.slug))})]})}),e.jsx("section",{className:"section bg-warm-ivory border-top-hairline",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"bg-warm-ivory border border-border-subtle p-8 md:p-12 rounded-sm relative flex flex-col md:flex-row items-center justify-between gap-8",children:[e.jsxs("div",{className:"max-w-xl",children:[e.jsx("span",{className:"badge-overline",children:"Plant modernization consultation"}),e.jsx("h3",{className:"text-2xl md:text-3xl font-bold font-heading mb-3 text-graphite",children:"Have older Rieter, Trützschler, or Marzoli cards producing high CV%?"}),e.jsx("p",{className:"text-steel-blue text-sm leading-relaxed m-0",children:"Contact our Gorizia engineering team with your card brand, model year, and target delivery speeds. We provide complete retrofit mechanical blueprints and electrical wiring harnesses for turnkey field installation."})]}),e.jsx("div",{className:"flex-shrink-0",children:e.jsxs("button",{className:"btn btn-bronze",onClick:()=>a&&a("Card Retrofit Consultation","Technical Support"),children:[e.jsx("span",{children:"Request Card Retrofit Blueprint"}),e.jsx(v,{size:16})]})})]})})}),e.jsx("style",{children:`
        .solution-header-hero {
          padding-top: 2rem;
          padding-bottom: 4.5rem;
        }
        .solution-header-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
          margin-top: 1.5rem;
        }
        .solution-header-title {
          font-size: clamp(2.25rem, 4.5vw, 3.5rem);
          line-height: 1.1;
          margin: 0.5rem 0 1.25rem;
        }
        .solution-header-lead {
          font-size: 1.2rem;
          line-height: 1.65;
          color: #384A59;
          margin-bottom: 2rem;
        }
        .solution-actions-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .solution-header-media {
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 1.5rem;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-card);
        }
        .solution-hero-img-framed {
          width: 100%;
          max-height: 340px;
          object-fit: contain;
        }
        .media-legend-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          margin-top: 0.75rem;
          border-top: 1px solid var(--border-hairline);
        }
        .spinning-highlight-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3.5rem;
          align-items: start;
        }
        .spinning-chart-card {
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          padding: 2.25rem;
          border-radius: var(--radius-sm);
        }
        .spinning-diagram-box {
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 1rem;
          border-radius: var(--radius-xs);
        }
        .spinning-retrofit-card {
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 2.25rem;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-card);
        }
        .card-brand-chips {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
          margin-bottom: 1.75rem;
        }
        .brand-chip {
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-xs);
        }
        .brand-chip strong {
          display: block;
          font-size: 0.875rem;
          color: #17232D;
        }
        .brand-chip span {
          display: block;
          font-size: 0.75rem;
          color: #647887;
          margin-top: 0.15rem;
        }
        .thick-places-notice {
          display: flex;
          gap: 0.75rem;
          background-color: #FAF9F6;
          border: 1px solid #EAE6DF;
          padding: 1rem;
          border-radius: var(--radius-xs);
        }
        .spinning-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        @media (max-width: 1024px) {
          .solution-header-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .spinning-highlight-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .spinning-products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .solution-actions-row {
            flex-direction: column;
            align-items: stretch;
            gap: 0.75rem;
          }
          .solution-actions-row .btn {
            width: 100%;
            justify-content: center;
          }
          .spinning-chart-card, .spinning-retrofit-card {
            padding: 1.5rem 1.15rem;
          }
          .spinning-products-grid {
            grid-template-columns: 1fr;
          }
          .card-brand-chips {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Ue({onOpenEnquiry:a}){const o=j.filter(i=>i.categorySlug==="sugar"),[t,d]=g.useState(2),r=[{level:0,code:"GRADE 0",label:"Zero / Trace Stickiness",color:"#E2F0D9",textColor:"#2D5B18",reactionColor:"#D4E7C5",sugarContent:"< 0.10% sugar content",risk:"Negligible risk of roller lapping.",actionProtocol:"Direct processing without restrictions. Safe for high-speed rotor and ring spinning at standard mill relative humidity (55–65% RH)."},{level:1,code:"GRADE 1",label:"Light Stickiness",color:"#FFF2CC",textColor:"#7E6100",reactionColor:"#FFE599",sugarContent:"0.10% – 0.25% sugar content",risk:"Minor risk of accumulation on drafting aprons over long shifts.",actionProtocol:"Permissible in blowroom laydown up to 50% blend with Grade 0 cotton. Recommended daily cleaning of card crush rolls."},{level:2,code:"GRADE 2",label:"Moderate Stickiness",color:"#FCE5CD",textColor:"#8C3D00",reactionColor:"#F6B26B",sugarContent:"0.26% – 0.40% sugar content",risk:"High risk of rubber cot lapping, drawframe web sagging, and frequent end breaks.",actionProtocol:"Mandatory quarantine in warehouse. Restrict blend proportion to ≤ 15% mixed with non-sticky lots. Lower spinning room relative humidity to 48–52% RH."},{level:3,code:"GRADE 3",label:"Severe / Critical Stickiness",color:"#F8CECC",textColor:"#8C1D18",reactionColor:"#E06666",sugarContent:"> 0.40% entomological honeydew",risk:"Immediate mill stoppage. Catastrophic roller wrapping, cylinder choking, and traveler burning.",actionProtocol:"Strict bale rejection or mandatory treatment with Glucosil TMS55 enzyme neutralizing solution prior to opening. Do not process unblended."}],s=r[t],l=[{time:"00:00",title:"Lint Sampling",desc:"Extract 1.0g representative cotton tufts from diverse spots across the sampled bale."},{time:"04:00",title:"Reagent Extraction",desc:"Introduce standardized Tomsic TMS54 extraction solution to solubilize entomological insect honeydew."},{time:"09:00",title:"Thermal Activation",desc:"Place test vial in controlled heat block to trigger specific colorimetric sugar reaction kinetics."},{time:"15:00",title:"Colorimetric Readout",desc:"Compare reagent coloration against certified optical comparator scale for instant grade classification."}];return e.jsxs("div",{className:"solution-category-page",children:[e.jsx("section",{className:"solution-header-hero bg-warm-ivory border-bottom-hairline bg-grid-blueprint relative",children:e.jsxs("div",{className:"container relative z-10",children:[e.jsx(F,{items:[{label:"Solutions",href:"/solutions"},{label:"Sugar Solutions"}]}),e.jsxs("div",{className:"solution-header-grid",children:[e.jsxs("div",{className:"solution-header-copy",children:[e.jsxs("div",{className:"header-badge-row",children:[e.jsx("span",{className:"badge-overline",children:"Division 03 · Fibre contamination metrology"}),e.jsx("span",{className:"badge-subtag font-mono",children:"15-min protocol"})]}),e.jsx("h1",{className:"solution-header-title",children:"Sugar Solutions"}),e.jsx("p",{className:"solution-header-lead",children:"Standardized, fast 15-minute chemical diagnostic method to quantify sticky cotton and entomological sugar contamination before raw bales enter the spinning line."}),e.jsxs("div",{className:"solution-actions-row",children:[e.jsxs("button",{className:"btn btn-primary",onClick:()=>a&&a("TMS54 Cotton Sugar Test","Sales"),children:[e.jsx("span",{children:"Order TMS54 Starter Kit"}),e.jsx(v,{size:15})]}),e.jsx("a",{href:"#stickiness-scale",className:"btn btn-secondary",children:e.jsx("span",{children:"Interactive Stickiness Scale"})}),e.jsx("a",{href:"#sugar-products",className:"btn btn-secondary",children:e.jsxs("span",{children:["Browse Products (",o.length,")"]})})]})]}),e.jsxs("div",{className:"solution-header-media relative",children:[e.jsx("img",{src:"/assets/cotton-sugar-tms54.jpg",alt:"TMS54 Cotton Sugar Test Kit",className:"solution-hero-img-framed"}),e.jsxs("div",{className:"media-legend-bar",children:[e.jsx("span",{className:"font-mono text-xs text-graphite/70",children:"REF: TMS54-BENCH-KIT"}),e.jsx("span",{className:"font-mono text-xs text-graphite/70",children:"ORIGIN: GORIZIA, ITALY"})]})]})]})]})}),e.jsx("section",{className:"section bg-white",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"sugar-problem-grid",children:[e.jsxs("div",{className:"problem-card",children:[e.jsxs("div",{className:"problem-header",children:[e.jsx(je,{size:24,color:"#D97706"}),e.jsx("h3",{style:{fontSize:"1.4rem",color:"#17232D"},children:"The Threat: Sticky Cotton Contamination"})]}),e.jsxs("p",{style:{color:"#4D606E",fontSize:"0.95rem",lineHeight:"1.65",marginBottom:"1rem"},children:["Honeydew secreted by insect infestations (specifically ",e.jsx("em",{children:"Bemisia tabaci"})," whiteflies and cotton aphids) deposits high concentrations of non-reducing complex sugars (melezitose, trehalulose) onto cotton lint."]}),e.jsx("p",{style:{color:"#4D606E",fontSize:"0.95rem",lineHeight:"1.65"},children:"When processed under standard spinning room humidity, these sugars liquefy and adhere tenaciously to card wire clothing, drawframe rubber cots, and ring spinning travelers. This results in severe roller lapping, continuous yarn breaks, clogged suction tubes, and crippling mill downtime."})]}),e.jsxs("div",{className:"solution-approach-card",children:[e.jsxs("div",{className:"problem-header",children:[e.jsx(L,{size:24,color:"#AA8B62"}),e.jsx("h3",{style:{fontSize:"1.4rem",color:"#17232D"},children:"The Tomsic Protocol: 15-Minute Certainty"})]}),e.jsx("p",{style:{color:"#4D606E",fontSize:"0.95rem",lineHeight:"1.65",marginBottom:"1rem"},children:"The Tomsic TMS54 Cotton Sugar Test provides spinning mill laboratories with an affordable, rapid chemical colorimetric method. In just 15 minutes, technician personnel can classify incoming bale lots into standardized stickiness grades before opening."}),e.jsxs("ul",{className:"sugar-benefits-list",children:[e.jsxs("li",{children:[e.jsx(z,{size:16,color:"#AA8B62",className:"flex-shrink-0 mt-0.5"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Pre-Production Screening:"})," Quarantines high-risk sticky bales in the warehouse before entering blowroom blend lines."]})]}),e.jsxs("li",{children:[e.jsx(z,{size:16,color:"#AA8B62",className:"flex-shrink-0 mt-0.5"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Scientific Blending:"})," Allows controlled laydown blending of mildly contaminated cotton with clean bales without risking machine stoppage."]})]}),e.jsxs("li",{children:[e.jsx(z,{size:16,color:"#AA8B62",className:"flex-shrink-0 mt-0.5"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Glucosil Standard Calibration:"})," TMS55 reagent guarantees consistent reaction kinetics regardless of lab ambient temperature."]})]})]})]})]})})}),e.jsx("section",{className:"section bg-warm-ivory border-top-hairline",id:"stickiness-scale",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-title-wrap text-center max-w-3xl mx-auto",style:{marginBottom:"2.5rem"},children:[e.jsx("span",{className:"badge-overline",children:"Stickiness calibration scale"}),e.jsx("h2",{style:{fontSize:"clamp(1.75rem, 3.5vw, 2.5rem)"},children:"Interactive Colorimetric Stickiness Scale"}),e.jsx("p",{style:{color:"#647887",fontSize:"1.05rem",marginTop:"0.5rem"},children:"Select a stickiness classification grade below to inspect the verified colorimetric threshold, chemical concentration, and mill action protocol."})]}),e.jsxs("div",{className:"scale-widget-card bg-white border border-border-subtle p-6 md:p-8 rounded-sm shadow-card max-w-4xl mx-auto mb-16 relative",children:[e.jsx("div",{className:"sugar-grade-tabs",role:"tablist",children:r.map((i,m)=>e.jsxs("button",{type:"button",role:"tab","aria-selected":t===m,onClick:()=>d(m),className:`sugar-grade-tab ${t===m?"active":""}`,children:[e.jsxs("div",{className:"tab-top-row",children:[e.jsx("span",{className:"tab-code font-mono",children:i.code}),e.jsx("span",{className:"tab-color-dot",style:{backgroundColor:i.reactionColor}})]}),e.jsx("div",{className:"tab-label",children:i.label})]},i.code))}),e.jsxs("div",{className:"grade-display-box",style:{backgroundColor:s.color,borderColor:s.reactionColor},children:[e.jsxs("div",{className:"grade-header-row",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"grade-badge-title-row",children:[e.jsx("span",{className:"grade-pill-tag font-mono",children:s.code}),e.jsx("h3",{className:"grade-name-title",children:s.label})]}),e.jsxs("div",{className:"grade-conc-text font-mono",style:{color:s.textColor},children:["Concentration: ",s.sugarContent]})]}),e.jsxs("div",{className:"reaction-badge-card",children:[e.jsx("span",{className:"reaction-circle-preview",style:{backgroundColor:s.reactionColor}}),e.jsxs("div",{className:"reaction-text-col",children:[e.jsx("span",{className:"reaction-label font-mono",children:"REACTION HUE"}),e.jsx("strong",{className:"reaction-val font-mono",children:"Calibrated Optical Index"})]})]})]}),e.jsxs("div",{className:"grade-assessment-grid",children:[e.jsxs("div",{className:"assessment-col",children:[e.jsx("span",{className:"assessment-label font-mono",children:"OPERATIONAL RISK ASSESSMENT"}),e.jsx("p",{className:"assessment-text",children:s.risk})]}),e.jsxs("div",{className:"assessment-col",children:[e.jsx("span",{className:"assessment-label font-mono",children:"RECOMMENDED MILL ACTION PROTOCOL"}),e.jsx("p",{className:"assessment-text",children:s.actionProtocol})]})]})]})]}),e.jsxs("div",{className:"protocol-timeline-box max-w-4xl mx-auto",children:[e.jsxs("div",{className:"text-center",style:{marginBottom:"2rem"},children:[e.jsx("span",{className:"badge-overline",children:"15-minute chemical method"}),e.jsx("h3",{style:{fontSize:"1.75rem",fontWeight:700,color:"#17232D",margin:"0.4rem 0"},children:"The 15-Minute Testing Procedure"}),e.jsx("p",{style:{color:"#647887",fontSize:"0.9375rem"},children:"No complex chromatography or hazardous gas required. Performed on standard laboratory benchtop."})]}),e.jsx("div",{className:"procedure-steps-grid",children:l.map((i,m)=>e.jsxs("div",{className:"procedure-step-card relative",children:[e.jsxs("div",{className:"step-card-header",children:[e.jsxs("span",{className:"step-time font-mono",children:[i.time," MIN"]}),e.jsxs("span",{className:"step-num font-mono",children:["STEP 0",m+1]})]}),e.jsx("h4",{className:"step-title",children:i.title}),e.jsx("p",{className:"step-desc",children:i.desc})]},m))})]})]})}),e.jsx("section",{className:"section bg-white border-top-hairline",id:"sugar-products",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-title-wrap",style:{marginBottom:"3rem"},children:[e.jsx("span",{className:"badge-overline",children:"Sugar solutions portfolio"}),e.jsx("h2",{children:"Sugar Solutions Lineup"}),e.jsx("p",{style:{color:"#647887",fontSize:"1.1rem",marginTop:"0.4rem"},children:"Standardized reagents and testing kits formulated and packaged in Savogna d'Isonzo, Italy."})]}),e.jsx("div",{className:"sugar-products-grid",children:o.map(i=>e.jsx(q,{product:i},i.slug))})]})}),e.jsx("section",{className:"section bg-warm-ivory border-top-hairline",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"bg-graphite text-white p-8 md:p-12 rounded-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8",children:[e.jsxs("div",{className:"relative z-10 max-w-xl",children:[e.jsx("span",{className:"font-mono text-xs uppercase tracking-wider text-muted-bronze block mb-2",children:"MILL RISK AUDIT"}),e.jsx("h3",{className:"text-2xl md:text-3xl font-bold font-heading mb-3",children:"Experiencing roller lapping on your carding or spinning lines?"}),e.jsx("p",{className:"text-white/80 text-sm leading-relaxed m-0",children:"Send representative raw cotton tufts directly to the Tomsic laboratory in Gorizia, Italy for complimentary diagnostic sugar level screening and Glucosil neutralization consultation."})]}),e.jsx("div",{className:"relative z-10 flex-shrink-0",children:e.jsxs("button",{className:"btn btn-bronze",onClick:()=>a&&a("TMS54 Cotton Sugar Screening","Service"),children:[e.jsx("span",{children:"Request Lab Sample Screening"}),e.jsx(v,{size:16})]})})]})})}),e.jsx("style",{children:`
        .solution-header-hero {
          padding-top: 2rem;
          padding-bottom: 4.5rem;
        }
        .solution-header-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
          margin-top: 1.5rem;
        }
        .solution-header-title {
          font-size: clamp(2.25rem, 4.5vw, 3.5rem);
          line-height: 1.1;
          margin: 0.5rem 0 1.25rem;
        }
        .solution-header-lead {
          font-size: 1.2rem;
          line-height: 1.65;
          color: #384A59;
          margin-bottom: 2rem;
        }
        .solution-actions-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .solution-header-media {
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 1.5rem;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-card);
        }
        .solution-hero-img-framed {
          width: 100%;
          max-height: 340px;
          object-fit: contain;
        }
        .media-legend-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          margin-top: 0.75rem;
          border-top: 1px solid var(--border-hairline);
        }
        .grade-display-box {
          transition: background-color var(--transition-normal), border-color var(--transition-normal);
        }
        .scale-widget-card button {
          transition: all var(--transition-fast);
        }
        .sugar-problem-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }
        .problem-card {
          background-color: #FFFBEB;
          border: 1px solid #FDE68A;
          padding: 2.25rem;
          border-radius: var(--radius-sm);
        }
        .solution-approach-card {
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          padding: 2.25rem;
          border-radius: var(--radius-sm);
        }
        .problem-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .sugar-benefits-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          font-size: 0.875rem;
          color: #384A59;
          margin-top: 1.25rem;
          border-top: 1px solid var(--border-hairline);
          padding-top: 1rem;
        }
        .sugar-benefits-list li {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }
        .sugar-benefits-list strong {
          color: #17232D;
        }
        .sugar-products-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .sugar-grade-tabs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .sugar-grade-tab {
          padding: 0.85rem 1rem;
          text-align: left;
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 74px;
          box-sizing: border-box;
        }
        .sugar-grade-tab:hover {
          border-color: var(--color-graphite);
          background-color: #FAF9F6;
        }
        .sugar-grade-tab.active {
          border-color: var(--color-graphite);
          background-color: #FFFFFF;
          box-shadow: 0 0 0 2px var(--color-graphite);
        }
        .tab-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.35rem;
        }
        .tab-code {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-graphite);
        }
        .tab-color-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.2);
          flex-shrink: 0;
          display: inline-block;
        }
        .tab-label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-graphite);
          line-height: 1.3;
        }
        .grade-display-box {
          padding: 2rem;
          border-radius: var(--radius-sm);
          border-width: 1px;
          border-style: solid;
          transition: background-color var(--transition-normal), border-color var(--transition-normal);
        }
        .grade-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(23, 35, 45, 0.12);
          flex-wrap: wrap;
        }
        .grade-badge-title-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .grade-pill-tag {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-xs);
          background-color: rgba(0, 0, 0, 0.08);
          color: var(--color-graphite);
        }
        .grade-name-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-graphite);
          margin: 0;
          font-family: var(--font-heading);
        }
        .grade-conc-text {
          font-size: 0.875rem;
          font-weight: 600;
          margin-top: 0.35rem;
        }
        .reaction-badge-card {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          background-color: rgba(255, 255, 255, 0.95);
          padding: 0.65rem 1rem;
          border-radius: var(--radius-xs);
          border: 1px solid rgba(20, 29, 36, 0.12);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
        }
        .reaction-circle-preview {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid #FFFFFF;
          box-shadow: 0 1px 4px rgba(0,0,0,0.25);
          flex-shrink: 0;
          display: inline-block;
        }
        .reaction-text-col {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
        }
        .reaction-label {
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #5C7080;
          display: block;
          margin-bottom: 0.15rem;
        }
        .reaction-val {
          font-size: 0.8125rem;
          color: #141D24;
          font-weight: 600;
        }
        .grade-assessment-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 1.5rem;
        }
        .assessment-label {
          display: block;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: rgba(23, 35, 45, 0.7);
          margin-bottom: 0.35rem;
        }
        .assessment-text {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--color-graphite);
          margin: 0;
          font-weight: 500;
        }
        .procedure-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        .procedure-step-card {
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 1.5rem 1.25rem;
          border-radius: var(--radius-xs);
          display: flex;
          flex-direction: column;
        }
        .step-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }
        .step-time {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-accent);
          background: rgba(197, 55, 39, 0.08);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-xs);
        }
        .step-num {
          font-size: 0.6875rem;
          color: #8E9EA9;
          font-weight: 600;
        }
        .step-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-graphite);
          margin: 0 0 0.4rem;
        }
        .step-desc {
          font-size: 0.8125rem;
          color: #4D606E;
          line-height: 1.55;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .solution-header-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .sugar-problem-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 768px) {
          .sugar-grade-tabs {
            grid-template-columns: 1fr 1fr;
            gap: 0.65rem;
          }
          .procedure-steps-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .grade-assessment-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .grade-display-box {
            padding: 1.5rem 1.25rem;
          }
        }
        @media (max-width: 640px) {
          .grade-header-row {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }
          .reaction-badge-card {
            width: 100%;
            box-sizing: border-box;
            justify-content: flex-start;
          }
          .solution-actions-row {
            flex-direction: column;
            align-items: stretch;
            gap: 0.75rem;
          }
          .solution-actions-row .btn {
            width: 100%;
            justify-content: center;
          }
          .scale-widget-card {
            padding: 1.25rem 1rem !important;
          }
          .problem-card, .solution-approach-card {
            padding: 1.5rem 1.15rem;
          }
          .sugar-products-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 520px) {
          .sugar-grade-tabs {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          .sugar-grade-tab {
            padding: 0.85rem 1rem;
            min-height: auto;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
          .tab-top-row {
            margin-bottom: 0;
            gap: 0.75rem;
          }
          .tab-code {
            font-size: 0.8125rem;
          }
          .tab-label {
            font-size: 0.8125rem;
            text-align: right;
          }
        }
      `})]})}function Ve({specifications:a=[],title:o="Technical Specifications"}){return!a||a.length===0?null:e.jsxs("div",{className:"spec-table-container",children:[o&&e.jsxs("div",{className:"spec-table-header",children:[e.jsx("h4",{className:"spec-table-title",children:o}),e.jsx("span",{className:"spec-meta-tag font-mono",children:"Class 0.5 metrology standard"})]}),e.jsx("div",{className:"spec-table-responsive",children:e.jsxs("table",{className:"spec-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",style:{width:"38%"},children:"Parameter"}),e.jsx("th",{scope:"col",children:"Design Specification / Engineering Standard"})]})}),e.jsx("tbody",{children:a.map((t,d)=>e.jsxs("tr",{className:d%2===0?"row-even":"row-odd",children:[e.jsx("td",{className:"spec-param",children:t.parameter}),e.jsx("td",{className:"spec-val tabular-nums",children:t.value})]},d))})]})}),e.jsx("style",{children:`
        .spec-table-container {
          margin: 1.5rem 0;
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          overflow: hidden;
          box-shadow: var(--shadow-subtle);
        }
        .spec-table-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.1rem 1.5rem;
          background-color: #FAF9F6;
          border-bottom: 1px solid var(--border-hairline);
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .spec-table-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-graphite);
          margin: 0;
        }
        .spec-meta-tag {
          font-size: 0.7rem;
          color: var(--color-steel-blue);
          font-weight: 500;
          letter-spacing: 0.04em;
        }
        .spec-table-responsive {
          width: 100%;
          overflow-x: auto;
        }
        .spec-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.8875rem;
        }
        .spec-table th {
          background-color: var(--color-warm-ivory);
          color: var(--color-graphite);
          font-weight: 700;
          font-size: 0.775rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 0.85rem 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
          font-family: var(--font-body);
        }
        .spec-table td {
          padding: 0.9rem 1.5rem;
          border-bottom: 1px solid var(--border-hairline);
          vertical-align: top;
          line-height: 1.55;
        }
        .spec-table tr:last-child td {
          border-bottom: none;
        }
        .spec-param {
          color: var(--color-graphite);
          font-weight: 600;
        }
        .spec-val {
          color: #384A59;
        }
        .row-odd {
          background-color: #FAF9F6;
        }
        .row-even {
          background-color: #FFFFFF;
        }

        @media (max-width: 640px) {
          .spec-table-header {
            padding: 0.85rem 1rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.35rem;
          }
          .spec-table {
            min-width: 320px;
            font-size: 0.8125rem;
          }
          .spec-table th, .spec-table td {
            padding: 0.75rem 0.85rem;
          }
          .spec-table th:first-child, .spec-table td:first-child {
            width: 44%;
          }
        }
      `})]})}function We({onOpenEnquiry:a}){var U,V,W,$;const{slug:o}=ce(),t=j.find(b=>b.slug===o);if(!t)return e.jsx(de,{to:"/products/easy-evenness-tester",replace:!0});const[d,r]=g.useState(t.primaryImage),[s,l]=g.useState("specs"),[i,m]=g.useState(!1),[n,x]=g.useState("20"),[u,f]=g.useState("Ne"),c=((b,y)=>{const C=parseFloat(b);if(isNaN(C)||C<=0)return{tex:"—",Ne:"—",Nm:"—",dtex:"—",Den:"—"};let N=0;return y==="tex"?N=C:y==="Ne"?N=590.54/C:y==="Nm"?N=1e3/C:y==="dtex"?N=C/10:y==="Den"&&(N=C/9),{tex:N.toFixed(2),Ne:(590.54/N).toFixed(2),Nm:(1e3/N).toFixed(2),dtex:(N*10).toFixed(1),Den:(N*9).toFixed(1)}})(n,u),M=j.filter(b=>t.relatedProducts&&t.relatedProducts.includes(b.slug));return e.jsxs("div",{className:"product-detail-page",children:[e.jsx("section",{className:"product-breadcrumb-bar bg-warm-ivory border-bottom-hairline",children:e.jsx("div",{className:"container",children:e.jsx(F,{items:[{label:"Solutions",href:"/solutions"},{label:t.category,href:`/solutions/${t.categorySlug}`},{label:t.name}]})})}),e.jsx("section",{className:"section-sm bg-white",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"product-hero-layout",children:[e.jsxs("div",{className:"product-gallery-col",children:[e.jsxs("div",{className:"main-image-display",onClick:()=>m(!0),title:"Click to inspect enlarged view",children:[e.jsx("span",{className:"drafting-crosshair",style:{top:"8px",left:"8px"}}),e.jsx("span",{className:"drafting-crosshair",style:{top:"8px",right:"8px"}}),e.jsx("span",{className:"drafting-crosshair",style:{bottom:"8px",left:"8px"}}),e.jsx("span",{className:"drafting-crosshair",style:{bottom:"8px",right:"8px"}}),e.jsx("img",{src:d,alt:t.name,className:"main-view-img"}),t.badge&&e.jsx("span",{className:"main-image-badge font-mono",children:t.badge}),e.jsxs("div",{className:"inspect-lens-hint font-mono",children:[e.jsx(we,{size:13}),e.jsx("span",{children:"ENLARGE VIEW"})]})]}),t.gallery&&t.gallery.length>1&&e.jsx("div",{className:"thumbnail-track",children:t.gallery.map((b,y)=>e.jsx("button",{className:`thumbnail-btn ${d===b.url?"active":""}`,onClick:()=>r(b.url),title:b.title,children:e.jsx("img",{src:b.url,alt:b.title})},y))})]}),e.jsxs("div",{className:"product-summary-col",children:[e.jsxs("div",{className:"product-meta-header font-mono",children:[e.jsx("span",{className:"product-code-pill",children:t.code}),e.jsx("span",{className:"product-cat-label",children:t.category}),e.jsx("span",{className:"product-origin-label",children:"SAVOGNA D’ISONZO (GO), ITALY"})]}),e.jsx("h1",{className:"product-main-title",children:t.name}),e.jsx("p",{className:"product-tagline-lead",children:t.tagline}),e.jsx("p",{className:"product-body-overview",children:t.description}),e.jsxs("div",{className:"product-action-block",children:[e.jsxs("button",{className:"btn btn-primary",onClick:()=>a&&a(t.name,"Sales"),children:[e.jsx("span",{children:"Request Technical Quotation"}),e.jsx(v,{size:15})]}),e.jsxs("button",{className:"btn btn-secondary",onClick:()=>a&&a(t.name,"Sales"),children:[e.jsx(Ne,{size:14}),e.jsx("span",{children:"Download Specs PDF"})]})]}),e.jsxs("div",{className:"fast-facts-card",children:[e.jsxs("div",{className:"fast-fact-item",children:[e.jsx("span",{className:"fact-label",children:"Manufacturing Origin:"}),e.jsx("strong",{className:"fact-val",children:"Savogna d’Isonzo (GO), Italy · 100% In-House"})]}),e.jsxs("div",{className:"fast-fact-item",children:[e.jsx("span",{className:"fact-label",children:"Software Platform:"}),e.jsx("strong",{className:"fact-val font-mono",children:"Microsoft .NET / Windows 10 & 11"})]}),e.jsxs("div",{className:"fast-fact-item",children:[e.jsx("span",{className:"fact-label",children:"Reference Standard:"}),e.jsx("strong",{className:"fact-val font-mono",children:"ISO 2062 / ASTM D2256 / ACIMIT Certified"})]}),e.jsxs("div",{className:"fast-fact-item",children:[e.jsx("span",{className:"fact-label",children:"Database Synchronization:"}),e.jsx("strong",{className:"fact-val",children:"Link Job Real-Time Inter-Machine SQL"})]})]})]})]})})}),e.jsx("section",{className:"section bg-warm-ivory border-top-hairline",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"product-tabs-header",children:[e.jsxs("button",{className:`product-tab-btn ${s==="specs"?"active":""}`,onClick:()=>l("specs"),children:[e.jsx("span",{children:"Certified Specifications"}),e.jsxs("span",{className:"tab-count font-mono",children:["(",((U=t.specifications)==null?void 0:U.length)||0,")"]})]}),e.jsxs("button",{className:`product-tab-btn ${s==="features"?"active":""}`,onClick:()=>l("features"),children:[e.jsx("span",{children:"Capabilities & Applications"}),e.jsxs("span",{className:"tab-count font-mono",children:["(",((V=t.features)==null?void 0:V.length)||0,")"]})]}),e.jsxs("button",{className:`product-tab-btn ${s==="converter"?"active":""}`,onClick:()=>l("converter"),children:[e.jsx(Se,{size:15,style:{marginRight:"4px"}}),e.jsx("span",{children:"Textile Count Calculator"})]}),t.modularOptions&&e.jsxs("button",{className:`product-tab-btn ${s==="modules"?"active":""}`,onClick:()=>l("modules"),children:[e.jsx("span",{children:"Modular Add-Ons"}),e.jsxs("span",{className:"tab-count font-mono",children:["(",t.modularOptions.length,")"]})]})]}),e.jsxs("div",{className:"product-tab-content-panel",children:[s==="specs"&&e.jsxs("div",{className:"tab-pane-fade",children:[e.jsx(Ve,{specifications:t.specifications,title:`${t.name} — Verified Engineering Specifications`}),e.jsxs("div",{className:"spec-notes-box font-mono",children:[e.jsx(L,{size:18,color:"#A48256",style:{flexShrink:0}}),e.jsx("span",{children:"SPECIFICATIONS VERIFIED AGAINST TOMSIC S.R.L. OFFICIAL ENGINEERING ARCHIVES. CALIBRATION CONDUCTED PRIOR TO DISPATCH AT SAVOGNA D'ISONZO."})]})]}),s==="features"&&e.jsx("div",{className:"tab-pane-fade",children:e.jsxs("div",{className:"features-applications-grid",children:[e.jsxs("div",{className:"features-list-col",children:[e.jsx("h3",{style:{fontSize:"1.35rem",marginBottom:"1.25rem"},children:"Engineered Capabilities"}),e.jsx("div",{className:"features-detailed-stack",children:(W=t.features)==null?void 0:W.map((b,y)=>e.jsxs("div",{className:"feature-block-item",children:[e.jsx("strong",{className:"feature-item-title",children:b.title}),e.jsx("p",{className:"feature-item-desc",children:b.description})]},y))})]}),e.jsxs("div",{className:"applications-list-col",children:[e.jsx("h3",{style:{fontSize:"1.35rem",marginBottom:"1.25rem"},children:"Mill Applications"}),e.jsx("ul",{className:"applications-detailed-list",children:($=t.applications)==null?void 0:$.map((b,y)=>e.jsxs("li",{className:"app-item",children:[e.jsx(z,{size:16,color:"#A48256",className:"app-icon"}),e.jsx("span",{children:b})]},y))})]})]})}),s==="converter"&&e.jsx("div",{className:"tab-pane-fade",children:e.jsxs("div",{className:"converter-panel-card",children:[e.jsx("div",{className:"converter-header",children:e.jsxs("div",{children:[e.jsx("span",{className:"text-meta font-mono",children:"LABORATORY METROLOGY UTILITY"}),e.jsx("h3",{style:{fontSize:"1.45rem",marginTop:"0.25rem"},children:"Textile Yarn Count & Linear Density Converter"}),e.jsx("p",{style:{color:"#5C7080",fontSize:"0.9rem",marginTop:"0.2rem"},children:"Used daily in spinning laboratories to calibrate test protocols across English Cotton (Ne), Metric (Nm), Tex, Decitex, and Denier."})]})}),e.jsxs("div",{className:"converter-calc-row",children:[e.jsxs("div",{className:"calc-input-group",children:[e.jsx("label",{htmlFor:"calc-val",className:"font-mono",children:"ENTER VALUE:"}),e.jsx("input",{id:"calc-val",type:"number",step:"0.1",value:n,onChange:b=>x(b.target.value),className:"font-mono tabular-nums"})]}),e.jsxs("div",{className:"calc-unit-group",children:[e.jsx("label",{htmlFor:"calc-unit",className:"font-mono",children:"SELECT SOURCE SYSTEM:"}),e.jsxs("select",{id:"calc-unit",value:u,onChange:b=>f(b.target.value),className:"font-mono",children:[e.jsx("option",{value:"Ne",children:"Ne (English Cotton Count)"}),e.jsx("option",{value:"Nm",children:"Nm (Metric Number)"}),e.jsx("option",{value:"tex",children:"tex (Grams per 1,000 meters)"}),e.jsx("option",{value:"dtex",children:"dtex (Decitex - Synthetics)"}),e.jsx("option",{value:"Den",children:"Den (Denier - Filaments)"})]})]})]}),e.jsxs("div",{className:"converter-results-grid",children:[e.jsxs("div",{className:`result-box ${u==="Ne"?"source-box":""}`,children:[e.jsx("span",{className:"result-label font-mono",children:"Ne (English Cotton)"}),e.jsx("strong",{className:"result-val font-mono tabular-nums",children:c.Ne}),e.jsx("span",{className:"result-sub",children:"tex = 590.54 / Ne"})]}),e.jsxs("div",{className:`result-box ${u==="Nm"?"source-box":""}`,children:[e.jsx("span",{className:"result-label font-mono",children:"Nm (Metric Number)"}),e.jsx("strong",{className:"result-val font-mono tabular-nums",children:c.Nm}),e.jsx("span",{className:"result-sub",children:"Nm = 1000 / tex"})]}),e.jsxs("div",{className:`result-box ${u==="tex"?"source-box":""}`,children:[e.jsx("span",{className:"result-label font-mono",children:"tex (Universal Mass)"}),e.jsx("strong",{className:"result-val font-mono tabular-nums",children:c.tex}),e.jsx("span",{className:"result-sub",children:"g / 1,000 meters"})]}),e.jsxs("div",{className:`result-box ${u==="dtex"?"source-box":""}`,children:[e.jsx("span",{className:"result-label font-mono",children:"dtex (Decitex)"}),e.jsx("strong",{className:"result-val font-mono tabular-nums",children:c.dtex}),e.jsx("span",{className:"result-sub",children:"dtex = tex * 10"})]}),e.jsxs("div",{className:`result-box ${u==="Den"?"source-box":""}`,children:[e.jsx("span",{className:"result-label font-mono",children:"Denier"}),e.jsx("strong",{className:"result-val font-mono tabular-nums",children:c.Den}),e.jsx("span",{className:"result-sub",children:"Den = tex * 9"})]})]})]})}),s==="modules"&&t.modularOptions&&e.jsx("div",{className:"tab-pane-fade",children:e.jsx("div",{className:"modules-grid",children:t.modularOptions.map((b,y)=>e.jsxs("div",{className:"module-item-card",children:[e.jsxs("div",{className:"module-header",children:[e.jsx(ke,{size:17,color:"#A48256"}),e.jsx("h4",{className:"module-name",children:b.name})]}),e.jsx("p",{className:"module-desc",children:b.description})]},y))})})]})]})}),e.jsx("section",{className:"section-sm bg-white border-top-hairline",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"catalogue-banner",children:[e.jsxs("div",{className:"catalogue-info",children:[e.jsx(Fe,{size:30,color:"#A48256",className:"cat-icon"}),e.jsxs("div",{children:[e.jsx("span",{className:"badge-overline",children:"Technical documentation"}),e.jsx("h3",{style:{fontSize:"1.35rem",marginTop:"0.2rem"},children:t.officialCatalogName||"TOMSIC Technical Specification Leaflet"}),e.jsx("p",{style:{color:"#5C7080",fontSize:"0.875rem",marginTop:"0.25rem"},children:"Dimensional engineering diagrams, pneumatic parameters, power ratings, and sample report prints."})]})]}),e.jsx("div",{className:"catalogue-action",children:e.jsxs("button",{className:"btn btn-primary",onClick:()=>a&&a(t.name,"Sales"),children:[e.jsx("span",{children:"Request Document PDF"}),e.jsx(v,{size:14})]})})]})})}),M.length>0&&e.jsx("section",{className:"section bg-warm-ivory border-top-hairline",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-title-wrap",style:{marginBottom:"2.5rem"},children:[e.jsx("span",{className:"badge-overline",children:"Inter-machine integration"}),e.jsx("h2",{children:"Related Systems & Instruments"}),e.jsx("p",{style:{color:"#5C7080",fontSize:"1.05rem",marginTop:"0.35rem"},children:"Compatible testing units communicating via unified Link Job database records."})]}),e.jsx("div",{className:"related-products-grid",children:M.map(b=>e.jsx(q,{product:b},b.slug))})]})}),i&&e.jsx("div",{className:"lightbox-backdrop",onClick:()=>m(!1),children:e.jsxs("div",{className:"lightbox-content",onClick:b=>b.stopPropagation(),children:[e.jsx("button",{className:"lightbox-close",onClick:()=>m(!1),children:e.jsx(B,{size:22})}),e.jsx("img",{src:d,alt:t.name,className:"lightbox-img"}),e.jsxs("span",{className:"lightbox-caption font-mono",children:[t.name," · High-Resolution Inspection"]})]})}),e.jsx("style",{children:`
        .product-breadcrumb-bar {
          padding: 0.5rem 0;
        }
        .product-detail-page {
          overflow-x: hidden;
          width: 100%;
        }
        .product-hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
          min-width: 0;
        }
        .product-gallery-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          min-width: 0;
          max-width: 100%;
        }
        .product-summary-col {
          min-width: 0;
          max-width: 100%;
        }
        .main-image-display {
          position: relative;
          background-color: #FAF9F6;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2.5rem;
          box-shadow: var(--shadow-card);
          cursor: zoom-in;
        }
        .main-view-img {
          max-height: 100%;
          width: auto;
          object-fit: contain;
          transition: transform var(--transition-smooth);
        }
        .main-image-display:hover .main-view-img {
          transform: scale(1.02);
        }
        .main-image-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background-color: var(--color-graphite);
          color: #FFFFFF;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-xs);
        }
        .inspect-lens-hint {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.6875rem;
          color: var(--color-steel-blue);
          background-color: rgba(255, 255, 255, 0.85);
          padding: 0.25rem 0.55rem;
          border-radius: var(--radius-xs);
          border: 1px solid var(--border-hairline);
        }
        .thumbnail-track {
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
          max-width: 100%;
          width: 100%;
          padding-bottom: 0.5rem;
          -webkit-overflow-scrolling: touch;
        }
        .thumbnail-btn {
          width: 80px;
          height: 80px;
          background: #FAF9F6;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
          padding: 0.35rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color var(--transition-fast);
          flex-shrink: 0;
        }
        .thumbnail-btn img {
          max-height: 100%;
          width: auto;
          object-fit: contain;
        }
        .thumbnail-btn:hover {
          border-color: var(--color-muted-bronze);
        }
        .thumbnail-btn.active {
          border-color: var(--color-muted-bronze);
          box-shadow: 0 0 0 2px rgba(164, 130, 86, 0.3);
        }

        /* Product Summary Col */
        .product-meta-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
        .product-code-pill {
          background-color: var(--color-graphite);
          color: #FFFFFF;
          font-size: 0.725rem;
          font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-xs);
          letter-spacing: 0.05em;
        }
        .product-cat-label {
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--color-muted-bronze);
          text-transform: uppercase;
        }
        .product-origin-label {
          font-size: 0.725rem;
          color: var(--color-steel-blue);
        }
        .product-main-title {
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          margin-bottom: 0.6rem;
          line-height: 1.15;
        }
        .product-tagline-lead {
          font-size: 1.15rem;
          font-weight: 500;
          color: #4D606E;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        .product-body-overview {
          font-size: 0.975rem;
          line-height: 1.65;
          color: #384A59;
          margin-bottom: 2rem;
        }
        .product-action-block {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.25rem;
          flex-wrap: wrap;
        }
        .fast-facts-card {
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          padding: 1.25rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .fast-fact-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.825rem;
        }
        .fact-label {
          color: #647887;
        }
        .fact-val {
          color: var(--color-graphite);
          text-align: right;
        }

        /* Tabs */
        .product-tabs-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          border-bottom: 2px solid var(--border-subtle);
          margin-bottom: 2rem;
          overflow-x: auto;
        }
        .product-tab-btn {
          background: none;
          border: none;
          padding: 1rem 0.25rem;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-steel-blue);
          cursor: pointer;
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: color var(--transition-fast);
          white-space: nowrap;
        }
        .product-tab-btn:hover {
          color: var(--color-graphite);
        }
        .product-tab-btn.active {
          color: var(--color-graphite);
          font-weight: 700;
        }
        .product-tab-btn.active::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: var(--color-muted-bronze);
        }
        .tab-count {
          font-size: 0.775rem;
          color: #8E9EA9;
        }
        .tab-pane-fade {
          animation: tabFade 0.25s var(--ease-editorial);
        }
        @keyframes tabFade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .spec-notes-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          color: #5C7080;
          margin-top: 1rem;
          line-height: 1.5;
        }
        .features-applications-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3.5rem;
        }
        .features-detailed-stack {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .feature-block-item {
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-sm);
        }
        .feature-item-title {
          display: block;
          font-size: 1.05rem;
          color: var(--color-graphite);
          margin-bottom: 0.35rem;
        }
        .feature-item-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #4D606E;
        }
        .applications-detailed-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          padding: 1.5rem;
          border-radius: var(--radius-sm);
        }
        .app-item {
          display: flex;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: #384A59;
          line-height: 1.5;
        }
        .app-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }

        /* Converter Panel Card */
        .converter-panel-card {
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 2.5rem;
          box-shadow: var(--shadow-card);
        }
        .converter-calc-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin: 1.75rem 0;
          padding: 1.5rem;
          background-color: var(--color-warm-ivory);
          border-radius: var(--radius-xs);
          border: 1px solid var(--border-hairline);
        }
        .calc-input-group, .calc-unit-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .calc-input-group label, .calc-unit-group label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-graphite);
        }
        .calc-input-group input, .calc-unit-group select {
          padding: 0.65rem 0.85rem;
          border: 1px solid #CFD8DE;
          border-radius: var(--radius-xs);
          font-size: 1rem;
          color: var(--color-graphite);
          background-color: #FFFFFF;
        }
        .converter-results-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
        }
        .result-box {
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          padding: 1.25rem 1rem;
          border-radius: var(--radius-xs);
          display: flex;
          flex-direction: column;
          text-align: center;
          transition: background-color var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
        }
        .result-box:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-subtle);
        }
        .result-box.source-box {
          background-color: #F5EFE6;
          border-color: #D6BC96;
        }
        .result-label {
          font-size: 0.7rem;
          color: var(--color-steel-blue);
          margin-bottom: 0.4rem;
        }
        .result-val {
          font-size: 1.75rem;
          color: var(--color-graphite);
          line-height: 1;
          margin-bottom: 0.4rem;
          transition: color var(--transition-fast);
        }
        .result-sub {
          font-size: 0.65rem;
          color: #8E9EA9;
          font-family: var(--font-mono);
        }

        /* Modules */
        .modules-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .module-item-card {
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
        }
        .module-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.5rem;
        }
        .module-name {
          font-size: 1.05rem;
          color: var(--color-graphite);
        }
        .module-desc {
          font-size: 0.875rem;
          line-height: 1.55;
          color: #4D606E;
        }
        .catalogue-banner {
          background-color: #FAF9F6;
          border: 1px solid var(--border-subtle);
          padding: 2.25rem 2.5rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .catalogue-info {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .cat-icon {
          flex-shrink: 0;
        }
        .related-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        /* Lightbox */
        .lightbox-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 100%;
          height: 100%;
          background-color: rgba(13, 19, 24, 0.85);
          backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .lightbox-content {
          position: relative;
          max-width: 900px;
          max-height: 90vh;
          background: #FFFFFF;
          padding: 2rem;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-modal);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .lightbox-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-steel-blue);
        }
        .lightbox-img {
          max-height: 70vh;
          width: auto;
          object-fit: contain;
        }
        .lightbox-caption {
          margin-top: 1rem;
          font-size: 0.8125rem;
          color: var(--color-steel-blue);
        }

        @media (max-width: 1024px) {
          .product-hero-layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .features-applications-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .converter-results-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .related-products-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .product-action-block {
            flex-direction: column;
            align-items: stretch;
            gap: 0.75rem;
          }
          .product-action-block .btn {
            width: 100%;
            justify-content: center;
          }
          .catalogue-banner {
            flex-direction: column;
            align-items: stretch;
            gap: 1.25rem;
            padding: 1.5rem 1.15rem;
          }
          .catalogue-banner .btn {
            width: 100%;
            justify-content: center;
          }
          .product-tabs-header {
            gap: 1rem;
            padding-bottom: 0.25rem;
            -webkit-overflow-scrolling: touch;
          }
          .product-tab-btn {
            font-size: 0.9375rem;
            padding: 0.75rem 0.2rem;
          }
          .converter-calc-row {
            grid-template-columns: 1fr;
          }
          .converter-results-grid {
            grid-template-columns: 1fr 1fr;
          }
          .modules-grid {
            grid-template-columns: 1fr;
          }
          .related-products-grid {
            grid-template-columns: 1fr;
          }
          .main-image-display {
            height: 260px;
            padding: 1rem;
          }
          .inspect-lens-hint {
            bottom: 0.65rem;
            right: 0.65rem;
            font-size: 0.625rem;
            padding: 0.2rem 0.45rem;
          }
          .thumbnail-btn {
            width: 64px;
            height: 64px;
            flex-shrink: 0;
          }
          .product-main-title {
            font-size: clamp(1.75rem, 5.2vw, 2.5rem);
          }
          .product-origin-label {
            font-size: 0.6875rem;
          }
        }
      `})]})}function $e({onOpenEnquiry:a}){return e.jsxs("div",{className:"company-page",children:[e.jsx("section",{className:"company-header bg-warm-ivory border-bottom-hairline bg-grid-blueprint",children:e.jsxs("div",{className:"container",children:[e.jsx(F,{items:[{label:"Company & Heritage"}]}),e.jsxs("div",{className:"company-header-inner",children:[e.jsx("span",{className:"badge-overline font-mono",children:"Established 1956 · Gorizia, Italy"}),e.jsx("h1",{className:"company-header-title",children:"Precision engineering rooted in Italian textile heritage."}),e.jsx("p",{className:"company-header-lead",children:"For seven decades, Tomsic has remained a privately owned, independent engineering factory dedicated to mechanical perfection, advanced electronics, and metrological integrity."})]})]})}),e.jsx("section",{className:"section bg-white",id:"manufacturing",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"company-facility-grid",children:[e.jsxs("div",{className:"facility-media-card",children:[e.jsx("img",{src:"/assets/tomsic-facility.jpg",alt:"Tomsic S.r.l. Facility in Savogna d'Isonzo",className:"facility-main-img"}),e.jsxs("div",{className:"facility-caption-bar font-mono",children:[e.jsx("span",{className:"caption-tag",children:"SAVOGNA D’ISONZO (GO), ITALY"}),e.jsx("span",{className:"caption-year",children:"EST. 1956 · CONTINUOUS OPERATION"})]})]}),e.jsxs("div",{className:"facility-text-stack",children:[e.jsx("span",{className:"badge-overline font-mono",children:"Savogna d’Isonzo manufacturing facility"}),e.jsx("h2",{style:{fontSize:"2.15rem",marginBottom:"1.25rem"},children:"100% In-house design, machining, and software synthesis."}),e.jsx("p",{style:{color:"#384A59",fontSize:"1.05rem",lineHeight:"1.65",marginBottom:"1.25rem"},children:"In 2003, Tomsic inaugurated its expanded headquarters complex in Savogna d'Isonzo, tripling R&D and production floor space. Here, our engineers design every printed circuit board, program every line of analysis software, and precision-machine mechanical assemblies."}),e.jsx("p",{style:{color:"#4D606E",fontSize:"0.975rem",lineHeight:"1.6",marginBottom:"1.75rem"},children:"Unlike assemblers who rebrand generic third-party instruments, Tomsic retains sovereign control over every sensor, drive algorithm, and measurement slot. This enables custom firmware tailoring, immediate availability of original replacement components, and lifetime serviceability."}),e.jsxs("div",{className:"acimit-membership-box",children:[e.jsx("img",{src:"/assets/acimit-logo.png",alt:"Member of ACIMIT",height:"44"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Association of Italian Textile Machinery Manufacturers (ACIMIT)"}),e.jsx("p",{style:{fontSize:"0.8125rem",color:"#647887",marginTop:"0.2rem",lineHeight:"1.45"},children:"Tomsic is an accredited ACIMIT manufacturer, upholding Italian engineering standards and promoting sustainable, energy-efficient spinning automation."})]})]})]})]})})}),e.jsx("section",{className:"section bg-warm-ivory border-top-hairline",id:"leadership",children:e.jsxs("div",{className:"container",children:[e.jsx(ee,{overline:"Executive governance",title:"Second-Generation Family Leadership",subtitle:"Direct personal accountability from our directors to your mill operations."}),e.jsxs("div",{className:"leadership-cards-grid",children:[e.jsxs("div",{className:"leadership-card",children:[e.jsx("div",{className:"leadership-role-tag font-mono",children:"EXECUTIVE MANAGEMENT"}),e.jsx("h3",{className:"leader-name",children:"Mr. Silvan Tomsic"}),e.jsx("span",{className:"leader-title font-mono",children:"PRESIDENT & MANAGING DIRECTOR"}),e.jsx("p",{className:"leader-bio",children:"Directing strategic technological investments, key global client partnerships, and international expansion since assuming executive governance in 1992."})]}),e.jsxs("div",{className:"leadership-card",children:[e.jsx("div",{className:"leadership-role-tag font-mono",children:"TECHNICAL OPERATIONS"}),e.jsx("h3",{className:"leader-name",children:"Mr. Ladi Tomsic"}),e.jsx("span",{className:"leader-title font-mono",children:"VICE-PRESIDENT & ENGINEERING"}),e.jsx("p",{className:"leader-bio",children:"Supervising factory manufacturing protocols, precision CNC tolerances, and metrological calibration across all laboratory testing benches and autolevelling hardware."})]})]})]})}),e.jsx("section",{className:"section bg-white border-top-hairline",children:e.jsxs("div",{className:"container",children:[e.jsx(ee,{overline:"Chronology of innovation",title:"Seven Decades of Milestones",subtitle:"The evolution of an Italian engineering factory into a global textile metrology specialist."}),e.jsxs("div",{className:"timeline-container",children:[e.jsx("div",{className:"timeline-axis"}),e.jsx("div",{className:"timeline-events-list",children:E.timeline.map((o,t)=>e.jsxs("div",{className:`timeline-event-row ${t%2===1?"align-right":"align-left"}`,children:[e.jsxs("div",{className:"timeline-marker font-mono",children:[e.jsx("span",{className:"marker-dot"}),e.jsx("span",{className:"marker-year tabular-nums",children:o.year})]}),e.jsxs("div",{className:"timeline-content-card",children:[e.jsx("span",{className:"timeline-mobile-year font-mono",children:o.year}),e.jsx("h4",{className:"timeline-event-title",children:o.title}),e.jsx("p",{className:"timeline-event-desc",children:o.description})]})]},t))})]})]})}),e.jsx("section",{className:"section-sm bg-warm-ivory border-top-hairline",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"corporate-details-box",children:[e.jsx("span",{className:"badge-overline font-mono",children:"Corporate registry and compliance"}),e.jsxs("div",{className:"corp-details-grid font-mono",children:[e.jsxs("div",{children:[e.jsx("span",{className:"corp-label",children:"Legal Name:"}),e.jsx("strong",{children:E.legalName})]}),e.jsxs("div",{children:[e.jsx("span",{className:"corp-label",children:"Registered Office:"}),e.jsx("strong",{children:"via Malnisce, 3/B, 34070 Savogna d’Isonzo (GO), Italy"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"corp-label",children:"VAT & Tax Code (P.IVA / C.F.):"}),e.jsx("strong",{className:"tabular-nums",children:E.registration.vatNumber})]}),e.jsxs("div",{children:[e.jsx("span",{className:"corp-label",children:"REA Registration:"}),e.jsx("strong",{className:"tabular-nums",children:E.registration.reaNumber})]}),e.jsxs("div",{children:[e.jsx("span",{className:"corp-label",children:"Share Capital:"}),e.jsxs("strong",{className:"tabular-nums",children:[E.registration.shareCapital," i.v."]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"corp-label",children:"Certified Email (PEC):"}),e.jsx("strong",{children:E.contact.emailPec})]})]})]})})}),e.jsx("style",{children:`
        .company-header {
          padding-top: 2rem;
          padding-bottom: 4.5rem;
        }
        .company-header-inner {
          max-width: 860px;
          margin-top: 1.5rem;
        }
        .company-header-title {
          font-size: clamp(2.25rem, 4.5vw, 3.5rem);
          margin: 0.5rem 0 1.25rem;
          line-height: 1.12;
        }
        .company-header-lead {
          font-size: 1.25rem;
          line-height: 1.6;
          color: #384A59;
        }
        .company-facility-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 4.5rem;
          align-items: center;
        }
        .facility-media-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 0.85rem;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-card);
        }
        .facility-main-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-radius: var(--radius-xs);
          display: block;
        }
        .facility-caption-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          margin-top: 0.75rem;
          border-top: 1px solid var(--border-hairline);
          font-size: 0.6875rem;
          letter-spacing: 0.05em;
        }
        .caption-tag {
          font-weight: 700;
          color: var(--color-graphite);
        }
        .caption-year {
          color: var(--color-accent);
          font-weight: 600;
        }
        .acimit-membership-box {
          background-color: #FAF9F6;
          border: 1px solid var(--border-subtle);
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .leadership-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .leadership-card {
          position: relative;
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          padding: 2.75rem 2.5rem;
          box-shadow: var(--shadow-card);
        }
        .leadership-role-tag {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--color-accent);
          margin-bottom: 0.6rem;
        }
        .leader-name {
          font-size: 1.6rem;
          margin-bottom: 0.25rem;
          color: var(--color-graphite);
        }
        .leader-title {
          display: block;
          font-size: 0.775rem;
          color: #647887;
          font-weight: 600;
          margin-bottom: 1.25rem;
          letter-spacing: 0.04em;
        }
        .leader-bio {
          font-size: 0.95rem;
          line-height: 1.65;
          color: #4D606E;
        }

        /* Timeline Axis */
        .timeline-container {
          position: relative;
          max-width: 980px;
          margin: 0 auto;
          padding: 2rem 0;
        }
        .timeline-axis {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background-color: var(--border-subtle);
          transform: translateX(-50%);
        }
        .timeline-events-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .timeline-event-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          position: relative;
        }
        .timeline-marker {
          position: absolute;
          left: 50%;
          top: 1.5rem;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #FFFFFF;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-xs);
          border: 1px solid var(--border-strong);
          z-index: 2;
        }
        .marker-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--color-muted-bronze);
        }
        .marker-year {
          font-size: 0.8125rem;
          font-weight: 800;
          color: var(--color-graphite);
        }
        .timeline-mobile-year {
          display: none;
        }
        .timeline-content-card {
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          padding: 1.75rem;
          border-radius: var(--radius-sm);
        }
        .timeline-event-row.align-left .timeline-content-card {
          grid-column: 1;
        }
        .timeline-event-row.align-right .timeline-content-card {
          grid-column: 2;
        }
        .timeline-event-title {
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
          color: var(--color-graphite);
        }
        .timeline-event-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #4D606E;
        }

        /* Corporate Details Box */
        .corporate-details-box {
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          padding: 2.25rem;
          border-radius: var(--radius-sm);
        }
        .corp-details-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 1rem;
          font-size: 0.8125rem;
        }
        .corp-label {
          display: block;
          font-size: 0.7rem;
          color: #647887;
          margin-bottom: 0.2rem;
          text-transform: uppercase;
        }
        .corp-details-grid strong {
          color: var(--color-graphite);
          word-break: break-all;
          overflow-wrap: break-word;
        }

        @media (max-width: 1024px) {
          .company-facility-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .corp-details-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 768px) {
          .acimit-membership-box {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 1.25rem 1rem;
          }
          .timeline-axis {
            left: 12px;
          }
          .timeline-event-row {
            grid-template-columns: 1fr;
            padding-left: 2rem;
          }
          .timeline-marker {
            left: 12px;
            top: 1.6rem;
            width: 14px;
            height: 14px;
            padding: 0;
            border-radius: 50%;
            background-color: var(--color-accent);
            border: 2.5px solid #FFFFFF;
            box-shadow: 0 0 0 1px var(--color-graphite);
          }
          .timeline-marker .marker-dot,
          .timeline-marker .marker-year {
            display: none;
          }
          .timeline-mobile-year {
            display: inline-block;
            font-size: 0.75rem;
            font-weight: 700;
            color: var(--color-accent);
            background: rgba(197, 55, 39, 0.08);
            padding: 0.2rem 0.55rem;
            border-radius: var(--radius-xs);
            margin-bottom: 0.45rem;
          }
          .timeline-content-card {
            padding: 1.25rem 1rem;
          }
          .timeline-event-row.align-left .timeline-content-card,
          .timeline-event-row.align-right .timeline-content-card {
            grid-column: 1;
          }
          .leadership-cards-grid {
            grid-template-columns: 1fr;
          }
          .leadership-card {
            padding: 1.75rem 1.25rem;
          }
          .corp-details-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Ke({onOpenEnquiry:a}){const[o,t]=g.useState("all"),d=o==="all"?R:R.filter(r=>r.type.toLowerCase().includes(o.toLowerCase()));return e.jsxs("div",{className:"news-page",children:[e.jsx("section",{className:"news-header bg-warm-ivory border-bottom-hairline bg-grid-blueprint relative",children:e.jsxs("div",{className:"container relative z-10",children:[e.jsx(F,{items:[{label:"News & Events"}]}),e.jsxs("div",{className:"news-header-inner",children:[e.jsxs("div",{className:"header-badge-row",children:[e.jsx("span",{className:"badge-overline",children:"Dispatches and exhibitions"}),e.jsx("span",{className:"badge-subtag font-mono",children:"Archive"})]}),e.jsx("h1",{className:"news-header-title",children:"News, Exhibitions & Technological Milestones"}),e.jsx("p",{className:"news-header-lead",children:"Stay informed on upcoming international textile machinery fairs, new metrology product introductions, and field reports from Tomsic S.r.l."}),e.jsxs("div",{className:"news-filter-tabs",children:[e.jsxs("button",{className:`news-tab ${o==="all"?"active":""}`,onClick:()=>t("all"),children:["All Announcements (",R.length,")"]}),e.jsx("button",{className:`news-tab ${o==="event"?"active":""}`,onClick:()=>t("event"),children:"Trade Fairs & Exhibitions (2)"}),e.jsx("button",{className:`news-tab ${o==="product"?"active":""}`,onClick:()=>t("product"),children:"Product Releases (2)"})]})]})]})}),e.jsx("section",{className:"section bg-white",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"news-articles-stack",children:d.map(r=>e.jsxs("article",{className:"news-article-card relative",id:r.slug,children:[e.jsxs("div",{className:"news-article-media",children:[e.jsx("img",{src:r.image,alt:r.title,className:"news-article-img",loading:"lazy"}),e.jsx("span",{className:"news-badge-type",children:r.type})]}),e.jsxs("div",{className:"news-article-body",children:[e.jsxs("div",{className:"news-article-meta font-mono",children:[e.jsxs("span",{className:"meta-cell",children:[e.jsx(Ce,{size:14,color:"#AA8B62"}),e.jsx("span",{children:r.date})]}),e.jsxs("span",{className:"meta-cell",children:[e.jsx(H,{size:14,color:"#647887"}),e.jsx("span",{children:r.location})]})]}),e.jsx("h2",{className:"news-article-title",children:r.title}),e.jsx("div",{className:"news-article-text",children:r.content.split(`

`).map((s,l)=>e.jsx("p",{children:s},l))}),e.jsx("div",{className:"news-article-action",children:e.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>a&&a(r.title,"Sales"),children:[e.jsx("span",{children:"Connect Regarding this Event"}),e.jsx(v,{size:14})]})})]})]},r.slug))})})}),e.jsx("style",{children:`
        .news-header {
          padding-top: 2rem;
          padding-bottom: 3.5rem;
        }
        .news-header-inner {
          max-width: 860px;
          margin-top: 1.5rem;
        }
        .news-header-title {
          font-size: clamp(2.25rem, 4.5vw, 3.25rem);
          margin: 0.5rem 0 1.25rem;
          line-height: 1.15;
        }
        .news-header-lead {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #384A59;
          margin-bottom: 2rem;
        }
        .news-filter-tabs {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .news-tab {
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 0.55rem 1.125rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-body);
          font-size: 0.8125rem;
          font-weight: 600;
          color: #4D606E;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .news-tab:hover {
          border-color: #17232D;
          color: #17232D;
        }
        .news-tab.active {
          background-color: #17232D;
          color: #FFFFFF;
          border-color: #17232D;
        }
        .news-articles-stack {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }
        .news-article-card {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 3.5rem;
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          overflow: hidden;
          box-shadow: var(--shadow-card);
        }
        .news-article-media {
          position: relative;
          height: 100%;
          min-height: 320px;
          background-color: #FFFFFF;
          border-right: 1px solid var(--border-hairline);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          overflow: hidden;
        }
        .news-article-img {
          max-width: 100%;
          max-height: 280px;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: var(--radius-xs);
        }
        .news-badge-type {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background-color: rgba(23, 35, 45, 0.9);
          color: #FFFFFF;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-xs);
          z-index: 2;
        }
        .news-article-body {
          padding: 2.5rem 2.5rem 2.5rem 0;
          display: flex;
          flex-direction: column;
        }
        .news-article-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 0.75rem;
          font-size: 0.8125rem;
          color: #647887;
          flex-wrap: wrap;
        }
        .meta-cell {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .news-article-title {
          font-size: 1.65rem;
          margin-bottom: 1rem;
          line-height: 1.25;
          color: #17232D;
          font-family: var(--font-heading);
        }
        .news-article-text p {
          font-size: 0.95rem;
          line-height: 1.65;
          color: #384A59;
          margin-bottom: 1rem;
        }
        .news-article-action {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-hairline);
        }

        @media (max-width: 1024px) {
          .news-article-card {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .news-article-body {
            padding: 0 1.5rem 1.5rem 1.5rem;
          }
          .news-article-media {
            height: 240px;
            min-height: auto;
          }
        }
        @media (max-width: 640px) {
          .news-filter-tabs {
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 0.5rem;
            width: 100%;
            -webkit-overflow-scrolling: touch;
          }
          .news-tab {
            white-space: nowrap;
            flex-shrink: 0;
            min-height: 42px;
          }
          .news-article-media {
            height: 220px;
            padding: 1.25rem 1.5rem;
            border-right: none;
            border-bottom: 1px solid var(--border-hairline);
          }
          .news-article-img {
            max-height: 180px;
          }
          .news-badge-type {
            top: 0.75rem;
            right: 0.75rem;
          }
          .news-article-body {
            padding: 0 1.15rem 1.25rem;
          }
          .news-article-title {
            font-size: 1.3rem;
          }
          .news-article-action .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `})]})}function Qe(){const[a,o]=g.useState({name:"",company:"",email:"",phone:"",country:"",department:"Sales",product:"",message:""}),[t,d]=g.useState(!1),[r,s]=g.useState(!1),l=i=>{i.preventDefault(),s(!0),setTimeout(()=>{s(!1),d(!0)},400)};return e.jsxs("div",{className:"contact-page",children:[e.jsx("section",{className:"contact-header bg-warm-ivory border-bottom-hairline bg-grid-blueprint",children:e.jsxs("div",{className:"container",children:[e.jsx(F,{items:[{label:"Contact & Global Network"}]}),e.jsxs("div",{className:"contact-header-inner",children:[e.jsx("span",{className:"badge-overline font-mono",children:"DIRECT FACTORY CONTACT"}),e.jsx("h1",{className:"contact-header-title",children:"Headquarters & Worldwide Network"}),e.jsx("p",{className:"contact-header-lead",children:"Reach our engineering and commercial teams at Savogna d’Isonzo, Italy, or connect with factory-certified agents across more than 30 textile-producing nations."})]})]})}),e.jsx("section",{className:"section bg-white",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"contact-main-grid",children:[e.jsxs("div",{className:"hq-details-col",children:[e.jsx("span",{className:"badge-overline font-mono",children:"FACTORY HEADQUARTERS"}),e.jsx("h2",{style:{fontSize:"2rem",marginBottom:"1.25rem"},children:"TOMSIC S.r.l."}),e.jsxs("div",{className:"hq-address-card",children:[e.jsx(H,{size:22,color:"var(--color-accent)",className:"hq-icon"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Factory & Administrative Offices"}),e.jsx("span",{children:"via Malnisce, 3/B"}),e.jsx("span",{children:"34070 Savogna d’Isonzo (GO)"}),e.jsx("span",{children:"Italy — European Union"}),e.jsx("span",{className:"hq-transport-note font-mono",children:"COORDINATES: 45°52′N 13°34′E · (30 MIN FROM TRIESTE TRS / 90 MIN FROM VENICE VCE)"})]})]}),e.jsxs("div",{className:"departments-list",children:[e.jsx("h3",{style:{fontSize:"1.25rem",margin:"1.5rem 0 1rem"},children:"Direct Department Contacts"}),X.supportDepartments.map((i,m)=>e.jsxs("div",{className:"dept-item-card",children:[e.jsxs("div",{className:"dept-header",children:[e.jsx("strong",{className:"dept-name",children:i.title}),e.jsxs("a",{href:`tel:${i.phone.replace(/[^0-9+]/g,"")}`,className:"dept-phone font-mono tabular-nums",children:[e.jsx(I,{size:12,style:{display:"inline",marginRight:"4px"}}),i.phone]})]}),e.jsx("a",{href:`mailto:${i.email}`,className:"dept-email font-mono",children:i.email}),e.jsx("p",{className:"dept-desc",children:i.description})]},m))]}),e.jsxs("div",{className:"working-hours-card",children:[e.jsx(Te,{size:17,color:"var(--color-accent)"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Factory Operating Hours (CET):"}),e.jsx("span",{className:"font-mono",children:"Monday – Friday: 08:00 – 12:30 / 13:30 – 17:00"})]})]})]}),e.jsx("div",{className:"contact-form-col",children:e.jsx("div",{className:"form-wrapper-card",children:t?e.jsxs("div",{className:"contact-success-state",children:[e.jsx("div",{className:"success-icon-ring",children:e.jsx(z,{size:40,color:"var(--color-accent)"})}),e.jsx("h3",{style:{fontSize:"1.45rem",marginTop:"0.75rem"},children:"Demo submission complete — no enquiry was sent."}),e.jsx("p",{style:{color:"#384A59",fontSize:"0.9375rem",lineHeight:"1.6",margin:"1rem 0 1.25rem"},children:"This website is an independent digital concept and demonstration prototype for Tomsic Advanced Technologies. Your form input was validated locally in your browser for demonstration purposes and has not been transmitted to Tomsic S.r.l."}),e.jsxs("div",{className:"direct-contact-box",style:{background:"#FFFFFF",border:"1px solid var(--border-subtle)",padding:"1rem 1.25rem",borderRadius:"var(--radius-xs)",textAlign:"left",marginBottom:"1.5rem"},children:[e.jsx("strong",{style:{fontSize:"0.85rem",display:"block",marginBottom:"0.35rem"},children:"Official Factory Inquiries:"}),e.jsx("p",{style:{fontSize:"0.8125rem",color:"#5C7080",lineHeight:"1.45",margin:"0 0 0.5rem"},children:"For genuine commercial or technical inquiries, contact Tomsic S.r.l. directly via their official headquarters:"}),e.jsxs("div",{style:{display:"flex",gap:"1.25rem",fontSize:"0.8125rem",color:"#141D24",flexWrap:"wrap"},children:[e.jsxs("a",{href:"tel:+390481882320",style:{color:"#141D24",textDecoration:"none",display:"inline-flex",alignItems:"center"},children:[e.jsx(I,{size:13,style:{display:"inline",marginRight:"4px"}})," +39 (0481) 882320"]}),e.jsxs("a",{href:"mailto:sales@tomsic.it",style:{color:"#141D24",textDecoration:"none",display:"inline-flex",alignItems:"center"},children:[e.jsx(O,{size:13,style:{display:"inline",marginRight:"4px"}})," sales@tomsic.it"]})]})]}),e.jsx("button",{className:"btn btn-secondary",onClick:()=>d(!1),children:e.jsx("span",{children:"Reset Demo Form"})})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"badge-overline font-mono",children:"DEMO INTERACTION"}),e.jsx("h3",{style:{fontSize:"1.65rem",marginBottom:"0.4rem"},children:"Technical Request & Quotation"}),e.jsx("p",{style:{color:"#5C7080",fontSize:"0.9rem",marginBottom:"1.75rem"},children:"Simulate an equipment inquiry to test the user flow. (Interactive demonstration)"}),e.jsxs("form",{onSubmit:l,className:"page-contact-form",children:[e.jsxs("div",{className:"form-row-2",children:[e.jsxs("div",{className:"form-field",children:[e.jsx("label",{htmlFor:"p-name",children:"Full Name *"}),e.jsx("input",{id:"p-name",type:"text",required:!0,placeholder:"e.g. Ing. Roberto Bianchi",value:a.name,onChange:i=>o({...a,name:i.target.value})})]}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{htmlFor:"p-company",children:"Company / Spinning Mill *"}),e.jsx("input",{id:"p-company",type:"text",required:!0,placeholder:"e.g. Al-Nasr Spinning & Weaving",value:a.company,onChange:i=>o({...a,company:i.target.value})})]})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("div",{className:"form-field",children:[e.jsx("label",{htmlFor:"p-email",children:"Corporate Email *"}),e.jsx("input",{id:"p-email",type:"email",required:!0,placeholder:"name@mill.com",value:a.email,onChange:i=>o({...a,email:i.target.value})})]}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{htmlFor:"p-phone",children:"Telephone / WhatsApp *"}),e.jsx("input",{id:"p-phone",type:"tel",required:!0,placeholder:"+39 ...",value:a.phone,onChange:i=>o({...a,phone:i.target.value})})]})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("div",{className:"form-field",children:[e.jsx("label",{htmlFor:"p-country",children:"Country / Production Location *"}),e.jsx("input",{id:"p-country",type:"text",required:!0,placeholder:"e.g. Italy, India, Turkey, Egypt, USA",value:a.country,onChange:i=>o({...a,country:i.target.value})})]}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{htmlFor:"p-dept",children:"Department *"}),e.jsxs("select",{id:"p-dept",value:a.department,onChange:i=>o({...a,department:i.target.value}),children:[e.jsx("option",{value:"Sales",children:"Sales & New Equipment Quotation"}),e.jsx("option",{value:"Service",children:"After-Sales Technical Service & Calibration"}),e.jsx("option",{value:"Spares",children:"Spare Parts & Consumables (Glucosil, Guides)"}),e.jsx("option",{value:"General",children:"General Administration / Direction"})]})]})]}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{htmlFor:"p-prod",children:"Product or Division of Interest"}),e.jsxs("select",{id:"p-prod",value:a.product,onChange:i=>o({...a,product:i.target.value}),children:[e.jsx("option",{value:"",children:"General Machinery / Metrology Consultation"}),j.map(i=>e.jsxs("option",{value:i.name,children:[i.name," (",i.code,")"]},i.slug))]})]}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{htmlFor:"p-msg",children:"Technical Scope & Production Parameters *"}),e.jsx("textarea",{id:"p-msg",rows:4,required:!0,placeholder:"Please indicate yarn count range (Ne, Nm, tex), raw fibre blend (cotton, wool, synthetic), carding machine model to be autolevelled, or specific laboratory testing goals...",value:a.message,onChange:i=>o({...a,message:i.target.value})})]}),e.jsxs("div",{className:"form-submit-row",children:[e.jsxs("div",{className:"privacy-badge",children:[e.jsx(L,{size:16,color:"var(--color-accent)",style:{flexShrink:0}}),e.jsx("span",{children:"Interactive demonstration prototype. Submissions are processed locally."})]}),e.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:r,children:[e.jsx(ie,{size:15}),e.jsx("span",{children:r?"Validating...":"Simulate Inquiry Submission"})]})]})]})]})})})]})})}),e.jsx("section",{className:"section bg-warm-ivory border-top-hairline",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-title-wrap",style:{marginBottom:"3rem"},children:[e.jsx("span",{className:"badge-overline font-mono",children:"WORLDWIDE NETWORK"}),e.jsx("h2",{children:"International Representatives in 30+ Countries"}),e.jsx("p",{style:{color:"#647887",fontSize:"1.1rem",marginTop:"0.4rem",maxWidth:"780px"},children:"Most major spinning markets are supported locally by dedicated agents and factory-certified technical service providers."})]}),e.jsx("div",{className:"agents-regions-grid",children:X.regions.map((i,m)=>e.jsxs("div",{className:"agent-region-card",children:[e.jsx("span",{className:"drafting-crosshair",style:{top:"8px",right:"8px"}}),e.jsxs("div",{className:"agent-region-header",children:[e.jsx(ae,{size:18,color:"#A48256"}),e.jsx("h3",{className:"agent-region-title",children:i.name})]}),e.jsx("div",{className:"agent-countries-table",children:i.countries.map((n,x)=>e.jsxs("div",{className:"agent-country-row",children:[e.jsxs("div",{className:"agent-c-main",children:[e.jsx("strong",{className:"agent-c-name",children:n.name}),e.jsx("span",{className:"agent-c-city font-mono",children:n.city})]}),e.jsx("div",{className:"agent-c-role",children:e.jsx("span",{children:n.role})})]},x))})]},m))})]})}),e.jsx("style",{children:`
        .contact-header {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }
        .contact-header-inner {
          max-width: 860px;
          margin-top: 1.5rem;
        }
        .contact-header-title {
          font-size: clamp(2.25rem, 4.5vw, 3.5rem);
          margin: 0.5rem 0 1.25rem;
          line-height: 1.15;
        }
        .contact-header-lead {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #384A59;
        }
        .contact-main-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 4.5rem;
        }
        .hq-address-card {
          position: relative;
          display: flex;
          gap: 1.25rem;
          background-color: #FAF9F6;
          border: 1px solid var(--border-subtle);
          padding: 1.75rem;
          border-radius: var(--radius-sm);
          margin-bottom: 2rem;
          font-size: 0.9375rem;
          line-height: 1.55;
          box-shadow: var(--shadow-card);
        }
        .hq-address-card strong {
          display: block;
          color: var(--color-graphite);
          font-size: 1.05rem;
          margin-bottom: 0.25rem;
        }
        .hq-address-card span {
          display: block;
          color: #4D606E;
        }
        .hq-transport-note {
          font-size: 0.725rem !important;
          color: #5C7080 !important;
          margin-top: 0.6rem;
          line-height: 1.4;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .departments-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .dept-item-card {
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-xs);
          padding: 1.25rem 1.5rem;
          transition: border-color var(--transition-fast);
          box-sizing: border-box;
          width: 100%;
          max-width: 100%;
          overflow-wrap: break-word;
          word-break: break-word;
        }
        .dept-item-card:hover {
          border-color: var(--color-accent);
        }
        .dept-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.25rem;
        }
        .dept-header strong {
          font-size: 0.9375rem;
          color: var(--color-graphite);
        }
        .dept-phone {
          font-size: 0.775rem;
          color: #4D606E;
          font-weight: 600;
          text-decoration: none;
          transition: color var(--transition-fast);
          display: inline-flex;
          align-items: center;
        }
        .dept-phone:hover {
          color: var(--color-accent);
        }
        .dept-email {
          display: inline-block;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-accent);
          margin-bottom: 0.35rem;
        }
        .dept-desc {
          font-size: 0.8125rem;
          color: #647887;
          line-height: 1.45;
        }
        .working-hours-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-xs);
          margin-top: 1.75rem;
          font-size: 0.8125rem;
        }
        .working-hours-card strong {
          display: block;
          color: var(--color-graphite);
        }
        .working-hours-card span {
          color: #647887;
        }

        /* Form Wrapper */
        .form-wrapper-card {
          position: relative;
          background-color: #FAF9F6;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 2.75rem;
          box-shadow: var(--shadow-card);
        }
        .page-contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .form-field label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-graphite);
        }
        .form-field input, .form-field select, .form-field textarea {
          box-sizing: border-box;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          padding: 0.75rem 0.95rem;
          border: 1px solid #CFD8DE;
          border-radius: var(--radius-xs);
          font-family: var(--font-body);
          font-size: 1rem;
          background-color: #FFFFFF;
          color: var(--color-graphite);
          transition: border-color var(--transition-fast);
        }
        .form-field input:focus, .form-field select:focus, .form-field textarea:focus {
          border-color: var(--color-accent);
          outline: none;
        }
        .form-submit-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-hairline);
          gap: 1rem;
        }
        .privacy-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.775rem;
          color: #647887;
        }
        .contact-success-state {
          text-align: center;
          padding: 2rem 1rem;
        }
        .success-icon-ring {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          background-color: #F8F5F0;
          border-radius: 50%;
        }

        /* Agents Regions Grid */
        .agents-regions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .agent-region-card {
          position: relative;
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          padding: 2.25rem 2rem;
          box-shadow: var(--shadow-card);
        }
        .agent-region-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-hairline);
        }
        .agent-region-title {
          font-size: 1.2rem;
          color: var(--color-graphite);
        }
        .agent-countries-table {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .agent-country-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-hairline);
        }
        .agent-country-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .agent-c-name {
          display: block;
          font-size: 0.9375rem;
          color: var(--color-graphite);
        }
        .agent-c-city {
          display: block;
          font-size: 0.75rem;
          color: #647887;
        }
        .agent-c-role {
          font-size: 0.775rem;
          color: #4D606E;
          text-align: right;
          max-width: 240px;
        }

        @media (max-width: 1024px) {
          .contact-main-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .agents-regions-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .dept-item-card {
            padding: 1.1rem 1rem;
          }
          .dept-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.35rem;
            margin-bottom: 0.4rem;
          }
          .dept-phone {
            font-size: 0.8125rem;
            color: var(--color-graphite);
          }
          .form-row-2 {
            grid-template-columns: 1fr;
          }
          .form-wrapper-card {
            padding: 1.5rem 1.15rem;
          }
          .form-submit-row {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }
          .form-submit-row .btn {
            width: 100%;
            justify-content: center;
          }
          .hq-address-card {
            flex-direction: column;
            gap: 0.75rem;
            padding: 1.25rem 1rem;
          }
          .agent-country-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }
          .agent-c-role {
            text-align: left;
            max-width: 100%;
          }
        }
      `})]})}function _e(){const[a,o]=g.useState(!1),[t,d]=g.useState(""),[r,s]=g.useState("Sales"),l=(m="",n="Sales")=>{d(m),s(n),o(!0)},i=()=>{o(!1)};return e.jsx(me,{children:e.jsxs(qe,{children:[e.jsxs("div",{className:"site-canvas",children:[e.jsx(Re,{onOpenEnquiry:l}),e.jsx("main",{className:"site-main",id:"main-content",children:e.jsxs(pe,{children:[e.jsx(S,{path:"/",element:e.jsx(Z,{onOpenEnquiry:l})}),e.jsx(S,{path:"/solutions",element:e.jsx(Be,{onOpenEnquiry:l})}),e.jsx(S,{path:"/solutions/laboratory",element:e.jsx(He,{onOpenEnquiry:l})}),e.jsx(S,{path:"/solutions/spinning",element:e.jsx(Ye,{onOpenEnquiry:l})}),e.jsx(S,{path:"/solutions/sugar",element:e.jsx(Ue,{onOpenEnquiry:l})}),e.jsx(S,{path:"/products/:slug",element:e.jsx(We,{onOpenEnquiry:l})}),e.jsx(S,{path:"/company",element:e.jsx($e,{onOpenEnquiry:l})}),e.jsx(S,{path:"/news",element:e.jsx(Ke,{onOpenEnquiry:l})}),e.jsx(S,{path:"/contact",element:e.jsx(Qe,{})}),e.jsx(S,{path:"*",element:e.jsx(Z,{onOpenEnquiry:l})})]})}),e.jsx(Ge,{}),e.jsx(Pe,{onOpenEnquiry:l}),e.jsx(Oe,{isOpen:a,onClose:i,initialProduct:t,initialDepartment:r})]}),e.jsx("style",{children:`
          .site-canvas {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .site-main {
            flex: 1 0 auto;
          }
        `})]})})}De.createRoot(document.getElementById("root")).render(e.jsx(ge.StrictMode,{children:e.jsx(_e,{})}));
