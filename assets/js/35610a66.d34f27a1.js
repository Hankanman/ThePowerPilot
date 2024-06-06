"use strict";(self.webpackChunkthe_power_pilot=self.webpackChunkthe_power_pilot||[]).push([[230],{3726:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=i(4848),t=i(8453);const r={title:"Auto Release Notes",description:"",date:new Date("2024-06-06T11:52:31.221Z"),preview:"",draft:!1,tags:[],categories:[],type:"default"},l=void 0,o={permalink:"/projects/2024/06/06/auto-release-notes",source:"@site/projects/2024-06-06-auto-release-notes.md",title:"Auto Release Notes",description:"",date:"2024-06-06T11:52:31.221Z",tags:[],readingTime:3.62,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Auto Release Notes",description:"",date:"2024-06-06T11:52:31.221Z",preview:"",draft:!1,tags:[],categories:[],type:"default"},unlisted:!1},a={authorsImageUrls:[]},c=[{value:"Requirements",id:"requirements",level:2},{value:"Run as Azure DevOps Pipeline",id:"run-as-azure-devops-pipeline",level:2},{value:"Run the Script Locally",id:"run-the-script-locally",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Automated Setup",id:"automated-setup",level:4},{value:"Unix-based Systems",id:"unix-based-systems",level:5},{value:"Windows",id:"windows",level:5},{value:"Manual Setup",id:"manual-setup",level:4},{value:"Running the Script",id:"running-the-script",level:3},{value:"Optional: Markdown Linting",id:"optional-markdown-linting",level:3},{value:"Customizing Prompts",id:"customizing-prompts",level:3},{value:"Logging",id:"logging",level:3},{value:"Contributing",id:"contributing",level:2},{value:"License",id:"license",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/hankanman/Auto-Release-Notes/actions/workflows/pylint.yml",children:(0,s.jsx)(n.img,{src:"https://github.com/hankanman/Auto-Release-Notes/actions/workflows/pylint.yml/badge.svg",alt:"Pylint"})})}),"\n",(0,s.jsx)(n.p,{children:"This script generates release notes for a given release version of a solution in Azure DevOps. It retrieves work items from Azure DevOps, summarizes them using GPT, and outputs the release notes in Markdown and HTML formats."}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(n.p,{children:"You will need a PAID Open AI API key to run the script, support for other methods will come in future releases"}),"\n",(0,s.jsx)(n.h2,{id:"run-as-azure-devops-pipeline",children:"Run as Azure DevOps Pipeline"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Copy the ",(0,s.jsx)(n.code,{children:"Auto-Release-Notes.yml"})," file from ",(0,s.jsx)(n.a,{href:"https://github.com/hankanman/Auto-Release-Notes/pipelines",children:"the pipelines directory of this repo"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add it to the DevOps Repo you wish to run the notes for, it is recommended this is on the main branch of the repo, the trigger is set to run on update of the main branch by default"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a new pipeline in Azure DevOps"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Select "Azure Repos Git"'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Select your Repo"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Select "Existing Azure Pipelines YAML file"'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Select the "/Auto-Release-Notes.yml" file, this will vary depending on where you stored the file in the repo'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Select "Continue"'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Select "Variables" > "New Variable"'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Name: "Model API Key"'}),"\n",(0,s.jsxs)(n.li,{children:["Value: ",(0,s.jsx)(n.code,{children:"<YOUR OPENAI API KEY>"})]}),"\n",(0,s.jsxs)(n.li,{children:["Keep this value secret: ",(0,s.jsx)(n.code,{children:"True"})]}),"\n",(0,s.jsxs)(n.li,{children:["Let users override this value when running this pipeline: ",(0,s.jsx)(n.code,{children:"True"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Select "OK"'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Adjust the remaining variables in the YAML (lines 10-20):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'variables:\r\n  # The Organisation Name of the Azure DevOps organisation to use i.e. "contoso" from "https://dev.azure.com/contoso"\r\n  ORG_NAME: "YOUR_ORG_NAME"\r\n  # The plain text name of the project to use (not the url encoded version) i.e. "My Project" from "https://dev.azure.com/contoso/My%20Project"\r\n  PROJECT_NAME: "YOUR_PROJECT_NAME"\r\n  # The name of the solution. This will appear as part of the title of the notes document\r\n  SOLUTION_NAME: "YOUR_SOLUTION_NAME"\r\n  # The query id for the release notes query setup in Azure DevOps as a GUID i.e. "f5b6e2af-8f0c-4f6c-9a8b-3f3f2b7e0c1e" from "https://dev.azure.com/contoso/My%20Project/_queries/query/f5b6e2af-8f0c-4f6c-9a8b-3f3f2b7e0c1e"\r\n  RELEASE_QUERY: "DEVOPS_WORK_ITEM_QUERY_GUID"\r\n  # Describe the software or project that these release notes are for, this provides context to GPT and the notes being written\r\n  SOFTWARE_SUMMARY: "LONG_SOFTWARE_SUMMARY"\r\n  # The API key for the GPT service (stored as a secret) DO NOT MODIFY THE BELOW OR ENTER YOUR API KEY HERE.\r\n  MODEL_API_KEY: $(Model API Key)\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Hit "Save" or "Save and Run"'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The pipeline will now run whenever the main branch is updated"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"run-the-script-locally",children:"Run the Script Locally"}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Python 3.7+"}),"\n",(0,s.jsx)(n.li,{children:"Azure DevOps Personal Access Token (PAT)"}),"\n",(0,s.jsx)(n.li,{children:"OpenAI API Key"}),"\n",(0,s.jsx)(n.li,{children:"Node.js and npm (for optional markdownlint-cli installation)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsx)(n.h4,{id:"automated-setup",children:"Automated Setup"}),"\n",(0,s.jsx)(n.h5,{id:"unix-based-systems",children:"Unix-based Systems"}),"\n",(0,s.jsxs)(n.p,{children:["To automate the setup of the repository on Unix-based systems, run the ",(0,s.jsx)(n.code,{children:"setup.sh"})," script. This script will install the required Python packages, install ",(0,s.jsx)(n.code,{children:"markdownlint-cli"}),", and create a ",(0,s.jsx)(n.code,{children:".env"})," file with blank values if it does not exist."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chmod +x setup.sh\r\n./setup.sh\n"})}),"\n",(0,s.jsx)(n.h5,{id:"windows",children:"Windows"}),"\n",(0,s.jsxs)(n.p,{children:["To automate the setup of the repository on Windows, run the ",(0,s.jsx)(n.code,{children:"setup.ps1"})," PowerShell script. This script will install the required Python packages, install ",(0,s.jsx)(n.code,{children:"markdownlint-cli"}),", and create a ",(0,s.jsx)(n.code,{children:".env"})," file with blank values if it does not exist."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:".\\setup.ps1\n"})}),"\n",(0,s.jsx)(n.h4,{id:"manual-setup",children:"Manual Setup"}),"\n",(0,s.jsx)(n.p,{children:"If you prefer to set up the environment manually, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Install the required Python packages:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install -r requirements.txt\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Install ",(0,s.jsx)(n.code,{children:"markdownlint-cli"})," using npm:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install -g markdownlint-cli\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Create a ",(0,s.jsx)(n.code,{children:".env"})," file in the root directory of the project to store your secrets. This file should contain the following variables:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dotenv",children:"# Azure DevOps and OpenAI Configuration\r\nORG_NAME=\r\nPROJECT_NAME=\r\nSOLUTION_NAME=\r\nRELEASE_VERSION=\r\nRELEASE_QUERY=\r\nPAT=\r\nGPT_API_KEY=\r\nMODEL=\r\nMODEL_BASE_URL=\r\nDEVOPS_BASE_URL=\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:".env"})," file does not exist, it will be generated with blank values on the first load."]}),"\n",(0,s.jsx)(n.h3,{id:"running-the-script",children:"Running the Script"}),"\n",(0,s.jsx)(n.p,{children:"To run the script, execute the following command in your terminal:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python main.py\n"})}),"\n",(0,s.jsx)(n.p,{children:"The script will generate the release notes in the specified output folder in both Markdown and HTML formats."}),"\n",(0,s.jsx)(n.h3,{id:"optional-markdown-linting",children:"Optional: Markdown Linting"}),"\n",(0,s.jsx)(n.p,{children:"If you wish to lint and format the generated Markdown file, you can run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"markdownlint ./Releases/*.md\n"})}),"\n",(0,s.jsx)(n.h3,{id:"customizing-prompts",children:"Customizing Prompts"}),"\n",(0,s.jsxs)(n.p,{children:["You can customize the GPT prompts by editing ",(0,s.jsx)(n.code,{children:"SUMMARY_PROMPT"})," and ",(0,s.jsx)(n.code,{children:"ITEM_PROMPT"})," in the ",(0,s.jsx)(n.code,{children:"config.py"})," file."]}),"\n",(0,s.jsx)(n.h3,{id:"logging",children:"Logging"}),"\n",(0,s.jsxs)(n.p,{children:["The script uses Python's logging module to provide detailed logs of its execution. You can adjust the logging level in ",(0,s.jsx)(n.code,{children:"main.py"})," by modifying the ",(0,s.jsx)(n.code,{children:"setup_logs"})," function call."]}),"\n",(0,s.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,s.jsx)(n.p,{children:"If you have any suggestions or improvements, feel free to create a pull request or open an issue."}),"\n",(0,s.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,s.jsx)(n.p,{children:"This project is licensed under the MIT License."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);