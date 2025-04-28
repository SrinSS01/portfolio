export interface PortfolioData {
	name: string
	title: string
	about: string[]
	projects: {
		title: string
		description: string
		tags: string[]
		link?: string
		github?: string
	}[]
	skills: {
		languages: { name: string; level: number }[]
		frontend: { name: string; level: number }[]
		backend: { name: string; level: number }[]
		database: { name: string; level: number }[]
		game_development: { name: string; level: number }[]
		devops: { name: string; level: number }[]
		other: string[]
	}
	experience: {
		title: string
		company: string
		period: string
		responsibilities: string[]
	}[]
	education: {
		degree: string
		institution: string
		period: string
		details?: string
	}[]
	contact: {
		email: string
		phone: string
		location: string
		website: string
	}
	social: {
		github: string
		linkedin: string
		twitter: string
	}
	testimonials?: {
		quote: string
		name: string
		title: string
	}[]
	resumeUrl: string
}

export const portfolioData: PortfolioData = {
	name: "Srinjoy Sinha",
	title: "Junior Software Engineer",
	about: [
		"I'm a passionate software engineer with 2 years of experience developing robust web applications and backend systems. My fascination with technology drives me, and I'm now eagerly focusing that energy towards my ultimate ambition: game development.",
		"After earning my Bachelor of Computer Applications degree from the Institute of Engineering & Management, I launched my career at LTIMindtree. This foundational role has provided me with invaluable experience in building real-world, full-stack applications, including complex agentic solutions for the insurance industry.",
		"I specialize in bringing full-stack solutions to life, comfortable working on both backend logic and front-end interfaces. My experience includes building and maintaining scalable applications and understanding complex system requirements. I am actively applying these software engineering principles while learning game development tools and technologies like Unity and C#, aiming to build immersive interactive experiences.", // Adjusted tech mention
		"When I'm not coding, I'm often diving into personal game development projects, exploring new technologies, or playing chess."
	],
	projects: [
		{
			title: "OpenGL/Vulkan Lighting Sandbox",
			description: "An interactive sandbox built from scratch in C++ using OpenGL or Vulkan, allowing users to experiment with different lighting models (e.g., Phong, Blinn-Phong, basic PBR), light types (directional, point, spot), and material properties on 3D models.",
			tags: [ "C++", "OpenGL", "Vulkan", "GLSL", "Graphics", "Engine Dev" ],
			link: "#", // Optional: Link to a live WebAssembly demo if possible
			github: "https://github.com/SrinSS01/graphics-sandbox", // Example name
		},
		{
			title: "Simple 2D Game Engine Core",
			description: "Developed the foundational components of a 2D game engine in C++, including an entity-component system (ECS) basics, sprite rendering (using SDL/SFML or custom OpenGL), basic physics/collision (AABB), and input handling.",
			tags: [ "C++", "Engine Dev", "ECS", "OpenGL", "SDL/SFML", "Physics" ],
			link: "#", // Optional: Link to a demo video/gif
			github: "https://github.com/SrinSS01/simple-2d-engine", // Example name
		},
		{
			title: "Networked Multiplayer Pong/Breakout",
			description: "Created a classic arcade game clone (like Pong or Breakout) with added client-server networking using C# (or C++) and a simple backend (potentially Node.js/Go leveraging your experience) for state synchronization.",
			tags: [ "C#", "C++", "Networking", "Sockets", "Node.js/Go", "Gameplay", "Backend" ],
			link: "#", // Optional: Link to gameplay video
			github: "https://github.com/SrinSS01/networked-pong", // Example name
		},
		{
			title: "Procedural Dungeon Generator",
			description: "Implemented algorithms (like Cellular Automata or BSP Trees) in C++ or Rust to procedurally generate 2D dungeon layouts. Includes visualization using a simple graphics library or ASCII output.",
			tags: [ "C++", "Rust", "Algorithms", "Procedural Generation", "Game Logic" ],
			link: "#", // Optional: Link to screenshot/gif gallery
			github: "https://github.com/SrinSS01/procgen-dungeon", // Example name
		},
		{
			title: "Game Asset/Tool Pipeline Script",
			description: "Developed a Python script (or Go tool) to automate a part of the asset pipeline, such as batch processing images for specific formats, generating sprite sheets, or validating custom data files (e.g., JSON level data).",
			tags: [ "Python", "Go", "Tooling", "Automation", "Pipeline", "Backend" ],
			link: "#", // Link to description/usage if no UI
			github: "https://github.com/SrinSS01/asset-pipeline-tool", // Example name
		},
		{
			title: "Enhanced Console Chess (with AI)",
			description: "Built upon an existing Rust console chess game by adding features like persistent ELO rating (simple file storage), move history, undo functionality, and implementing a basic Minimax AI opponent.",
			tags: [ "Rust", "Game Logic", "AI", "Algorithms", "Data Persistence" ],
			link: "#", // Link to gameplay demo/description
			github: "https://github.com/SrinSS01/Chess-console-rust", // Use your existing repo!
		},
		{
			title: "ImGui-based Game Editor Module",
			description: "Created a specific editor module using C++ and ImGui (e.g., a level object placer, a simple animation frame editor, or a character stat editor) that saves/loads data to/from a structured format like JSON.",
			tags: [ "C++", "ImGui", "Tooling", "UI/UX", "JSON", "Editor" ],
			link: "#", // Optional: Link to screenshots/demo video
			github: "https://github.com/SrinSS01/imgui-editor-module", // Example name
		}
	],
	skills: {
		languages: [ // Grouping languages separately can be clearer
			{ name: "JavaScript / TypeScript", level: 85 }, // Combine JS/TS if appropriate
			{ name: "Python", level: 80 },
			{ name: "Java", level: 80 },
			{ name: "C#", level: 75 }, // Important for Unity
			{ name: "C", level: 85 }, // Important for Unity
			{ name: "C++", level: 65 }, // Key target skill
			{ name: "HTML/CSS", level: 90 },
			{ name: "Go", level: 60 } // If you have experience (e.g., from Fiverr projects)
		],
		frontend: [
			{ name: "React", level: 95 },
			{ name: "Angular", level: 50 },
			{ name: "Next.js", level: 90 },
			{ name: "TypeScript", level: 85 },
			{ name: "HTML/CSS", level: 90 },
			{ name: "Tailwind CSS", level: 85 },
		],
		backend: [
			{ name: "Node.js", level: 90 },
			{ name: "Express", level: 85 },
			{ name: "Python", level: 80 },
			{ name: "Java", level: 80 },
			{ name: "C#", level: 80 },
		],
		database: [
			{ name: "MongoDB", level: 85 },
			{ name: "PostgreSQL", level: 80 },
			{ name: "SQLite", level: 80 },
			{ name: "Pocketbase", level: 80 },
		],
		game_development: [ // NEW CATEGORY
			{ name: "Unity Engine", level: 50 }, // Example - replace if using Unreal/Godot
			{ name: "OpenGL", level: 60 },
			{ name: "Vulkan", level: 50 },
			{ name: "Gameplay Logic", level: 70 }, // From Chess, etc.
			{ name: "Graphics Programming Concepts", level: 65 },
			{ name: "Version Control (Git)", level: 95 }, // Essential, move here or keep in 'other'
			{ name: "Shader Basics (GLSL)", level: 60 },
			{ name: "Game Physics Concepts", level: 10 },
		],
		devops: [
			{ name: "Docker", level: 85 },
			{ name: "AWS", level: 80 },
		],
		other: [ // Refocused 'other'
			"System Design", // Highly transferable
			"Agile/Scrum Methodologies",
			"Object-Oriented Programming (OOP)",
			"Data Structures & Algorithms", // Crucial for games
			"Problem Solving",
			"Performance Optimization", // Mention context if needed (Web/Game)
			"Software Testing (Unit/Integration)", // If applicable
			"Debugging Techniques",
			"Responsive Design/Accessibility",
		]
	},
	experience: [
		{
			// Adjust title based on your actual title at LTIMindtree (e.g., Software Engineer, Associate Software Engineer)
			title: "Software Engineer",
			company: "LTIMindtree",
			// Adjust the start year based on your actual start date to reflect 2 years of experience
			period: "2023 - Present",
			responsibilities: [
				// Focus on action verbs and transferable skills:
				"Developed and maintained full-stack web applications, contributing to both front-end interfaces and backend service logic.",
				"Implemented backend systems and REST APIs using technologies like Node.js, Java, Python, MongoDB to support application features.",
				"Designed and coded complex business logic for specialized agentic solutions within the insurance domain, honing problem-solving abilities.", // Highlights complex logic
				"Gained hands-on experience with database management like MongoDB, QdrantDB and data handling for application persistence.",
				"Collaborated within an Agile development team, participating in sprints, code reviews, and feature delivery cycles.",
				"Contributed to the end-to-end software development lifecycle, from requirements gathering to deployment and maintenance."
				// Optional: Add specific achievements if possible (e.g., "Optimized specific API calls, reducing latency by X%" or "Successfully integrated X third-party service")
				// Optional: If you worked with specific architectures (like microservices, even as a contributor), mention it: "Worked on applications utilizing microservice architecture principles."
			]
		}
		// No other entries as you have 2 years at one company
	],
	education: [
		{
			degree: "Bachelor of Computer Applications (BCA)",
			institution: "Institute of Engineering & Management (IEM), Kolkata",
			period: "2020 - 2023",
			details: "Focused coursework in Data Structures, Algorithms, Database Management, Web Technologies"
		}
	],
	contact: {
		email: "srinjoy.s.01.in@gmail.com",
		phone: "+919830111046",
		location: "West Bengal, India.",
		website: "https://alexjohnson.dev",
	},
	social: {
		github: "https://github.com/SrinSS01",
		linkedin: "https://www.linkedin.com/in/srinjoy-sinha-2598b9208",
		twitter: "https://twitter.com/srin_s_01",
	},
	resumeUrl: "/resume.pdf",
}
