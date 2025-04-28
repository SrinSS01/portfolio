import { Component, HostBinding, input } from '@angular/core';
import { CommandOutput } from '../../data/commandOutput';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-command-output',
	imports: [
		NgClass
	],
  templateUrl: './command-output.component.html',
  styleUrl: './command-output.component.css'
})
export class CommandOutputComponent {
	node = input.required<CommandOutput>();

	@HostBinding("style")
	get width() {
		return this.node().hostStyle ?? {};
	}

	// Helper to check if rendering text is needed
	get shouldRenderText(): boolean {
		return this.node().innerText != null && !this.node().children?.length;
	}

	// Helper to check if rendering children is needed
	get shouldRenderChildren(): boolean {
		return this.node().children?.length != null;
	}
}
