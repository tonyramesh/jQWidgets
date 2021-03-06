/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxFileUploadComponent implements OnChanges {
    attrAutoUpload: boolean;
    attrAccept: string;
    attrBrowseTemplate: any;
    attrCancelTemplate: any;
    attrDisabled: boolean;
    attrFileInputName: string;
    attrLocalization: jqwidgets.FileUploadLocalization;
    attrMultipleFilesUpload: boolean;
    attrRenderFiles: (filename: any) => void;
    attrRtl: boolean;
    attrTheme: string;
    attrUploadUrl: string;
    attrUploadTemplate: any;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxFileUpload;
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
    autoUpload(arg?: boolean): any;
    accept(arg?: string): any;
    browseTemplate(arg?: string): any;
    cancelTemplate(arg?: string): any;
    disabled(arg?: boolean): any;
    fileInputName(arg?: string): any;
    height(arg?: number | string): any;
    localization(arg?: jqwidgets.FileUploadLocalization): any;
    multipleFilesUpload(arg?: boolean): any;
    renderFiles(arg?: (filename: any) => void): any;
    rtl(arg?: boolean): any;
    theme(arg?: string): any;
    uploadUrl(arg?: string): any;
    uploadTemplate(arg?: string): any;
    width(arg?: string | number): any;
    browse(): void;
    cancelFile(fileIndex: number): void;
    cancelAll(): void;
    destroy(): void;
    render(): void;
    refresh(): void;
    uploadFile(fileIndex: number): void;
    uploadAll(): void;
    onRemove: EventEmitter<{}>;
    onSelect: EventEmitter<{}>;
    onUploadStart: EventEmitter<{}>;
    onUploadEnd: EventEmitter<{}>;
    __wireEvents__(): void;
}
