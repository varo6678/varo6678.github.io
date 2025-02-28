// Project and resource data
const projectsData = {
    "chatbot": {
        "title": {
            "en": "Chatbot",
            "es": "Chatbot"
        },
        "description": {
            "en": "A sophisticated chatbot built using modern NLP techniques. This project uses an API-based architecture to connect to various LLM backends including Ollama and Hugging Face. Features include conversation history, context management, and guardrails for responsible AI usage.",
            "es": "Un chatbot sofisticado construido con técnicas modernas de PNL. Este proyecto utiliza una arquitectura basada en API para conectarse a varios backends de LLM incluyendo Ollama y Hugging Face. Las características incluyen historial de conversación, gestión de contexto y barandillas para un uso responsable de la IA."
        },
        "resources": ["ollama", "nemoguardrails", "uvicorn", "fastapi"],
        "url": "https://varo6678.github.io/chatbot"
    },
    "predicting-tourism": {
        "title": {
            "en": "Predicting Tourism",
            "es": "Predicción de Turismo"
        },
        "description": {
            "en": "A data science project that uses machine learning to predict tourism patterns and trends. The model takes into account historical data, seasonal variations, and global events to forecast visitor numbers and spending patterns.",
            "es": "Un proyecto de ciencia de datos que utiliza aprendizaje automático para predecir patrones y tendencias turísticas en las Islas Canarias. El modelo tiene en cuenta datos históricos, variaciones estacionales y eventos globales para pronosticar el número de visitantes y los patrones de gasto."
        },
        "resources": ["pandas", "scikit-learn", "tensorflow", "matplotlib"],
        "url": "https://varo6678.github.io/predicting-tourism"
    },
    "ts-applied-to-retail": {
        "title": {
            "en": "Time Series Applied to Retail",
            "es": "Series Temporales Aplicadas al Comercio"
        },
        "description": {
            "en": "This project demonstrates the application of time series analysis in retail forecasting. It implements ARIMA, SARIMA, and Prophet models to predict sales, inventory needs, and staffing requirements based on historical retail data.",
            "es": "Este proyecto demuestra la aplicación del análisis de series temporales en la previsión minorista. Implementa modelos ARIMA, SARIMA y Prophet para predecir las ventas, las necesidades de inventario y los requisitos de personal basados en datos históricos de venta minorista."
        },
        "resources": ["prophet", "statsmodels", "numpy", "seaborn"],
        "url": "https://varo6678.github.io/ts-applied-to-retail"
    },
    "predicting-molecular-properties": {
        "title": {
            "en": "Predicting Molecular Properties with GNN",
            "es": "Predicción de Propiedades Moleculares con GNN"
        },
        "description": {
            "en": "This research project uses Graph Neural Networks (GNN) to predict molecular properties and behaviors. By representing molecules as graphs, the model can learn structure-property relationships for applications in drug discovery and materials science.",
            "es": "Este proyecto de investigación utiliza Redes Neuronales de Grafos (GNN) para predecir propiedades y comportamientos moleculares. Al representar moléculas como grafos, el modelo puede aprender relaciones estructura-propiedad para aplicaciones en descubrimiento de fármacos y ciencia de materiales."
        },
        "resources": ["pytorch", "pytorch-geometric", "rdkit", "jupyter"],
        "url": "https://varo6678.github.io/predicting-molecular-properties"
    },
    "theoretical-study-dft": {
        "title": {
            "en": "Theoretical Study of Materials with DFT",
            "es": "Estudio Teórico de Materiales con DFT"
        },
        "description": {
            "en": "A computational physics project focusing on Density Functional Theory (DFT) calculations to study material properties at the quantum level. The research examines electronic structure, band gaps, and optical properties of novel semiconductor materials.",
            "es": "Un proyecto de física computacional centrado en cálculos de Teoría Funcional de la Densidad (DFT) para estudiar propiedades de materiales a nivel cuántico. La investigación examina la estructura electrónica, las brechas de bandas y las propiedades ópticas de nuevos materiales semiconductores."
        },
        "resources": ["vasp", "quantum-espresso", "pymatgen", "ase"],
        "url": "https://varo6678.github.io/theoretical-study-dft"
    }
};

