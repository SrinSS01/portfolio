import { Component, inject, OnInit, signal } from '@angular/core';
import { TerminalComponent } from './components/terminal/terminal.component';
import { Command, commands } from './data/commands';
import { CommandOutput } from './data/commandOutput';
import { CommandProcessorService } from './services/command-processor.service';

@Component({
	selector: 'app-root',
	imports: [
		TerminalComponent
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
	readonly outputResult = signal<CommandOutput[]>([]);
	readonly commandHistory = signal<string[]>([]);
	readonly inputCommandBuffer = signal<Command>("");
	private commandProcessor = inject(CommandProcessorService);
	readonly commandHistoryIndex = signal<number>(0);

	ngOnInit() {
		this.outputResult.set([this.commandProcessor.processCommand("welcome")]);
	}

	handleSubmit($event: string) {
		this.commandHistory.update(value => [ ...value, $event ]);
		this.commandHistoryIndex.set(this.commandHistory().length - 1);
		const prevCmd = $event.split(" ").map((cmd, index) => ({
			element: "span",
			className: index === 0 && commands.includes(cmd)? "text-yellow-400": cmd.startsWith("-")? "text-gray-400": "text-white",
			innerText: cmd + " "
		}))
		if ( $event === "clear" ) {
			this.outputResult.set([]);
			this.inputCommandBuffer.set("");
			return;
		}
		this.outputResult.update(value => [
			...value,
			{
				element: "div",
				className: "mt-2 flex items-center",
				children: [
					{
						element: "span",
						children: [
							{
								element: "span",
								className: "text-green-400",
								innerText: "visitor@portfolio:~"
							},
							{
								element: "span",
								className: "text-white mr-2",
								innerText: "$"
							}
						]
					},
					{
						element: "span",
						children: prevCmd
					}
				]
			},
			this.commandProcessor.processCommand($event)
		]);
		this.inputCommandBuffer.set("");
	}

	handleKeydown($event: KeyboardEvent) {
		const commandHistory = this.commandHistory();
		switch ( $event.key ) {
			case "ArrowUp":
				$event.preventDefault();
				if ( commandHistory.length > 0 ) {
					this.inputCommandBuffer.set(commandHistory[this.commandHistoryIndex()]);
				}
				this.commandHistoryIndex.update(value => Math.max(0, value - 1));
				break;
			case "ArrowDown":
				$event.preventDefault();
				this.commandHistoryIndex.update(value => Math.min(commandHistory.length, value + 1));
				if ( commandHistory.length > 0 ) {
					this.inputCommandBuffer.set(commandHistory[this.commandHistoryIndex()]);
				}
				break;
			case "Tab":
				$event.preventDefault();
				const matchingCommands = commands.filter((cmd) => cmd.startsWith(this.inputCommandBuffer().split(" ")[0]));
				if (matchingCommands.length === 1) {
					this.inputCommandBuffer.set(matchingCommands[0]);
				} else if (matchingCommands.length > 1) {
					this.outputResult.update(value => [
						...value,
						{
							element: "div",
							className: "mb-2",
							children: [
								{
									element: "span",
									className: "text-green-400",
									innerText: "Autocomplete options:"
								},
								{
									element: "div",
									className: "flex flex-wrap gap-2 mt-1",
									children: matchingCommands.map(cmd => ( {
										element: "span",
										className: "text-yellow-300",
										innerText: cmd
									} ))
								}
							]
						}
					]);
				}
		}
	}
}
