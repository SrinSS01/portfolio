import { Directive, inject, input, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { CommandOutput } from '../../data/commandOutput';

@Directive({
	selector: '[appCommandOutput]',
	standalone: true,
})
export class CommandOutputDirective implements OnInit, OnDestroy {
	public readonly node = input.required<CommandOutput>({ alias: "appCommandOutput" });
	public readonly viewContainerRef = inject(ViewContainerRef);
	public readonly renderer = inject(Renderer2);
	private createdElement: HTMLElement | null = null;

	ngOnInit() {
		this.viewContainerRef.clear();

		const element = this.createElementFromNode(this.node());
		const parent = this.viewContainerRef.element.nativeElement.parentNode;

		this.renderer.appendChild(parent, element);
		this.renderer.removeChild(parent, this.viewContainerRef.element.nativeElement);

		this.createdElement = element; // Save a reference for later cleanup
	}

	ngOnDestroy() {
		if (this.createdElement) {
			const parent = this.createdElement.parentNode;
			if (parent) {
				this.renderer.removeChild(parent, this.createdElement);
			}
			this.createdElement = null;
		}
	}

	private createElementFromNode(node: CommandOutput): HTMLElement {
		const tag = node.element || 'div';
		const el = this.renderer.createElement(tag);

		if ( node.hostStyle ) {
			for ( const [style, value] of Object.entries(node.hostStyle) ) {
				this.renderer.setStyle(el, style, value);
			}
		}

		if ( node.className ) {
			this.renderer.setAttribute(el, 'class', node.className);
		}

		if ( node.attributes ) {
			for ( const [ key, value ] of Object.entries(node.attributes) ) {
				if ( value != null ) {
					this.renderer.setAttribute(el, key, value);
				}
			}
		}

		// Render inner text if no children
		const hasChildren = node.children && node.children.length > 0;
		if ( node.innerText && !hasChildren ) {
			const text = this.renderer.createText(node.innerText);
			this.renderer.appendChild(el, text);
		}

		// If has children, recursively render them
		if ( hasChildren ) {
			for ( const childNode of node.children! ) {
				const childEl = this.createElementFromNode(childNode);
				this.renderer.appendChild(el, childEl);
			}
		}

		return el;
	}
}