const resourcesData = {
    // Chatbot resources
    "ollama": {
        "title": {
            "en": "Ollama",
            "es": "Ollama"
        },
        "description": {
            "en": "Ollama is an open-source framework for running large language models locally. It provides a simple API for running models like Llama, Mistral, and others on personal computers without requiring cloud infrastructure.",
            "es": "Ollama es un framework de código abierto para ejecutar modelos de lenguaje grandes localmente. Proporciona una API simple para ejecutar modelos como Llama, Mistral y otros en computadoras personales sin requerir infraestructura en la nube."
        },
        "url": "https://github.com/ollama/ollama"
    },
    "nemoguardrails": {
        "title": {
            "en": "NeMo Guardrails",
            "es": "NeMo Guardrails"
        },
        "description": {
            "en": "NeMo Guardrails is an open-source toolkit by NVIDIA for adding programmable guardrails to LLM-based conversational systems. It helps create safer AI assistants by filtering harmful inputs and outputs.",
            "es": "NeMo Guardrails es un kit de herramientas de código abierto de NVIDIA para añadir barandillas programables a sistemas conversacionales basados en LLM. Ayuda a crear asistentes de IA más seguros filtrando entradas y salidas dañinas."
        },
        "url": "https://github.com/NVIDIA/NeMo-Guardrails"
    },
    "uvicorn": {
        "title": {
            "en": "Uvicorn",
            "es": "Uvicorn"
        },
        "description": {
            "en": "Uvicorn is an ASGI web server implementation for Python. It's lightning-fast and is commonly used to serve FastAPI applications with high performance and concurrency support.",
            "es": "Uvicorn es una implementación de servidor web ASGI para Python. Es extremadamente rápido y se utiliza comúnmente para servir aplicaciones FastAPI con alto rendimiento y soporte para concurrencia."
        },
        "url": "https://www.uvicorn.org/"
    },
    "fastapi": {
        "title": {
            "en": "FastAPI",
            "es": "FastAPI"
        },
        "description": {
            "en": "FastAPI is a modern, high-performance web framework for building APIs with Python based on standard Python type hints. It's designed to be easy to use while providing automatic interactive documentation.",
            "es": "FastAPI es un framework web moderno y de alto rendimiento para construir APIs con Python basado en sugerencias de tipo estándar de Python. Está diseñado para ser fácil de usar y proporciona documentación interactiva automática."
        },
        "url": "https://fastapi.tiangolo.com/"
    },
    
    // Predicting Tourism resources
    "pandas": {
        "title": {
            "en": "Pandas",
            "es": "Pandas"
        },
        "description": {
            "en": "Pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation library for Python. It provides data structures for efficiently storing and analyzing tabular data.",
            "es": "Pandas es una biblioteca de análisis y manipulación de datos de código abierto rápida, potente, flexible y fácil de usar para Python. Proporciona estructuras de datos para almacenar y analizar eficientemente datos tabulares."
        },
        "url": "https://pandas.pydata.org/"
    },
    "scikit-learn": {
        "title": {
            "en": "Scikit-learn",
            "es": "Scikit-learn"
        },
        "description": {
            "en": "Scikit-learn is a simple and efficient tool for predictive data analysis built on NumPy, SciPy, and matplotlib. It features various classification, regression and clustering algorithms.",
            "es": "Scikit-learn es una herramienta simple y eficiente para análisis de datos predictivos construida sobre NumPy, SciPy y matplotlib. Cuenta con varios algoritmos de clasificación, regresión y agrupamiento."
        },
        "url": "https://scikit-learn.org/"
    },
    "tensorflow": {
        "title": {
            "en": "TensorFlow",
            "es": "TensorFlow"
        },
        "description": {
            "en": "TensorFlow is an end-to-end open source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries and community resources that allows researchers to push the state-of-the-art in ML.",
            "es": "TensorFlow es una plataforma de código abierto integral para aprendizaje automático. Tiene un ecosistema completo y flexible de herramientas, bibliotecas y recursos comunitarios que permite a los investigadores impulsar el estado del arte en ML."
        },
        "url": "https://www.tensorflow.org/"
    },
    "matplotlib": {
        "title": {
            "en": "Matplotlib",
            "es": "Matplotlib"
        },
        "description": {
            "en": "Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python. It provides a MATLAB-like interface and can produce publication-quality figures in various formats.",
            "es": "Matplotlib es una biblioteca completa para crear visualizaciones estáticas, animadas e interactivas en Python. Proporciona una interfaz similar a MATLAB y puede producir figuras de calidad para publicaciones en varios formatos."
        },
        "url": "https://matplotlib.org/"
    },
    
    // Time Series Applied to Retail resources
    "prophet": {
        "title": {
            "en": "Prophet",
            "es": "Prophet"
        },
        "description": {
            "en": "Prophet is a forecasting procedure developed by Facebook for time series data. It's designed to be easy to use, handle missing data and outliers, and automatically find seasonal patterns in the data.",
            "es": "Prophet es un procedimiento de pronóstico desarrollado por Facebook para datos de series temporales. Está diseñado para ser fácil de usar, manejar datos faltantes y valores atípicos, y encontrar automáticamente patrones estacionales en los datos."
        },
        "url": "https://facebook.github.io/prophet/"
    },
    "statsmodels": {
        "title": {
            "en": "Statsmodels",
            "es": "Statsmodels"
        },
        "description": {
            "en": "Statsmodels is a Python module that provides classes and functions for the estimation of many different statistical models, as well as for conducting statistical tests and exploring data.",
            "es": "Statsmodels es un módulo de Python que proporciona clases y funciones para la estimación de muchos modelos estadísticos diferentes, así como para realizar pruebas estadísticas y explorar datos."
        },
        "url": "https://www.statsmodels.org/"
    },
    "numpy": {
        "title": {
            "en": "NumPy",
            "es": "NumPy"
        },
        "description": {
            "en": "NumPy is the fundamental package for scientific computing with Python. It contains a powerful N-dimensional array object, sophisticated functions, and tools for integrating C/C++ and Fortran code.",
            "es": "NumPy es el paquete fundamental para la computación científica con Python. Contiene un potente objeto de matriz N-dimensional, funciones sofisticadas y herramientas para integrar código C/C++ y Fortran."
        },
        "url": "https://numpy.org/"
    },
    "seaborn": {
        "title": {
            "en": "Seaborn",
            "es": "Seaborn"
        },
        "description": {
            "en": "Seaborn is a Python data visualization library based on matplotlib that provides a high-level interface for drawing attractive and informative statistical graphics.",
            "es": "Seaborn es una biblioteca de visualización de datos de Python basada en matplotlib que proporciona una interfaz de alto nivel para dibujar gráficos estadísticos atractivos e informativos."
        },
        "url": "https://seaborn.pydata.org/"
    },
    
    // GNN resources
    "pytorch": {
        "title": {
            "en": "PyTorch",
            "es": "PyTorch"
        },
        "description": {
            "en": "PyTorch is an open source machine learning framework based on the Torch library, used for applications such as computer vision and natural language processing. It's known for its flexibility and ease of use.",
            "es": "PyTorch es un framework de aprendizaje automático de código abierto basado en la biblioteca Torch, utilizado para aplicaciones como visión por computadora y procesamiento de lenguaje natural. Es conocido por su flexibilidad y facilidad de uso."
        },
        "url": "https://pytorch.org/"
    },
    "pytorch-geometric": {
        "title": {
            "en": "PyTorch Geometric",
            "es": "PyTorch Geometric"
        },
        "description": {
            "en": "PyTorch Geometric (PyG) is a library built upon PyTorch to easily write and train Graph Neural Networks for applications in computer vision, natural language processing and biology.",
            "es": "PyTorch Geometric (PyG) es una biblioteca construida sobre PyTorch para escribir y entrenar fácilmente Redes Neuronales de Grafos para aplicaciones en visión por computadora, procesamiento de lenguaje natural y biología."
        },
        "url": "https://pytorch-geometric.readthedocs.io/"
    },
    "rdkit": {
        "title": {
            "en": "RDKit",
            "es": "RDKit"
        },
        "description": {
            "en": "RDKit is a collection of cheminformatics and machine-learning software written in C++ and Python. It's widely used for manipulating and analyzing chemical structures and data.",
            "es": "RDKit es una colección de software de quimioinformática y aprendizaje automático escrito en C++ y Python. Se utiliza ampliamente para manipular y analizar estructuras químicas y datos."
        },
        "url": "https://www.rdkit.org/"
    },
    "jupyter": {
        "title": {
            "en": "Jupyter",
            "es": "Jupyter"
        },
        "description": {
            "en": "Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations and narrative text. It's widely used in data science, scientific computing, and machine learning.",
            "es": "Jupyter Notebook es una aplicación web de código abierto que te permite crear y compartir documentos que contienen código en vivo, ecuaciones, visualizaciones y texto narrativo. Es ampliamente utilizado en ciencia de datos, computación científica y aprendizaje automático."
        },
        "url": "https://jupyter.org/"
    },
    
    // DFT resources
    "vasp": {
        "title": {
            "en": "VASP",
            "es": "VASP"
        },
        "description": {
            "en": "The Vienna Ab initio Simulation Package (VASP) is a computer program for atomic scale materials modeling, e.g. electronic structure calculations and quantum-mechanical molecular dynamics, from first principles.",
            "es": "El Vienna Ab initio Simulation Package (VASP) es un programa informático para el modelado de materiales a escala atómica, por ejemplo, cálculos de estructura electrónica y dinámica molecular cuántica, desde primeros principios."
        },
        "url": "https://www.vasp.at/"
    },
    "quantum-espresso": {
        "title": {
            "en": "Quantum ESPRESSO",
            "es": "Quantum ESPRESSO"
        },
        "description": {
            "en": "Quantum ESPRESSO is an integrated suite of open-source computer codes for electronic-structure calculations and materials modeling at the nanoscale based on density-functional theory and plane waves.",
            "es": "Quantum ESPRESSO es un conjunto integrado de códigos informáticos de código abierto para cálculos de estructura electrónica y modelado de materiales a nanoescala basado en la teoría del funcional de la densidad y ondas planas."
        },
        "url": "https://www.quantum-espresso.org/"
    },
    "pymatgen": {
        "title": {
            "en": "Pymatgen",
            "es": "Pymatgen"
        },
        "description": {
            "en": "Pymatgen (Python Materials Genomics) is a robust, open-source Python library for materials analysis that powers the Materials Project. It provides high-level interfaces to many advanced materials simulation codes.",
            "es": "Pymatgen (Python Materials Genomics) es una biblioteca Python robusta y de código abierto para análisis de materiales que impulsa el Proyecto de Materiales. Proporciona interfaces de alto nivel para muchos códigos avanzados de simulación de materiales."
        },
        "url": "https://pymatgen.org/"
    },
    "ase": {
        "title": {
            "en": "ASE",
            "es": "ASE"
        },
        "description": {
            "en": "The Atomic Simulation Environment (ASE) is a set of tools and Python modules for setting up, manipulating, running, visualizing and analyzing atomistic simulations.",
            "es": "El Entorno de Simulación Atómica (ASE) es un conjunto de herramientas y módulos de Python para configurar, manipular, ejecutar, visualizar y analizar simulaciones atomísticas."
        },
        "url": "https://wiki.fysik.dtu.dk/ase/"
    }
};

