/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class jqxRadioButtonComponent implements ControlValueAccessor, OnChanges {
    attrAnimationShowDelay: number;
    attrAnimationHideDelay: number;
    attrBoxSize: number | string;
    attrChecked: boolean;
    attrDisabled: boolean;
    attrEnableContainerClick: boolean;
    attrGroupName: string;
    attrHasThreeStates: boolean;
    attrRtl: boolean;
    attrTheme: string;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    valueAttr: any;
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxRadioButton;
    private onTouchedCallback;
    private onChangeCallback;
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
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setOptions(options: any): void;
    animationShowDelay(arg?: number): any;
    animationHideDelay(arg?: number): any;
    boxSize(arg?: number | string): any;
    checked(arg?: boolean): any;
    disabled(arg?: boolean): any;
    enableContainerClick(arg?: boolean): any;
    groupName(arg?: string): any;
    hasThreeStates(arg?: boolean): any;
    height(arg?: string | number): any;
    rtl(arg?: boolean): any;
    theme(arg?: string): any;
    width(arg?: string | number): any;
    check(): void;
    disable(): void;
    destroy(): void;
    enable(): void;
    focus(): void;
    render(): void;
    uncheck(): void;
    val(value?: boolean): any;
    onChecked: EventEmitter<{}>;
    onChange: EventEmitter<{}>;
    onUnchecked: EventEmitter<{}>;
    __wireEvents__(): void;
}