import { AfterViewInit, Component, ElementRef, HostListener, input, model, output, viewChild } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommandOutput } from '../../data/commandOutput';
import { CommandOutputComponent } from '../command-output/command-output.component';
import { Command, commands } from '../../data/commands';
import { CommandOutputDirective } from '../command-output/command-output.directive';

@Component({
  selector: 'app-terminal',
	imports: [
		NgStyle,
		FormsModule,
		CommandOutputDirective
	],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.css'
})
export class TerminalComponent implements AfterViewInit {
	terminalKeydown = output<KeyboardEvent>();
	submit = output<string>();
	outputResult = input<CommandOutput[]>();

	inputRef = viewChild<ElementRef<HTMLInputElement>>("inputRef");
	readonly inputCommandBuffer = model.required<Command>();

	@HostListener("window:focus")
	onWindowFocus() {
		setTimeout(() => this.inputRef()?.nativeElement?.focus());
	}

	ngAfterViewInit() {
		setTimeout(() => this.inputRef()?.nativeElement?.focus());
	}

	isCommand() {
		return commands.includes(this.inputCommandBuffer());
	}

	submitInputAndScrollToBottom(value: string, terminal: HTMLDivElement) {
		this.submit.emit(value);
		setTimeout(() => this.scrollToBottom(terminal));
	}

	scrollToBottom(terminal: HTMLDivElement) {
		terminal.scrollTop = terminal.scrollHeight;
	}

	emitTerminalKeydown($event: KeyboardEvent, terminal: HTMLDivElement) {
		this.terminalKeydown.emit($event);
		this.scrollToBottom(terminal);
	}
}