// Redirect when selecting a project option
function redirectToProject(select) {
    const url = select.value;
    if (url) {
        window.open(url, '_blank');
    }
}

// Redirect when selecting a resource option
function redirectToResource(select) {
    const url = select.value;
    if (url) {
        window.open(url, '_blank');
    }
}

// Handle project selection
function handleProjectChange(projectId) {
    // Get current language
    const currentLang = document.getElementById('language-toggle').checked ? 'es' : 'en';
    
    // Reset if no project is selected
    if (!projectId) {
        // Update resource dropdown
        updateResourceDropdown([], currentLang);
        
        // Update project summary
        const projectSummary = document.getElementById('project-summary');
        projectSummary.innerHTML = `
            <p class="en">Select a project to see its description.</p>
            <p class="es">Selecciona un proyecto para ver su descripción.</p>
        `;
        
        // Update resource summary
        const resourceSummary = document.getElementById('resource-summary');
        resourceSummary.innerHTML = `
            <p class="en">Select a resource to see its description.</p>
            <p class="es">Selecciona un recurso para ver su descripción.</p>
        `;
        
        showLanguage(currentLang);
        return;
    }
    
    // Get project data
    const project = projectsData[projectId];
    
    // Update project summary
    const projectSummary = document.getElementById('project-summary');
    projectSummary.innerHTML = `
        <h3>${project.title[currentLang]}</h3>
        <p class="en">${project.description.en}</p>
        <p class="es">${project.description.es}</p>
        <p class="en"><a href="${project.url}" target="_blank">View Project</a></p>
        <p class="es"><a href="${project.url}" target="_blank">Ver Proyecto</a></p>
    `;
    
    // Update resource dropdown with project-specific resources
    updateResourceDropdown(project.resources, currentLang);
    
    // Clear resource summary
    const resourceSummary = document.getElementById('resource-summary');
    resourceSummary.innerHTML = `
        <p class="en">Select a resource to see its description.</p>
        <p class="es">Selecciona un recurso para ver su descripción.</p>
    `;
    
    // Show correct language
    showLanguage(currentLang);
}

