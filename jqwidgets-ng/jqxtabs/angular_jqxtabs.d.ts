/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxTabsComponent implements OnChanges {
    attrAnimationType: any;
    attrAutoHeight: boolean;
    attrCloseButtonSize: number;
    attrCollapsible: boolean;
    attrContentTransitionDuration: number;
    attrDisabled: boolean;
    attrEnabledHover: boolean;
    attrEnableScrollAnimation: boolean;
    attrEnableDropAnimation: boolean;
    attrInitTabContent: (tab?: number) => void;
    attrKeyboardNavigation: boolean;
    attrNext: any;
    attrPrevious: any;
    attrPosition: any;
    attrReorder: boolean;
    attrRtl: boolean;
    attrScrollAnimationDuration: number;
    attrSelectedItem: number;
    attrSelectionTracker: boolean;
    attrScrollable: boolean;
    attrScrollPosition: any;
    attrScrollStep: number;
    attrShowCloseButtons: boolean;
    attrToggleMode: any;
    attrTheme: string;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxTabs;
    constructor(containerElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): boolean;
    arraysEqual(attrValue: any, hostValue: any): boolean;
    manageAttributes(): any;
    moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void;
    moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void;
    createComponent(options?: any): void;
    createWidget(options?: any): void;
    __updateRect__(): void;
    setOptions(options: any): void;
    animationType(arg?: string): any;
    autoHeight(arg?: boolean): any;
    closeButtonSize(arg?: number): any;
    collapsible(arg?: boolean): any;
    contentTransitionDuration(arg?: number): any;
    disabled(arg?: boolean): any;
    enabledHover(arg?: boolean): any;
    enableScrollAnimation(arg?: boolean): any;
    enableDropAnimation(arg?: boolean): any;
    height(arg?: string | number): any;
    initTabContent(arg?: (tab?: number) => void): any;
    keyboardNavigation(arg?: boolean): any;
    next(arg?: any): any;
    previous(arg?: any): any;
    position(arg?: string): any;
    reorder(arg?: boolean): any;
    rtl(arg?: boolean): any;
    scrollAnimationDuration(arg?: number): any;
    selectedItem(arg?: number): any;
    selectionTracker(arg?: boolean): any;
    scrollable(arg?: boolean): any;
    scrollPosition(arg?: string): any;
    scrollStep(arg?: number): any;
    showCloseButtons(arg?: boolean): any;
    toggleMode(arg?: string): any;
    theme(arg?: string): any;
    width(arg?: string | number): any;
    addAt(index: number, title: string, content: string): void;
    addFirst(htmlElement1: any, htmlElement2: any): void;
    addLast(htmlElement1: any, htmlElement2?: any): void;
    collapse(): void;
    disable(): void;
    disableAt(index: number): void;
    destroy(): void;
    ensureVisible(index: number): void;
    enableAt(index: number): void;
    expand(): void;
    enable(): void;
    focus(): void;
    getTitleAt(index: number): string;
    getContentAt(index: number): any;
    getDisabledTabsCount(): any;
    hideCloseButtonAt(index: number): void;
    hideAllCloseButtons(): void;
    length(): number;
    removeAt(index: number): void;
    removeFirst(): void;
    removeLast(): void;
    select(index: number): void;
    setContentAt(index: number, htmlElement: string): void;
    setTitleAt(index: number, htmlElement: string): void;
    showCloseButtonAt(index: number): void;
    showAllCloseButtons(): void;
    val(value?: string): any;
    onAdd: EventEmitter<{}>;
    onCollapsed: EventEmitter<{}>;
    onDragStart: EventEmitter<{}>;
    onDragEnd: EventEmitter<{}>;
    onExpanded: EventEmitter<{}>;
    onRemoved: EventEmitter<{}>;
    onSelecting: EventEmitter<{}>;
    onSelected: EventEmitter<{}>;
    onTabclick: EventEmitter<{}>;
    onUnselecting: EventEmitter<{}>;
    onUnselected: EventEmitter<{}>;
    __wireEvents__(): void;
}
