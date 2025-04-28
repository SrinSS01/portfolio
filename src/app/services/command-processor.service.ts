import { Injectable } from '@angular/core';
import { Command, commands } from '../data/commands';
import { CommandOutput } from '../data/commandOutput';
import { portfolioData } from '../data/portfolio-data';

type SkillDetails = {
	name: string;
	level: number;
};
type Skills = {
	frontend: SkillDetails[];
	backend: SkillDetails[];
	database: SkillDetails[];
	devops: SkillDetails[];
	other: string[];
} | { frontend: SkillDetails[] } | { backend: SkillDetails[] } | { database: SkillDetails[] } | {
	devops: SkillDetails[]
} | { other: string[] };

@Injectable({
	providedIn: 'root'
})
export class CommandProcessorService {

	processCommand(command: string): CommandOutput {
		const args = command.split(" ");
		const mainCommand = args[0] as Command;
		const flags = args.slice(1);

		switch ( mainCommand ) {
			case "welcome":
				return {
					children: [
						{
							element: "div",
							className: "text-yellow-300 text-xl font-bold",
							innerText: `${ portfolioData.name } - Interactive Portfolio Terminal`
						},
						{
							element: "pre",
							className: "text-cyan-400 leading-[normal]",
							innerText: `
██████╗  ██████╗ ██████╗ ████████╗    ███████╗ ██████╗ ██╗     ██╗ ██████╗
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝    ██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║       █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║       ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║       ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝       ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝
`
						},
						{
							element: "p",
							children: [
								{
									element: "span",
									innerText: "Welcome to my interactive portfolio terminal! Type "
								},
								{
									element: "span",
									className: "text-yellow-300",
									innerText: "help"
								},
								{
									element: "span",
									innerText: "  to see available commands."
								}
							]
						}
					],
					className: 'space-y-2',
					element: 'div',
				};

			case "help":
				return {
					children: [
						{
							element: "div",
							className: "text-yellow-300 font-bold",
							innerText: "Available Commands:"
						},
						{
							element: "div",
							className: "grid grid-cols-1 md:grid-cols-2 gap-2",
							children: [
								{
									element: "div",
									children: [
										{
											element: "span",
											className: "text-cyan-400",
											innerText: "about"
										},
										{
											element: "span",
											innerText: " - Display information about me"
										}
									]
								},
								{
									element: "div",
									children: [
										{
											element: "span",
											className: "text-cyan-400",
											innerText: "projects"
										},
										{
											element: "span",
											innerText: " - List my projects"
										}
									]
								},
								{
									element: "div",
									children: [
										{
											element: "span",
											className: "text-cyan-400",
											innerText: "skills"
										},
										{
											element: "span",
											innerText: " - Show my technical skills"
										}
									]
								},
								{
									element: "div",
									children: [
										{
											element: "span",
											className: "text-cyan-400",
											innerText: "experience"
										},
										{
											element: "span",
											innerText: " - Show my work experience"
										}
									]
								},
								{
									element: "div",
									children: [
										{
											element: "span",
											className: "text-cyan-400",
											innerText: "education"
										},
										{
											element: "span",
											innerText: " - Show my education"
										}
									]
								},
								{
									element: "div",
									children: [
										{
											element: "span",
											className: "text-cyan-400",
											innerText: "contact"
										},
										{
											element: "span",
											innerText: " - Display contact information"
										}
									]
								},
								{
									element: "div",
									children: [
										{
											element: "span",
											className: "text-cyan-400",
											innerText: "social"
										},
										{
											element: "span",
											innerText: " - Show social media links"
										}
									]
								},
								{
									element: "div",
									children: [
										{
											element: "span",
											className: "text-cyan-400",
											innerText: "resume"
										},
										{
											element: "span",
											innerText: " - Download my resume"
										}
									]
								},
								{
									element: "div",
									children: [
										{
											element: "span",
											className: "text-cyan-400",
											innerText: "clear"
										},
										{
											element: "span",
											innerText: " - Clear the terminal"
										}
									]
								},
								{
									element: "div",
									children: [
										{
											element: "span",
											className: "text-cyan-400",
											innerText: "all"
										},
										{
											element: "span",
											innerText: " - Display all information"
										}
									]
								}
							]
						},
						{
							element: "div",
							className: "mt-2",
							children: [
								{
									element: "div",
									className: "text-yellow-300 font-bold",
									innerText: "Tips:"
								},
								{
									element: "div",
									children: [
										{
											element: "span",
											innerText: "- Use "
										},
										{
											element: "span",
											className: "text-cyan-400",
											innerText: "Tab"
										},
										{
											element: "span",
											innerText: " for autocomplete"
										}
									]
								},
								{
									element: "div",
									children: [
										{
											element: "span",
											innerText: "- Use "
										},
										{
											element: "span",
											className: "text-cyan-400",
											innerText: "↑"
										},
										{
											element: "span",
											innerText: " to navigate command history"
										}
									]
								},
								{
									element: "div",
									children: [
										{
											element: "span",
											innerText: "- Add flags for more specific information (e.g., "
										},
										{
											element: "span",
											className: "text-cyan-400",
											innerText: "projects --web"
										},
										{
											element: "span",
											innerText: ")"
										}
									]
								}
							]
						}
					],
					className: "space-y-2",
					element: "div"
				};

			case "about":
				return {
					element: "div",
					className: "space-y-2",
					children: [
						{
							element: "div",
							className: "text-yellow-300 font-bold",
							innerText: "About Me:"
						},
						{
							element: "div",
							className: "border-l-2 border-green-500 pl-4 text-white",
							children: portfolioData.about.map((paragraph, index) => ( {
								element: "p",
								className: "mb-2",
								innerText: paragraph
							} ))
						}
					]
				};

			case "projects":
				let filteredProjects = portfolioData.projects;
				if ( flags.includes("--web") ) {
					filteredProjects = filteredProjects.filter((project) =>
						project.tags.some((tag) => [ "React", "Next.js", "Web" ].includes(tag)),
					)
				} else if ( flags.includes("--mobile") ) {
					filteredProjects = filteredProjects.filter((project) =>
						project.tags.some((tag) => [ "React Native", "Mobile" ].includes(tag)),
					)
				} else if ( flags.includes("--backend") ) {
					filteredProjects = filteredProjects.filter((project) =>
						project.tags.some((tag) => [ "Node.js", "Python", "Go", "Backend" ].includes(tag)),
					)
				}
				const projectFlag = flags.find((flag) => flag.startsWith("--name="))
				if ( projectFlag ) {
					const projectName = projectFlag.replace("--name=", "").toLowerCase()
					filteredProjects = filteredProjects.filter((project) => project.title.toLowerCase().includes(projectName))
				}

				const projectToCommandOutput: CommandOutput[] = filteredProjects.map((project) => ( {
					element: "div",
					className: "border border-green-800 rounded p-2 bg-gray-900 mt-4",
					children: [
						{
							element: "div",
							className: "text-cyan-400 font-bold",
							innerText: project.title
						},
						{
							element: "div",
							className: "text-white mt-1",
							innerText: project.description
						},
						{
							element: "div",
							className: "flex flex-wrap gap-1 mt-2",
							children: project.tags.map((tag) => ( {
								element: "span",
								className: "bg-gray-800 text-yellow-300 text-xs px-2 py-1 rounded",
								innerText: tag
							} ))
						},
						{
							element: "div",
							className: "mt-2 flex gap-2",
							children: [
								...( project.link ? [ {
									element: "a",
									href: project.link,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "text-blue-400 hover:underline",
									innerText: "Demo"
								}
								] : [] ),
								...( project.github ? [ {
									element: "a",
									href: project.github,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "text-blue-400 hover:underline",
									innerText: "GitHub"
								} ] : [] )
							]
						}
					]
				} ));

				if ( projectToCommandOutput.length === 0 ) {
					projectToCommandOutput.push({
						element: "div",
						className: "text-red-400",
						innerText: "No projects match your filter criteria."
					});
				}

				return {
					element: "div",
					className: "space-y-2",
					children: [
						{
							element: "div",
							className: "text-yellow-300 font-bold",
							innerText: `Projects${ flags.length > 0 ? ` (filtered: ${ flags.join(" ") })` : "" }:`
						},
						...projectToCommandOutput,
						{
							element: "div",
							className: "text-gray-400 text-sm mt-2",
							innerText: "Tip: Filter projects with flags like --web, --mobile, --backend, or --name=projectname"
						}
					]
				};

			case "skills":
				const category = flags.find((flag) => flag.startsWith("--category="))?.replace("--category=", "");
				let skillsToShow: Skills = portfolioData.skills;
				let categoryTitle = "";
				if ( category === "frontend" ) {
					skillsToShow = { frontend: portfolioData.skills.frontend }
					categoryTitle = "Frontend"
				} else if ( category === "backend" ) {
					skillsToShow = { backend: portfolioData.skills.backend }
					categoryTitle = "Backend"
				} else if ( category === "database" ) {
					skillsToShow = { database: portfolioData.skills.database }
					categoryTitle = "Database"
				} else if ( category === "devops" ) {
					skillsToShow = { devops: portfolioData.skills.devops }
					categoryTitle = "DevOps"
				} else if ( category === "other" ) {
					skillsToShow = { other: portfolioData.skills.other }
					categoryTitle = "Other"
				}

				return {
					element: "div",
					className: "space-y-2",
					children: [
						{
							element: "div",
							className: "text-yellow-300 font-bold",
							innerText: `Skills ${ categoryTitle ? `(${ categoryTitle })` : "" }:`
						},
						...Object.entries(skillsToShow).map(([ category, skills ]) => ( {
							element: "div",
							className: "mb-4",
							children: [
								{
									element: "div",
									className: "text-cyan-400 font-bold capitalize",
									innerText: `${ category }:`
								},
								{
									element: "div",
									className: "grid grid-cols-1 md:grid-cols-2 gap-2 mt-1",
									children: Array.isArray(skills) && skills.length > 0 && typeof skills[0] === "string"
										? skills.map((skill) => ( {
											element: "div",
											className: "text-white",
											innerText: skill as string
										} ))
										: ( skills as SkillDetails[] ).map((skill) => ( {
											element: "div",
											className: "flex items-center gap-2",
											children: [
												{
													element: "span",
													className: "text-white",
													innerText: skill.name
												},
												{
													element: "div",
													className: "h-2 bg-gray-700 rounded-full flex-grow max-w-[100px]",
													children: [
														{
															element: "div",
															className: `h-full bg-green-500 rounded-full`,
															hostStyle: {
																width: `${ skill.level }%`
															}
														}
													]
												},
												{
													element: "span",
													className: "text-gray-400 text-xs",
													innerText: `${ skill.level }%`
												}
											]
										} ))
								}
							]
						} )),
						{
							element: "div",
							className: "text-gray-400 text-sm",
							innerText: "Tip: Filter skills with --category=frontend, --category=backend, etc."
						}
					]
				};

			case "experience":
				return {
					element: "div",
					className: "space-y-2",
					children: [
						{
							element: "div",
							className: "text-yellow-300 font-bold",
							innerText: "Work Experience:"
						},
						{
							element: "div",
							className: "space-y-4",
							children: portfolioData.experience.map((job, index) => ( {
								element: "div",
								className: "border-l-2 border-green-500 pl-4",
								children: [
									{
										element: "div",
										className: "text-cyan-400 font-bold",
										innerText: `${ job.title } @ ${ job.company }`
									},
									{
										element: "div",
										className: "text-gray-400",
										innerText: job.period
									},
									{
										element: "ul",
										className: "list-disc list-inside mt-2 space-y-1",
										children: job.responsibilities.map((responsibility, respIndex) => ( {
											element: "li",
											key: respIndex.toString(),
											className: "text-white",
											innerText: responsibility
										} ))
									}
								]
							} ))
						}
					]
				};

			case "education":
				return {
					element: "div",
					className: "space-y-2",
					children: [
						{
							element: "div",
							className: "text-yellow-300 font-bold",
							innerText: "Education:"
						},
						{
							element: "div",
							className: "space-y-4",
							children: portfolioData.education.map((edu, index) => ( {
								element: "div",
								className: "border-l-2 border-green-500 pl-4",
								children: [
									{
										element: "div",
										className: "text-cyan-400 font-bold",
										innerText: edu.degree
									},
									{
										element: "div",
										className: "text-white",
										innerText: edu.institution
									},
									{
										element: "div",
										className: "text-gray-400",
										innerText: edu.period
									},
									...( edu.details ? [ {
										element: "div",
										className: "mt-2 text-white",
										innerText: edu.details
									} ] : [] )
								]
							} ))
						}
					]
				};

			case "contact":
				return {
					element: "div",
					className: "space-y-2",
					children: [
						{
							element: "div",
							className: "text-yellow-300 font-bold",
							innerText: "Contact Information:"
						},
						{
							element: "div",
							className: "grid grid-cols-1 md:grid-cols-2 gap-2",
							children: [
								{
									element: "div",
									children: [
										{
											element: "span",
											className: "text-cyan-400",
											innerText: "Email:"
										},
										{
											element: "span",
											innerText: ` ${ portfolioData.contact.email }`
										}
									]
								},
								{
									element: "div",
									children: [
										{
											element: "span",
											className: "text-cyan-400",
											innerText: "Location:"
										},
										{
											element: "span",
											innerText: ` ${ portfolioData.contact.location }`
										}
									]
								},
								{
									element: "div",
									children: [
										{
											element: "span",
											className: "text-cyan-400",
											innerText: "Phone:"
										},
										{
											element: "span",
											innerText: ` ${ portfolioData.contact.phone }`
										}
									]
								},
								{
									element: "div",
									children: [
										{
											element: "span",
											className: "text-cyan-400",
											innerText: "Website:"
										},
										{
											element: "span",
											innerText: ` ${ portfolioData.contact.website }`
										}
									]
								}
							]
						}
					]
				};

			case "social":
				return {
					element: "div",
					className: "space-y-2",
					children: [
						{
							element: "div",
							className: "text-yellow-300 font-bold",
							innerText: "Social Media:"
						},
						{
							element: "div",
							className: "grid grid-cols-1 md:grid-cols-2 gap-2",
							children: Object.entries(portfolioData.social).map(([ platform, url ]) => ( {
								element: "div",
								className: "flex gap-2",
								children: [
									{
										element: "span",
										className: "text-cyan-400 capitalize",
										innerText: `${ platform }:`
									},
									{
										element: "a",
										attributes: {
											href: url,
											target: "_blank",
											rel: "noopener noreferrer"
										},
										className: "text-blue-400 hover:underline",
										innerText: url.replace("https://", "")
									}
								]
							} ))
						}
					]
				};

			case "resume":
				return {
					element: "div",
					className: "space-y-2",
					children: [
						{
							element: "div",
							className: "text-yellow-300 font-bold",
							innerText: "Resume:"
						},
						{
							element: "div",
							children: [
								{
									element: "a",
									attributes: {
										href: portfolioData.resumeUrl,
										target: "_blank",
										rel: "noopener noreferrer"
									},
									className: "bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded inline-block",
									innerText: "Download Resume (PDF)"
								}
							]
						}
					]
				};

			case "all":
				return {
					element: "div",
					className: "space-y-6",
					children: [
						this.processCommand("about"),
						this.processCommand("projects"),
						this.processCommand("skills"),
						this.processCommand("experience"),
						this.processCommand("education"),
						this.processCommand("contact"),
						this.processCommand("social"),
						this.processCommand("resume")
					]
				}

			case "clear":
				return { element: "span" };

			default:
				return {
					element: "div",
					className: "text-red-400",
					children: [
						{
							element: "span",
							innerText: "Command not found: "
						},
						{
							element: "span",
							className: "text-white",
							innerText: `${command} `
						},
						{
							element: "span",
							innerText: "Type "
						},
						{
							element: "span",
							className: "text-yellow-300",
							innerText: "help"
						},
						{
							element: "span",
							innerText: " to see available commands."
						}
					]
				};
		}
	}
}