// Handle resource selection
function handleResourceChange(resourceId) {
    // Get current language
    const currentLang = document.getElementById('language-toggle').checked ? 'es' : 'en';
    
    // Reset if no resource is selected
    if (!resourceId) {
        // Update resource summary
        const resourceSummary = document.getElementById('resource-summary');
        resourceSummary.innerHTML = `
            <p class="en">Select a resource to see its description.</p>
            <p class="es">Selecciona un recurso para ver su descripción.</p>
        `;
        
        showLanguage(currentLang);
        return;
    }
    
    // Get resource data
    const resource = resourcesData[resourceId];
    
    // Update resource summary
    const resourceSummary = document.getElementById('resource-summary');
    resourceSummary.innerHTML = `
        <h3>${resource.title[currentLang]}</h3>
        <p class="en">${resource.description.en}</p>
        <p class="es">${resource.description.es}</p>
        <p class="en"><a href="${resource.url}" target="_blank">Learn More</a></p>
        <p class="es"><a href="${resource.url}" target="_blank">Saber Más</a></p>
    `;
    
    // Show correct language
    showLanguage(currentLang);
}

// Update resource dropdown based on selected project
function updateResourceDropdown(resources, currentLang) {
    const resourceSelect = document.getElementById('resource-select');
    
    // Clear existing options
    resourceSelect.innerHTML = '';
    
    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    
    if (resources.length === 0) {
        // If no project selected
        defaultOption.className = currentLang === 'en' ? 'en' : 'es';
        defaultOption.textContent = currentLang === 'en' ? 'Select a Project First' : 'Selecciona un Proyecto Primero';
    } else {
        // If project selected
        defaultOption.className = currentLang === 'en' ? 'en' : 'es';
        defaultOption.textContent = currentLang === 'en' ? 'Select a Resource' : 'Selecciona un Recurso';
    }
    
    resourceSelect.appendChild(defaultOption);
    
    // Add resource options
    resources.forEach(resourceId => {
        const option = document.createElement('option');
        option.value = resourceId;
        option.textContent = resourcesData[resourceId].title[currentLang];
        resourceSelect.appendChild(option);
    });
}

// Update both project and resource dropdowns based on the current language
function updateDropdowns(currentLang) {
    const projectSelect = document.getElementById('project-select');
    const selectedProjectId = projectSelect.value;
    
    // Update project dropdown options
    for (let i = 0; i < projectSelect.options.length; i++) {
        const option = projectSelect.options[i];
        if (option.value && projectsData[option.value]) {
            option.textContent = projectsData[option.value].title[currentLang];
        } else if (i === 0) {
            // Default option
            option.textContent = currentLang === 'en' ? 'Select a Project' : 'Selecciona un Proyecto';
        }
    }
    
    // If a project is selected, update resource dropdown options
    if (selectedProjectId) {
        const project = projectsData[selectedProjectId];
        updateResourceDropdown(project.resources, currentLang);
        
        // Also update the project summary
        const projectSummary = document.getElementById('project-summary');
        projectSummary.innerHTML = `
            <h3>${project.title[currentLang]}</h3>
            <p class="en">${project.description.en}</p>
            <p class="es">${project.description.es}</p>
            <p class="en"><a href="${project.url}" target="_blank">View Project</a></p>
            <p class="es"><a href="${project.url}" target="_blank">Ver Proyecto</a></p>
        `;
    }
    
    // If a resource is selected, update its summary
    const resourceSelect = document.getElementById('resource-select');
    const selectedResourceId = resourceSelect.value;
    
    if (selectedResourceId) {
        const resource = resourcesData[selectedResourceId];
        const resourceSummary = document.getElementById('resource-summary');
        resourceSummary.innerHTML = `
            <h3>${resource.title[currentLang]}</h3>
            <p class="en">${resource.description.en}</p>
            <p class="es">${resource.description.es}</p>
            <p class="en"><a href="${resource.url}" target="_blank">Learn More</a></p>
            <p class="es"><a href="${resource.url}" target="_blank">Saber Más</a></p>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Language switcher functionality
    const languageToggle = document.getElementById('language-toggle');
    const englishElements = document.querySelectorAll('.en');
    const spanishElements = document.querySelectorAll('.es');
    
    // Set default language
    let currentLang = 'en';
    showLanguage(currentLang);
    
    // Handle language switch
    languageToggle.addEventListener('change', function() {
        currentLang = this.checked ? 'es' : 'en';
        showLanguage(currentLang);
        updateDropdowns(currentLang);
        // Store preference in localStorage
        localStorage.setItem('preferredLanguage', currentLang);
    });
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLang = savedLang;
        languageToggle.checked = (currentLang === 'es');
        showLanguage(currentLang);
        // Update dropdowns with the correct language
        setTimeout(() => updateDropdowns(currentLang), 100);
    }
    
    // Dark mode functionality
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    
    // Handle dark mode switch
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    
    // Load saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
    
    // Initialize dropdowns
    updateDropdowns(currentLang);
});

function showLanguage(lang) {
    const englishElements = document.querySelectorAll('.en');
    const spanishElements = document.querySelectorAll('.es');
    
    if (lang === 'en') {
        englishElements.forEach(el => el.style.display = 'block');
        spanishElements.forEach(el => el.style.display = 'none');
    } else {
        englishElements.forEach(el => el.style.display = 'none');
        spanishElements.forEach(el => el.style.display = 'block');
    }
}