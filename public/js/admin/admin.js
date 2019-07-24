/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/trumbowyg/dist/trumbowyg.js":
/*!**************************************************!*\
  !*** ./node_modules/trumbowyg/dist/trumbowyg.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Trumbowyg v2.18.0 - A lightweight WYSIWYG editor
 * Trumbowyg core file
 * ------------------------
 * @link http://alex-d.github.io/Trumbowyg
 * @license MIT
 * @author Alexandre Demode (Alex-D)
 *         Twitter : @AlexandreDemode
 *         Website : alex-d.fr
 */

jQuery.trumbowyg = {
    langs: {
        en: {
            viewHTML: 'View HTML',

            undo: 'Undo',
            redo: 'Redo',

            formatting: 'Formatting',
            p: 'Paragraph',
            blockquote: 'Quote',
            code: 'Code',
            header: 'Header',

            bold: 'Bold',
            italic: 'Italic',
            strikethrough: 'Strikethrough',
            underline: 'Underline',

            strong: 'Strong',
            em: 'Emphasis',
            del: 'Deleted',

            superscript: 'Superscript',
            subscript: 'Subscript',

            unorderedList: 'Unordered list',
            orderedList: 'Ordered list',

            insertImage: 'Insert Image',
            link: 'Link',
            createLink: 'Insert link',
            unlink: 'Remove link',

            justifyLeft: 'Align Left',
            justifyCenter: 'Align Center',
            justifyRight: 'Align Right',
            justifyFull: 'Align Justify',

            horizontalRule: 'Insert horizontal rule',
            removeformat: 'Remove format',

            fullscreen: 'Fullscreen',

            close: 'Close',

            submit: 'Confirm',
            reset: 'Cancel',

            required: 'Required',
            description: 'Description',
            title: 'Title',
            text: 'Text',
            target: 'Target',
            width: 'Width'
        }
    },

    // Plugins
    plugins: {},

    // SVG Path globally
    svgPath: null,

    hideButtonTexts: null
};

// Makes default options read-only
Object.defineProperty(jQuery.trumbowyg, 'defaultOptions', {
    value: {
        lang: 'en',

        fixedBtnPane: false,
        fixedFullWidth: false,
        autogrow: false,
        autogrowOnEnter: false,
        imageWidthModalEdit: false,

        prefix: 'trumbowyg-',

        semantic: true,
        semanticKeepAttributes: false,
        resetCss: false,
        removeformatPasted: false,
        tabToIndent: false,
        tagsToRemove: [],
        tagsToKeep: ['hr', 'img', 'embed', 'iframe', 'input'],
        btns: [
            ['viewHTML'],
            ['undo', 'redo'], // Only supported in Blink browsers
            ['formatting'],
            ['strong', 'em', 'del'],
            ['superscript', 'subscript'],
            ['link'],
            ['insertImage'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
            ['unorderedList', 'orderedList'],
            ['horizontalRule'],
            ['removeformat'],
            ['fullscreen']
        ],
        // For custom button definitions
        btnsDef: {},
        changeActiveDropdownIcon: false,

        inlineElementsSelector: 'a,abbr,acronym,b,caption,cite,code,col,dfn,dir,dt,dd,em,font,hr,i,kbd,li,q,span,strikeout,strong,sub,sup,u',

        pasteHandlers: [],

        // imgDblClickHandler: default is defined in constructor

        plugins: {},
        urlProtocol: false,
        minimalLinks: false
    },
    writable: false,
    enumerable: true,
    configurable: false
});


(function (navigator, window, document, $) {
    'use strict';

    var CONFIRM_EVENT = 'tbwconfirm',
        CANCEL_EVENT = 'tbwcancel';

    $.fn.trumbowyg = function (options, params) {
        var trumbowygDataName = 'trumbowyg';
        if (options === Object(options) || !options) {
            return this.each(function () {
                if (!$(this).data(trumbowygDataName)) {
                    $(this).data(trumbowygDataName, new Trumbowyg(this, options));
                }
            });
        }
        if (this.length === 1) {
            try {
                var t = $(this).data(trumbowygDataName);
                switch (options) {
                    // Exec command
                    case 'execCmd':
                        return t.execCmd(params.cmd, params.param, params.forceCss);

                    // Modal box
                    case 'openModal':
                        return t.openModal(params.title, params.content);
                    case 'closeModal':
                        return t.closeModal();
                    case 'openModalInsert':
                        return t.openModalInsert(params.title, params.fields, params.callback);

                    // Range
                    case 'saveRange':
                        return t.saveRange();
                    case 'getRange':
                        return t.range;
                    case 'getRangeText':
                        return t.getRangeText();
                    case 'restoreRange':
                        return t.restoreRange();

                    // Enable/disable
                    case 'enable':
                        return t.setDisabled(false);
                    case 'disable':
                        return t.setDisabled(true);

                    // Toggle
                    case 'toggle':
                        return t.toggle();

                    // Destroy
                    case 'destroy':
                        return t.destroy();

                    // Empty
                    case 'empty':
                        return t.empty();

                    // HTML
                    case 'html':
                        return t.html(params);
                }
            } catch (c) {
            }
        }

        return false;
    };

    // @param: editorElem is the DOM element
    var Trumbowyg = function (editorElem, options) {
        var t = this,
            trumbowygIconsId = 'trumbowyg-icons',
            $trumbowyg = $.trumbowyg;

        // Get the document of the element. It use to makes the plugin
        // compatible on iframes.
        t.doc = editorElem.ownerDocument || document;

        // jQuery object of the editor
        t.$ta = $(editorElem); // $ta : Textarea
        t.$c = $(editorElem); // $c : creator

        options = options || {};

        // Localization management
        if (options.lang != null || $trumbowyg.langs[options.lang] != null) {
            t.lang = $.extend(true, {}, $trumbowyg.langs.en, $trumbowyg.langs[options.lang]);
        } else {
            t.lang = $trumbowyg.langs.en;
        }

        t.hideButtonTexts = $trumbowyg.hideButtonTexts != null ? $trumbowyg.hideButtonTexts : options.hideButtonTexts;

        // SVG path
        var svgPathOption = $trumbowyg.svgPath != null ? $trumbowyg.svgPath : options.svgPath;
        t.hasSvg = svgPathOption !== false;
        t.svgPath = !!t.doc.querySelector('base') ? window.location.href.split('#')[0] : '';
        if ($('#' + trumbowygIconsId, t.doc).length === 0 && svgPathOption !== false) {
            if (svgPathOption == null) {
                // Hack to get svgPathOption based on trumbowyg.js path
                var scriptElements = document.getElementsByTagName('script');
                for (var i = 0; i < scriptElements.length; i += 1) {
                    var source = scriptElements[i].src;
                    var matches = source.match('trumbowyg(\.min)?\.js');
                    if (matches != null) {
                        svgPathOption = source.substring(0, source.indexOf(matches[0])) + 'ui/icons.svg';
                    }
                }
                if (svgPathOption == null) {
                    console.warn('You must define svgPath: https://goo.gl/CfTY9U'); // jshint ignore:line
                }
            }

            var div = t.doc.createElement('div');
            div.id = trumbowygIconsId;
            t.doc.body.insertBefore(div, t.doc.body.childNodes[0]);
            $.ajax({
                async: true,
                type: 'GET',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                dataType: 'xml',
                crossDomain: true,
                url: svgPathOption,
                data: null,
                beforeSend: null,
                complete: null,
                success: function (data) {
                    div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
                }
            });
        }


        /**
         * When the button is associated to a empty object
         * fn and title attributes are defined from the button key value
         *
         * For example
         *      foo: {}
         * is equivalent to :
         *      foo: {
         *          fn: 'foo',
         *          title: this.lang.foo
         *      }
         */
        var h = t.lang.header, // Header translation
            isBlinkFunction = function () {
                return (window.chrome || (window.Intl && Intl.v8BreakIterator)) && 'CSS' in window;
            };
        t.btnsDef = {
            viewHTML: {
                fn: 'toggle',
                class: 'trumbowyg-not-disable',
            },

            undo: {
                isSupported: isBlinkFunction,
                key: 'Z'
            },
            redo: {
                isSupported: isBlinkFunction,
                key: 'Y'
            },

            p: {
                fn: 'formatBlock'
            },
            blockquote: {
                fn: 'formatBlock'
            },
            h1: {
                fn: 'formatBlock',
                title: h + ' 1'
            },
            h2: {
                fn: 'formatBlock',
                title: h + ' 2'
            },
            h3: {
                fn: 'formatBlock',
                title: h + ' 3'
            },
            h4: {
                fn: 'formatBlock',
                title: h + ' 4'
            },
            h5: {
                fn: 'formatBlock',
                title: h + ' 5'
            },
            h6: {
                fn: 'formatBlock',
                title: h + ' 6'
            },
            subscript: {
                tag: 'sub'
            },
            superscript: {
                tag: 'sup'
            },

            bold: {
                key: 'B',
                tag: 'b'
            },
            italic: {
                key: 'I',
                tag: 'i'
            },
            underline: {
                tag: 'u'
            },
            strikethrough: {
                tag: 'strike'
            },

            strong: {
                fn: 'bold',
                key: 'B'
            },
            em: {
                fn: 'italic',
                key: 'I'
            },
            del: {
                fn: 'strikethrough'
            },

            createLink: {
                key: 'K',
                tag: 'a'
            },
            unlink: {},

            insertImage: {},

            justifyLeft: {
                tag: 'left',
                forceCss: true
            },
            justifyCenter: {
                tag: 'center',
                forceCss: true
            },
            justifyRight: {
                tag: 'right',
                forceCss: true
            },
            justifyFull: {
                tag: 'justify',
                forceCss: true
            },

            unorderedList: {
                fn: 'insertUnorderedList',
                tag: 'ul'
            },
            orderedList: {
                fn: 'insertOrderedList',
                tag: 'ol'
            },

            horizontalRule: {
                fn: 'insertHorizontalRule'
            },

            removeformat: {},

            fullscreen: {
                class: 'trumbowyg-not-disable'
            },
            close: {
                fn: 'destroy',
                class: 'trumbowyg-not-disable'
            },

            // Dropdowns
            formatting: {
                dropdown: ['p', 'blockquote', 'h1', 'h2', 'h3', 'h4'],
                ico: 'p'
            },
            link: {
                dropdown: ['createLink', 'unlink']
            }
        };

        // Defaults Options
        t.o = $.extend(true, {}, $trumbowyg.defaultOptions, options);
        if (!t.o.hasOwnProperty('imgDblClickHandler')) {
            t.o.imgDblClickHandler = t.getDefaultImgDblClickHandler();
        }

        t.urlPrefix = t.setupUrlPrefix();

        t.disabled = t.o.disabled || (editorElem.nodeName === 'TEXTAREA' && editorElem.disabled);

        if (options.btns) {
            t.o.btns = options.btns;
        } else if (!t.o.semantic) {
            t.o.btns[3] = ['bold', 'italic', 'underline', 'strikethrough'];
        }

        $.each(t.o.btnsDef, function (btnName, btnDef) {
            t.addBtnDef(btnName, btnDef);
        });

        // put this here in the event it would be merged in with options
        t.eventNamespace = 'trumbowyg-event';

        // Keyboard shortcuts are load in this array
        t.keys = [];

        // Tag to button dynamically hydrated
        t.tagToButton = {};
        t.tagHandlers = [];

        // Admit multiple paste handlers
        t.pasteHandlers = [].concat(t.o.pasteHandlers);

        // Check if browser is IE
        t.isIE = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') !== -1;

        // Check if we are on macOs
        t.isMac = navigator.platform.toUpperCase().indexOf('MAC') !== -1;

        t.init();
    };

    Trumbowyg.prototype = {
        DEFAULT_SEMANTIC_MAP: {
            'b': 'strong',
            'i': 'em',
            's': 'del',
            'strike': 'del',
            'div': 'p'
        },

        init: function () {
            var t = this;
            t.height = t.$ta.height();

            t.initPlugins();

            try {
                // Disable image resize, try-catch for old IE
                t.doc.execCommand('enableObjectResizing', false, false);
                t.doc.execCommand('defaultParagraphSeparator', false, 'p');
            } catch (e) {
            }

            t.buildEditor();
            t.buildBtnPane();

            t.fixedBtnPaneEvents();

            t.buildOverlay();

            setTimeout(function () {
                if (t.disabled) {
                    t.setDisabled(true);
                }
                t.$c.trigger('tbwinit');
            });
        },

        addBtnDef: function (btnName, btnDef) {
            this.btnsDef[btnName] = $.extend(btnDef, this.btnsDef[btnName] || {});
        },

        setupUrlPrefix: function () {
            var protocol = this.o.urlProtocol;
            if (!protocol) {
                return;
            }

            if (typeof(protocol) !== 'string') {
                return 'https://';
            }
            return protocol.replace('://', '') + '://';
        },

        buildEditor: function () {
            var t = this,
                prefix = t.o.prefix,
                html = '';

            t.$box = $('<div/>', {
                class: prefix + 'box ' + prefix + 'editor-visible ' + prefix + t.o.lang + ' trumbowyg'
            });

            // $ta = Textarea
            // $ed = Editor
            t.isTextarea = t.$ta.is('textarea');
            if (t.isTextarea) {
                html = t.$ta.val();
                t.$ed = $('<div/>');
                t.$box
                    .insertAfter(t.$ta)
                    .append(t.$ed, t.$ta);
            } else {
                t.$ed = t.$ta;
                html = t.$ed.html();

                t.$ta = $('<textarea/>', {
                    name: t.$ta.attr('id'),
                    height: t.height
                }).val(html);

                t.$box
                    .insertAfter(t.$ed)
                    .append(t.$ta, t.$ed);
                t.syncCode();
            }

            t.$ta
                .addClass(prefix + 'textarea')
                .attr('tabindex', -1)
            ;

            t.$ed
                .addClass(prefix + 'editor')
                .attr({
                    contenteditable: true,
                    dir: t.lang._dir || 'ltr'
                })
                .html(html)
            ;

            if (t.o.tabindex) {
                t.$ed.attr('tabindex', t.o.tabindex);
            }

            if (t.$c.is('[placeholder]')) {
                t.$ed.attr('placeholder', t.$c.attr('placeholder'));
            }

            if (t.$c.is('[spellcheck]')) {
                t.$ed.attr('spellcheck', t.$c.attr('spellcheck'));
            }

            if (t.o.resetCss) {
                t.$ed.addClass(prefix + 'reset-css');
            }

            if (!t.o.autogrow) {
                t.$ta.add(t.$ed).css({
                    height: t.height
                });
            }

            t.semanticCode();

            if (t.o.autogrowOnEnter) {
                t.$ed.addClass(prefix + 'autogrow-on-enter');
            }

            var ctrl = false,
                composition = false,
                debounceButtonPaneStatus,
                updateEventName = 'keyup';

            t.$ed
                .on('dblclick', 'img', t.o.imgDblClickHandler)
                .on('keydown', function (e) {
                    if ((e.ctrlKey || e.metaKey) && !e.altKey) {
                        ctrl = true;
                        var key = t.keys[String.fromCharCode(e.which).toUpperCase()];
                        
                        try {
                            t.execCmd(key.fn, key.param);
                            return false;
                        } catch (c) {}
                    } else {
                        
                        if (t.o.tabToIndent && e.key === 'Tab') {
                            try {
                                if (e.shiftKey) {
                                    t.execCmd('outdent', true, null);
                                } else {
                                    t.execCmd('indent', true, null);
                                }
                                return false;
                            } catch (c) {}
                        }
                    }
                })
                .on('compositionstart compositionupdate', function () {
                    composition = true;
                })
                .on(updateEventName + ' compositionend', function (e) {
                    if (e.type === 'compositionend') {
                        composition = false;
                    } else if (composition) {
                        return;
                    }

                    var keyCode = e.which;

                    if (keyCode >= 37 && keyCode <= 40) {
                        return;
                    }

                    if ((e.ctrlKey || e.metaKey) && (keyCode === 89 || keyCode === 90)) {
                        t.semanticCode(false, true);
                        t.$c.trigger('tbwchange');
                    } else if (!ctrl && keyCode !== 17) {
                        var compositionEndIE = t.isIE ? e.type === 'compositionend' : true;
                        t.semanticCode(false, compositionEndIE && keyCode === 13);
                        t.$c.trigger('tbwchange');
                    } else if (typeof e.which === 'undefined') {
                        t.semanticCode(false, false, true);
                    }

                    setTimeout(function () {
                        ctrl = false;
                    }, 50);
                })
                .on('mouseup keydown keyup', function (e) {
                    if ((!e.ctrlKey && !e.metaKey) || e.altKey) {
                        setTimeout(function () { // "hold on" to the ctrl key for 50ms
                            ctrl = false;
                        }, 50);
                    }
                    clearTimeout(debounceButtonPaneStatus);
                    debounceButtonPaneStatus = setTimeout(function () {
                        t.updateButtonPaneStatus();
                    }, 50);
                })
                .on('focus blur', function (e) {
                    t.$c.trigger('tbw' + e.type);
                    if (e.type === 'blur') {
                        t.clearButtonPaneStatus()
                    }
                    if (t.o.autogrowOnEnter) {
                        if (t.autogrowOnEnterDontClose) {
                            return;
                        }
                        if (e.type === 'focus') {
                            t.autogrowOnEnterWasFocused = true;
                            t.autogrowEditorOnEnter();
                        }
                        else if (!t.o.autogrow) {
                            t.$ed.css({height: t.$ed.css('min-height')});
                            t.$c.trigger('tbwresize');
                        }
                    }
                })
                .on('cut drop', function () {
                    setTimeout(function () {
                        t.semanticCode(false, true);
                        t.$c.trigger('tbwchange');
                    }, 0);
                })
                .on('paste', function (e) {
                    if (t.o.removeformatPasted) {
                        e.preventDefault();

                        if (window.getSelection && window.getSelection().deleteFromDocument) {
                            window.getSelection().deleteFromDocument();
                        }

                        try {
                            // IE
                            var text = window.clipboardData.getData('Text');

                            try {
                                // <= IE10
                                t.doc.selection.createRange().pasteHTML(text);
                            } catch (c) {
                                // IE 11
                                t.doc.getSelection().getRangeAt(0).insertNode(t.doc.createTextNode(text));
                            }
                            t.$c.trigger('tbwchange', e);
                        } catch (d) {
                            // Not IE
                            t.execCmd('insertText', (e.originalEvent || e).clipboardData.getData('text/plain'));
                        }
                    }

                    // Call pasteHandlers
                    $.each(t.pasteHandlers, function (i, pasteHandler) {
                        pasteHandler(e);
                    });

                    setTimeout(function () {
                        t.semanticCode(false, true);
                        t.$c.trigger('tbwpaste', e);
                        t.$c.trigger('tbwchange');
                    }, 0);
                });

            t.$ta
                .on('keyup', function () {
                    t.$c.trigger('tbwchange');
                })
                .on('paste', function () {
                    setTimeout(function () {
                        t.$c.trigger('tbwchange');
                    }, 0);
                });

            t.$box.on('keydown', function (e) {
                if (e.which === 27 && $('.' + prefix + 'modal-box', t.$box).length === 1) {
                    t.closeModal();
                    return false;
                }
            });
        },

        //autogrow when entering logic
        autogrowEditorOnEnter: function () {
            var t = this;
            t.$ed.removeClass('autogrow-on-enter');
            var oldHeight = t.$ed[0].clientHeight;
            t.$ed.height('auto');
            var totalHeight = t.$ed[0].scrollHeight;
            t.$ed.addClass('autogrow-on-enter');
            if (oldHeight !== totalHeight) {
                t.$ed.height(oldHeight);
                setTimeout(function () {
                    t.$ed.css({height: totalHeight});
                    t.$c.trigger('tbwresize');
                }, 0);
            }
        },


        // Build button pane, use o.btns option
        buildBtnPane: function () {
            var t = this,
                prefix = t.o.prefix;

            var $btnPane = t.$btnPane = $('<div/>', {
                class: prefix + 'button-pane'
            });

            $.each(t.o.btns, function (i, btnGrp) {
                if (!$.isArray(btnGrp)) {
                    btnGrp = [btnGrp];
                }

                var $btnGroup = $('<div/>', {
                    class: prefix + 'button-group ' + ((btnGrp.indexOf('fullscreen') >= 0) ? prefix + 'right' : '')
                });
                $.each(btnGrp, function (i, btn) {
                    try { // Prevent buildBtn error
                        if (t.isSupportedBtn(btn)) { // It's a supported button
                            $btnGroup.append(t.buildBtn(btn));
                        }
                    } catch (c) {
                    }
                });

                if ($btnGroup.html().trim().length > 0) {
                    $btnPane.append($btnGroup);
                }
            });

            t.$box.prepend($btnPane);
        },


        // Build a button and his action
        buildBtn: function (btnName) { // btnName is name of the button
            var t = this,
                prefix = t.o.prefix,
                btn = t.btnsDef[btnName],
                isDropdown = btn.dropdown,
                hasIcon = btn.hasIcon != null ? btn.hasIcon : true,
                textDef = t.lang[btnName] || btnName,

                $btn = $('<button/>', {
                    type: 'button',
                    class: prefix + btnName + '-button ' + (btn.class || '') + (!hasIcon ? ' ' + prefix + 'textual-button' : ''),
                    html: t.hasSvg && hasIcon ?
                        '<svg><use xlink:href="' + t.svgPath + '#' + prefix + (btn.ico || btnName).replace(/([A-Z]+)/g, '-$1').toLowerCase() + '"/></svg>' :
                        t.hideButtonTexts ? '' : (btn.text || btn.title || t.lang[btnName] || btnName),
                    title: (btn.title || btn.text || textDef) + (btn.key ? ' (' + (t.isMac ? 'Cmd' : 'Ctrl') + ' + ' + btn.key + ')' : ''),
                    tabindex: -1,
                    mousedown: function () {
                        if (!isDropdown || $('.' + btnName + '-' + prefix + 'dropdown', t.$box).is(':hidden')) {
                            $('body', t.doc).trigger('mousedown');
                        }

                        if ((t.$btnPane.hasClass(prefix + 'disable') || t.$box.hasClass(prefix + 'disabled')) &&
                            !$(this).hasClass(prefix + 'active') &&
                            !$(this).hasClass(prefix + 'not-disable')) {
                            return false;
                        }

                        t.execCmd((isDropdown ? 'dropdown' : false) || btn.fn || btnName, btn.param || btnName, btn.forceCss);

                        return false;
                    }
                });

            if (isDropdown) {
                $btn.addClass(prefix + 'open-dropdown');
                var dropdownPrefix = prefix + 'dropdown',
                    dropdownOptions = { // the dropdown
                        class: dropdownPrefix + '-' + btnName + ' ' + dropdownPrefix + ' ' + prefix + 'fixed-top ' + (btn.dropdownClass || '')
                    };
                dropdownOptions['data-' + dropdownPrefix] = btnName;
                var $dropdown = $('<div/>', dropdownOptions);
                $.each(isDropdown, function (i, def) {
                    if (t.btnsDef[def] && t.isSupportedBtn(def)) {
                        $dropdown.append(t.buildSubBtn(def));
                    }
                });
                t.$box.append($dropdown.hide());
            } else if (btn.key) {
                t.keys[btn.key] = {
                    fn: btn.fn || btnName,
                    param: btn.param || btnName
                };
            }

            if (!isDropdown) {
                t.tagToButton[(btn.tag || btnName).toLowerCase()] = btnName;
            }

            return $btn;
        },
        // Build a button for dropdown menu
        // @param n : name of the subbutton
        buildSubBtn: function (btnName) {
            var t = this,
                prefix = t.o.prefix,
                btn = t.btnsDef[btnName],
                hasIcon = btn.hasIcon != null ? btn.hasIcon : true;

            if (btn.key) {
                t.keys[btn.key] = {
                    fn: btn.fn || btnName,
                    param: btn.param || btnName
                };
            }

            t.tagToButton[(btn.tag || btnName).toLowerCase()] = btnName;

            return $('<button/>', {
                type: 'button',
                class: prefix + btnName + '-dropdown-button ' + (btn.class || '') + (btn.ico ? ' ' + prefix + btn.ico + '-button' : ''),
                html: t.hasSvg && hasIcon ?
                  '<svg><use xlink:href="' + t.svgPath + '#' + prefix + (btn.ico || btnName).replace(/([A-Z]+)/g, '-$1').toLowerCase() + '"/></svg>' + (btn.text || btn.title || t.lang[btnName] || btnName) :
                  (btn.text || btn.title || t.lang[btnName] || btnName),
                title: (btn.key ? '(' + (t.isMac ? 'Cmd' : 'Ctrl') + ' + ' + btn.key + ')' : null),
                style: btn.style || null,
                mousedown: function () {
                    $('body', t.doc).trigger('mousedown');

                    t.execCmd(btn.fn || btnName, btn.param || btnName, btn.forceCss);

                    return false;
                }
            });
        },
        // Check if button is supported
        isSupportedBtn: function (btnName) {
            try {
                return this.btnsDef[btnName].isSupported();
            } catch (e) {
            }
            return true;
        },

        // Build overlay for modal box
        buildOverlay: function () {
            var t = this;
            t.$overlay = $('<div/>', {
                class: t.o.prefix + 'overlay'
            }).appendTo(t.$box);
            return t.$overlay;
        },
        showOverlay: function () {
            var t = this;
            $(window).trigger('scroll');
            t.$overlay.fadeIn(200);
            t.$box.addClass(t.o.prefix + 'box-blur');
        },
        hideOverlay: function () {
            var t = this;
            t.$overlay.fadeOut(50);
            t.$box.removeClass(t.o.prefix + 'box-blur');
        },

        // Management of fixed button pane
        fixedBtnPaneEvents: function () {
            var t = this,
                fixedFullWidth = t.o.fixedFullWidth,
                $box = t.$box;

            if (!t.o.fixedBtnPane) {
                return;
            }

            t.isFixed = false;

            $(window)
                .on('scroll.' + t.eventNamespace + ' resize.' + t.eventNamespace, function () {
                    if (!$box) {
                        return;
                    }

                    t.syncCode();

                    var scrollTop = $(window).scrollTop(),
                        offset = $box.offset().top + 1,
                        $buttonPane = t.$btnPane,
                        buttonPaneOuterHeight = $buttonPane.outerHeight() - 2;

                    if ((scrollTop - offset > 0) && ((scrollTop - offset - t.height) < 0)) {
                        if (!t.isFixed) {
                            t.isFixed = true;
                            $buttonPane.css({
                                position: 'fixed',
                                top: 0,
                                left: fixedFullWidth ? 0 : 'auto',
                                zIndex: 7
                            });
                            t.$box.css({paddingTop: $buttonPane.height()});
                        }
                        $buttonPane.css({
                            width: fixedFullWidth ? '100%' : (($box.width() - 1))
                        });

                        $('.' + t.o.prefix + 'fixed-top', $box).css({
                            position: fixedFullWidth ? 'fixed' : 'absolute',
                            top: fixedFullWidth ? buttonPaneOuterHeight : buttonPaneOuterHeight + (scrollTop - offset),
                            zIndex: 15
                        });
                    } else if (t.isFixed) {
                        t.isFixed = false;
                        $buttonPane.removeAttr('style');
                        t.$box.css({paddingTop: 0});
                        $('.' + t.o.prefix + 'fixed-top', $box).css({
                            position: 'absolute',
                            top: buttonPaneOuterHeight
                        });
                    }
                });
        },

        // Disable editor
        setDisabled: function (disable) {
            var t = this,
                prefix = t.o.prefix;

            t.disabled = disable;

            if (disable) {
                t.$ta.attr('disabled', true);
            } else {
                t.$ta.removeAttr('disabled');
            }
            t.$box.toggleClass(prefix + 'disabled', disable);
            t.$ed.attr('contenteditable', !disable);
        },

        // Destroy the editor
        destroy: function () {
            var t = this,
                prefix = t.o.prefix;

            if (t.isTextarea) {
                t.$box.after(
                    t.$ta
                        .css({height: ''})
                        .val(t.html())
                        .removeClass(prefix + 'textarea')
                        .show()
                );
            } else {
                t.$box.after(
                    t.$ed
                        .css({height: ''})
                        .removeClass(prefix + 'editor')
                        .removeAttr('contenteditable')
                        .removeAttr('dir')
                        .html(t.html())
                        .show()
                );
            }

            t.$ed.off('dblclick', 'img');

            t.destroyPlugins();

            t.$box.remove();
            t.$c.removeData('trumbowyg');
            $('body').removeClass(prefix + 'body-fullscreen');
            t.$c.trigger('tbwclose');
            $(window).off('scroll.' + t.eventNamespace + ' resize.' + t.eventNamespace);
        },


        // Empty the editor
        empty: function () {
            this.$ta.val('');
            this.syncCode(true);
        },


        // Function call when click on viewHTML button
        toggle: function () {
            var t = this,
                prefix = t.o.prefix;

            if (t.o.autogrowOnEnter) {
                t.autogrowOnEnterDontClose = !t.$box.hasClass(prefix + 'editor-hidden');
            }

            t.semanticCode(false, true);

            setTimeout(function () {
                t.doc.activeElement.blur();
                t.$box.toggleClass(prefix + 'editor-hidden ' + prefix + 'editor-visible');
                t.$btnPane.toggleClass(prefix + 'disable');
                $('.' + prefix + 'viewHTML-button', t.$btnPane).toggleClass(prefix + 'active');
                if (t.$box.hasClass(prefix + 'editor-visible')) {
                    t.$ta.attr('tabindex', -1);
                } else {
                    t.$ta.removeAttr('tabindex');
                }

                if (t.o.autogrowOnEnter && !t.autogrowOnEnterDontClose) {
                    t.autogrowEditorOnEnter();
                }
            }, 0);
        },

        // Open dropdown when click on a button which open that
        dropdown: function (name) {
            var t = this,
                $body = $('body', t.doc),
                prefix = t.o.prefix,
                $dropdown = $('[data-' + prefix + 'dropdown=' + name + ']', t.$box),
                $btn = $('.' + prefix + name + '-button', t.$btnPane),
                show = $dropdown.is(':hidden');

            $body.trigger('mousedown');

            if (show) {
                var btnOffsetLeft = $btn.offset().left;
                $btn.addClass(prefix + 'active');

                $dropdown.css({
                    position: 'absolute',
                    top: $btn.offset().top - t.$btnPane.offset().top + $btn.outerHeight(),
                    left: (t.o.fixedFullWidth && t.isFixed) ? btnOffsetLeft : (btnOffsetLeft - t.$btnPane.offset().left)
                }).show();

                $(window).trigger('scroll');

                $body.on('mousedown.' + t.eventNamespace, function (e) {
                    if (!$dropdown.is(e.target)) {
                        $('.' + prefix + 'dropdown', t.$box).hide();
                        $('.' + prefix + 'active', t.$btnPane).removeClass(prefix + 'active');
                        $body.off('mousedown.' + t.eventNamespace);
                    }
                });
            }
        },


        // HTML Code management
        html: function (html) {
            var t = this;

            if (html != null) {
                t.$ta.val(html);
                t.syncCode(true);
                t.$c.trigger('tbwchange');
                return t;
            }

            return t.$ta.val();
        },
        syncTextarea: function () {
            var t = this;
            t.$ta.val(t.$ed.text().trim().length > 0 || t.$ed.find(t.o.tagsToKeep.join(',')).length > 0 ? t.$ed.html() : '');
        },
        syncCode: function (force) {
            var t = this;
            if (!force && t.$ed.is(':visible')) {
                t.syncTextarea();
            } else {
                // wrap the content in a div it's easier to get the innerhtml
                var html = $('<div>').html(t.$ta.val());
                //scrub the html before loading into the doc
                var safe = $('<div>').append(html);
                $(t.o.tagsToRemove.join(','), safe).remove();
                t.$ed.html(safe.contents().html());
            }

            if (t.o.autogrow) {
                t.height = t.$ed.height();
                if (t.height !== t.$ta.css('height')) {
                    t.$ta.css({height: t.height});
                    t.$c.trigger('tbwresize');
                }
            }
            if (t.o.autogrowOnEnter) {
                // t.autogrowEditorOnEnter();
                t.$ed.height('auto');
                var totalheight = t.autogrowOnEnterWasFocused ? t.$ed[0].scrollHeight : t.$ed.css('min-height');
                if (totalheight !== t.$ta.css('height')) {
                    t.$ed.css({height: totalheight});
                    t.$c.trigger('tbwresize');
                }
            }
        },

        // Analyse and update to semantic code
        // @param force : force to sync code from textarea
        // @param full  : wrap text nodes in <p>
        // @param keepRange  : leave selection range as it is
        semanticCode: function (force, full, keepRange) {
            var t = this;
            t.saveRange();
            t.syncCode(force);

            if (t.o.semantic) {
                t.semanticTag('b', t.o.semanticKeepAttributes);
                t.semanticTag('i', t.o.semanticKeepAttributes);
                t.semanticTag('s', t.o.semanticKeepAttributes);
                t.semanticTag('strike', t.o.semanticKeepAttributes);

                if (full) {
                    var inlineElementsSelector = t.o.inlineElementsSelector,
                        blockElementsSelector = ':not(' + inlineElementsSelector + ')';

                    // Wrap text nodes in span for easier processing
                    t.$ed.contents().filter(function () {
                        return this.nodeType === 3 && this.nodeValue.trim().length > 0;
                    }).wrap('<span data-tbw/>');

                    // Wrap groups of inline elements in paragraphs (recursive)
                    var wrapInlinesInParagraphsFrom = function ($from) {
                        if ($from.length !== 0) {
                            var $finalParagraph = $from.nextUntil(blockElementsSelector).addBack().wrapAll('<p/>').parent(),
                                $nextElement = $finalParagraph.nextAll(inlineElementsSelector).first();
                            $finalParagraph.next('br').remove();
                            wrapInlinesInParagraphsFrom($nextElement);
                        }
                    };
                    wrapInlinesInParagraphsFrom(t.$ed.children(inlineElementsSelector).first());

                    t.semanticTag('div', true);

                    // Unwrap paragraphs content, containing nothing useful
                    t.$ed.find('p').filter(function () {
                        // Don't remove currently being edited element
                        if (t.range && this === t.range.startContainer) {
                            return false;
                        }
                        return $(this).text().trim().length === 0 && $(this).children().not('br,span').length === 0;
                    }).contents().unwrap();

                    // Get rid of temporary span's
                    $('[data-tbw]', t.$ed).contents().unwrap();

                    // Remove empty <p>
                    t.$ed.find('p:empty').remove();
                }

                if (!keepRange) {
                    t.restoreRange();
                }

                t.syncTextarea();
            }
        },

        semanticTag: function (oldTag, copyAttributes) {
            var newTag;

            if (this.o.semantic != null && typeof this.o.semantic === 'object' && this.o.semantic.hasOwnProperty(oldTag)) {
                newTag = this.o.semantic[oldTag];
            } else if (this.o.semantic === true && this.DEFAULT_SEMANTIC_MAP.hasOwnProperty(oldTag)) {
                newTag = this.DEFAULT_SEMANTIC_MAP[oldTag];
            } else {
                return;
            }

            $(oldTag, this.$ed).each(function () {
                var $oldTag = $(this);
                if($oldTag.contents().length === 0) {
                    return false;
                }

                $oldTag.wrap('<' + newTag + '/>');
                if (copyAttributes) {
                    $.each($oldTag.prop('attributes'), function () {
                        $oldTag.parent().attr(this.name, this.value);
                    });
                }
                $oldTag.contents().unwrap();
            });
        },

        // Function call when user click on "Insert Link"
        createLink: function () {
            var t = this,
                documentSelection = t.doc.getSelection(),
                node = documentSelection.focusNode,
                text = new XMLSerializer().serializeToString(documentSelection.getRangeAt(0).cloneContents()),
                url,
                title,
                target;

            while (['A', 'DIV'].indexOf(node.nodeName) < 0) {
                node = node.parentNode;
            }

            if (node && node.nodeName === 'A') {
                var $a = $(node);
                text = $a.text();
                url = $a.attr('href');
                if (!t.o.minimalLinks) {
                    title = $a.attr('title');
                    target = $a.attr('target');
                }
                var range = t.doc.createRange();
                range.selectNode(node);
                documentSelection.removeAllRanges();
                documentSelection.addRange(range);
            }

            t.saveRange();

            var options = {
                url: {
                    label: 'URL',
                    required: true,
                    value: url
                },
                text: {
                    label: t.lang.text,
                    value: text
                }
            };
            if (!t.o.minimalLinks) {
                Object.assign(options, {
                    title: {
                        label: t.lang.title,
                        value: title
                    },
                    target: {
                        label: t.lang.target,
                        value: target
                    }
                });
            }

            t.openModalInsert(t.lang.createLink, options, function (v) { // v is value
                var url = t.prependUrlPrefix(v.url);
                if (!url.length) {
                    return false;
                }

                var link = $(['<a href="', url, '">', v.text || v.url, '</a>'].join(''));

                if (!t.o.minimalLinks) {
                    if (v.title.length > 0) {
                        link.attr('title', v.title);
                    }
                    if (v.target.length > 0) {
                        link.attr('target', v.target);
                    }
                }
                t.range.deleteContents();
                t.range.insertNode(link[0]);
                t.syncCode();
                t.$c.trigger('tbwchange');
                return true;
            });
        },
        prependUrlPrefix: function (url) {
            var t = this;
            if (!t.urlPrefix) {
                return url;
            }

            var VALID_LINK_PREFIX = /^([a-z][-+.a-z0-9]*:|\/|#)/i;
            if (VALID_LINK_PREFIX.test(url)) {
                return url;
            }

            var SIMPLE_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (SIMPLE_EMAIL_REGEX.test(url)) {
                return 'mailto:' + url;
            }

            return t.urlPrefix + url;
        },
        unlink: function () {
            var t = this,
                documentSelection = t.doc.getSelection(),
                node = documentSelection.focusNode;

            if (documentSelection.isCollapsed) {
                while (['A', 'DIV'].indexOf(node.nodeName) < 0) {
                    node = node.parentNode;
                }

                if (node && node.nodeName === 'A') {
                    var range = t.doc.createRange();
                    range.selectNode(node);
                    documentSelection.removeAllRanges();
                    documentSelection.addRange(range);
                }
            }
            t.execCmd('unlink', undefined, undefined, true);
        },
        insertImage: function () {
            var t = this;
            t.saveRange();

            var options = {
                url: {
                    label: 'URL',
                    required: true
                },
                alt: {
                    label: t.lang.description,
                    value: t.getRangeText()
                }
            };

            if (t.o.imageWidthModalEdit) {
                options.width = {};
            }

            t.openModalInsert(t.lang.insertImage, options, function (v) { // v are values
                t.execCmd('insertImage', v.url, false, true);
                var $img = $('img[src="' + v.url + '"]:not([alt])', t.$box);
                $img.attr('alt', v.alt);

                if (t.o.imageWidthModalEdit) {
                    $img.attr({
                        width: v.width
                    });
                }

                t.syncCode();
                t.$c.trigger('tbwchange');

                return true;
            });
        },
        fullscreen: function () {
            var t = this,
                prefix = t.o.prefix,
                fullscreenCssClass = prefix + 'fullscreen',
                fullscreenPlaceholderClass = fullscreenCssClass + '-placeholder',
                isFullscreen,
                editorHeight = t.$box.outerHeight();

            t.$box.toggleClass(fullscreenCssClass);
            isFullscreen = t.$box.hasClass(fullscreenCssClass);

            if (isFullscreen) {
                t.$box.before(
                    $('<div/>', {
                        class: fullscreenPlaceholderClass
                    }).css({
                        height: editorHeight
                    })
                );
            } else {
                $('.' + fullscreenPlaceholderClass).remove();
            }

            $('body').toggleClass(prefix + 'body-fullscreen', isFullscreen);
            $(window).trigger('scroll');
            t.$c.trigger('tbw' + (isFullscreen ? 'open' : 'close') + 'fullscreen');
        },


        /*
         * Call method of trumbowyg if exist
         * else try to call anonymous function
         * and finally native execCommand
         */
        execCmd: function (cmd, param, forceCss, skipTrumbowyg) {
            var t = this;
            skipTrumbowyg = !!skipTrumbowyg || '';

            if (cmd !== 'dropdown') {
                t.$ed.focus();
            }

            try {
                t.doc.execCommand('styleWithCSS', false, forceCss || false);
            } catch (c) {
            }

            try {
                t[cmd + skipTrumbowyg](param);
            } catch (c) {
                try {
                    cmd(param);
                } catch (e2) {
                    if (cmd === 'insertHorizontalRule') {
                        param = undefined;
                    } else if (cmd === 'formatBlock' && t.isIE) {
                        param = '<' + param + '>';
                    }

                    t.doc.execCommand(cmd, false, param);

                    t.syncCode();
                    t.semanticCode(false, true);
                }

                if (cmd !== 'dropdown') {
                    t.updateButtonPaneStatus();
                    t.$c.trigger('tbwchange');
                }
            }
        },


        // Open a modal box
        openModal: function (title, content) {
            var t = this,
                prefix = t.o.prefix;

            // No open a modal box when exist other modal box
            if ($('.' + prefix + 'modal-box', t.$box).length > 0) {
                return false;
            }
            if (t.o.autogrowOnEnter) {
                t.autogrowOnEnterDontClose = true;
            }

            t.saveRange();
            t.showOverlay();

            // Disable all btnPane btns
            t.$btnPane.addClass(prefix + 'disable');

            // Build out of ModalBox, it's the mask for animations
            var $modal = $('<div/>', {
                class: prefix + 'modal ' + prefix + 'fixed-top'
            }).css({
                top: t.$box.offset().top + t.$btnPane.height(),
                zIndex: 99999
            }).appendTo($(t.doc.body));

            // Click on overlay close modal by cancelling them
            t.$overlay.one('click', function () {
                $modal.trigger(CANCEL_EVENT);
                return false;
            });

            // Build the form
            var $form = $('<form/>', {
                action: '',
                html: content
            })
                .on('submit', function () {
                    $modal.trigger(CONFIRM_EVENT);
                    return false;
                })
                .on('reset', function () {
                    $modal.trigger(CANCEL_EVENT);
                    return false;
                })
                .on('submit reset', function () {
                    if (t.o.autogrowOnEnter) {
                        t.autogrowOnEnterDontClose = false;
                    }
                });


            // Build ModalBox and animate to show them
            var $box = $('<div/>', {
                class: prefix + 'modal-box',
                html: $form
            })
                .css({
                    top: '-' + t.$btnPane.outerHeight(),
                    opacity: 0
                })
                .appendTo($modal)
                .animate({
                    top: 0,
                    opacity: 1
                }, 100);


            // Append title
            $('<span/>', {
                text: title,
                class: prefix + 'modal-title'
            }).prependTo($box);

            $modal.height($box.outerHeight() + 10);


            // Focus in modal box
            $('input:first', $box).focus();


            // Append Confirm and Cancel buttons
            t.buildModalBtn('submit', $box);
            t.buildModalBtn('reset', $box);


            $(window).trigger('scroll');

            return $modal;
        },
        // @param n is name of modal
        buildModalBtn: function (n, $modal) {
            var t = this,
                prefix = t.o.prefix;

            return $('<button/>', {
                class: prefix + 'modal-button ' + prefix + 'modal-' + n,
                type: n,
                text: t.lang[n] || n
            }).appendTo($('form', $modal));
        },
        // close current modal box
        closeModal: function () {
            var t = this,
                prefix = t.o.prefix;

            t.$btnPane.removeClass(prefix + 'disable');
            t.$overlay.off();

            // Find the modal box
            var $modalBox = $('.' + prefix + 'modal-box', $(t.doc.body));

            $modalBox.animate({
                top: '-' + $modalBox.height()
            }, 100, function () {
                $modalBox.parent().remove();
                t.hideOverlay();
            });

            t.restoreRange();
        },
        // Preformatted build and management modal
        openModalInsert: function (title, fields, cmd) {
            var t = this,
                prefix = t.o.prefix,
                lg = t.lang,
                html = '';

            $.each(fields, function (fieldName, field) {
                var l = field.label || fieldName,
                    n = field.name || fieldName,
                    a = field.attributes || {};

                var attr = Object.keys(a).map(function (prop) {
                    return prop + '="' + a[prop] + '"';
                }).join(' ');

                html += '<label><input type="' + (field.type || 'text') + '" name="' + n + '"' +
                    (field.type === 'checkbox' && field.value ? ' checked="checked"' : ' value="' + (field.value || '').replace(/"/g, '&quot;')) +
                    '"' + attr + '><span class="' + prefix + 'input-infos"><span>' +
                    (lg[l] ? lg[l] : l) +
                    '</span></span></label>';
            });

            return t.openModal(title, html)
                .on(CONFIRM_EVENT, function () {
                    var $form = $('form', $(this)),
                        valid = true,
                        values = {};

                    $.each(fields, function (fieldName, field) {
                        var n = field.name || fieldName;

                        var $field = $('input[name="' + n + '"]', $form),
                            inputType = $field.attr('type');

                        switch (inputType.toLowerCase()) {
                            case 'checkbox':
                                values[n] = $field.is(':checked');
                                break;
                            case 'radio':
                                values[n] = $field.filter(':checked').val();
                                break;
                            default:
                                values[n] = $.trim($field.val());
                                break;
                        }
                        // Validate value
                        if (field.required && values[n] === '') {
                            valid = false;
                            t.addErrorOnModalField($field, t.lang.required);
                        } else if (field.pattern && !field.pattern.test(values[n])) {
                            valid = false;
                            t.addErrorOnModalField($field, field.patternError);
                        }
                    });

                    if (valid) {
                        t.restoreRange();

                        if (cmd(values, fields)) {
                            t.syncCode();
                            t.$c.trigger('tbwchange');
                            t.closeModal();
                            $(this).off(CONFIRM_EVENT);
                        }
                    }
                })
                .one(CANCEL_EVENT, function () {
                    $(this).off(CONFIRM_EVENT);
                    t.closeModal();
                });
        },
        addErrorOnModalField: function ($field, err) {
            var prefix = this.o.prefix,
                spanErrorClass = prefix + 'msg-error',
                $label = $field.parent();

            $field
                .on('change keyup', function () {
                    $label.removeClass(prefix + 'input-error');
                    setTimeout(function () {
                        $label.find('.' + spanErrorClass).remove();
                    }, 150);
                });

            $label
                .addClass(prefix + 'input-error')
                .find('input+span')
                .append(
                    $('<span/>', {
                        class: spanErrorClass,
                        text: err
                    })
                );
        },

        getDefaultImgDblClickHandler: function () {
            var t = this;

            return function () {
                var $img = $(this),
                    src = $img.attr('src'),
                    base64 = '(Base64)';

                if (src.indexOf('data:image') === 0) {
                    src = base64;
                }

                var options = {
                    url: {
                        label: 'URL',
                        value: src,
                        required: true
                    },
                    alt: {
                        label: t.lang.description,
                        value: $img.attr('alt')
                    }
                };

                if (t.o.imageWidthModalEdit) {
                    options.width = {
                        value: $img.attr('width') ? $img.attr('width') : ''
                    };
                }

                t.openModalInsert(t.lang.insertImage, options, function (v) {
                    if (v.url !== base64) {
                        $img.attr({
                            src: v.url
                        });
                    }
                    $img.attr({
                        alt: v.alt
                    });

                    if (t.o.imageWidthModalEdit) {
                        if (parseInt(v.width) > 0) {
                            $img.attr({
                                width: v.width
                            });
                        } else {
                            $img.removeAttr('width');
                        }
                    }

                    return true;
                });
                return false;
            };
        },

        // Range management
        saveRange: function () {
            var t = this,
                documentSelection = t.doc.getSelection();

            t.range = null;

            if (!documentSelection || !documentSelection.rangeCount) {
                return;
            }

            var savedRange = t.range = documentSelection.getRangeAt(0),
                range = t.doc.createRange(),
                rangeStart;
            range.selectNodeContents(t.$ed[0]);
            range.setEnd(savedRange.startContainer, savedRange.startOffset);
            rangeStart = (range + '').length;
            t.metaRange = {
                start: rangeStart,
                end: rangeStart + (savedRange + '').length
            };
        },
        restoreRange: function () {
            var t = this,
                metaRange = t.metaRange,
                savedRange = t.range,
                documentSelection = t.doc.getSelection(),
                range;

            if (!savedRange) {
                return;
            }

            if (metaRange && metaRange.start !== metaRange.end) { // Algorithm from http://jsfiddle.net/WeWy7/3/
                var charIndex = 0,
                    nodeStack = [t.$ed[0]],
                    node,
                    foundStart = false,
                    stop = false;

                range = t.doc.createRange();

                while (!stop && (node = nodeStack.pop())) {
                    if (node.nodeType === 3) {
                        var nextCharIndex = charIndex + node.length;
                        if (!foundStart && metaRange.start >= charIndex && metaRange.start <= nextCharIndex) {
                            range.setStart(node, metaRange.start - charIndex);
                            foundStart = true;
                        }
                        if (foundStart && metaRange.end >= charIndex && metaRange.end <= nextCharIndex) {
                            range.setEnd(node, metaRange.end - charIndex);
                            stop = true;
                        }
                        charIndex = nextCharIndex;
                    } else {
                        var cn = node.childNodes,
                            i = cn.length;

                        while (i > 0) {
                            i -= 1;
                            nodeStack.push(cn[i]);
                        }
                    }
                }
            }

            // Fix IE11 Error 'Could not complete the operation due to error 800a025e'.
            // https://stackoverflow.com/questions/16160996/could-not-complete-the-operation-due-to-error-800a025e
            try {
                documentSelection.removeAllRanges();
            } catch (e) {
            }
            
            documentSelection.addRange(range || savedRange);
        },
        getRangeText: function () {
            return this.range + '';
        },

        clearButtonPaneStatus: function () {
            var t = this,
              prefix = t.o.prefix,
              activeClasses = prefix + 'active-button ' + prefix + 'active',
              originalIconClass = prefix + 'original-icon';

            // Reset all buttons and dropdown state
            $('.' + prefix + 'active-button', t.$btnPane).removeClass(activeClasses);
            $('.' + originalIconClass, t.$btnPane).each(function () {
                $(this).find('svg use').attr('xlink:href', $(this).data(originalIconClass));
            });
        },
        updateButtonPaneStatus: function () {
            var t = this,
                prefix = t.o.prefix,
                activeClasses = prefix + 'active-button ' + prefix + 'active',
                originalIconClass = prefix + 'original-icon',
                tags = t.getTagsRecursive(t.doc.getSelection().focusNode);

            t.clearButtonPaneStatus();

            $.each(tags, function (i, tag) {
                var btnName = t.tagToButton[tag.toLowerCase()],
                    $btn = $('.' + prefix + btnName + '-button', t.$btnPane);

                if ($btn.length > 0) {
                    $btn.addClass(activeClasses);
                } else {
                    try {
                        $btn = $('.' + prefix + 'dropdown .' + prefix + btnName + '-dropdown-button', t.$box);
                        var $btnSvgUse = $btn.find('svg use'),
                            dropdownBtnName = $btn.parent().data(prefix + 'dropdown'),
                            $dropdownBtn = $('.' + prefix + dropdownBtnName + '-button', t.$box),
                            $dropdownBtnSvgUse = $dropdownBtn.find('svg use');

                        // Highlight the dropdown button
                        $dropdownBtn.addClass(activeClasses);

                        // Switch dropdown icon to the active sub-icon one
                        if (t.o.changeActiveDropdownIcon && $btnSvgUse.length > 0) {
                            // Save original icon
                            $dropdownBtn
                              .addClass(originalIconClass)
                              .data(originalIconClass, $dropdownBtnSvgUse.attr('xlink:href'));

                            // Put the active sub-button's icon
                            $dropdownBtnSvgUse
                              .attr('xlink:href', $btnSvgUse.attr('xlink:href'));
                        }
                    } catch (e) {
                    }
                }
            });
        },
        getTagsRecursive: function (element, tags) {
            var t = this;
            tags = tags || (element && element.tagName ? [element.tagName] : []);

            if (element && element.parentNode) {
                element = element.parentNode;
            } else {
                return tags;
            }

            var tag = element.tagName;
            if (tag === 'DIV') {
                return tags;
            }
            if (tag === 'P' && element.style.textAlign !== '') {
                tags.push(element.style.textAlign);
            }

            $.each(t.tagHandlers, function (i, tagHandler) {
                tags = tags.concat(tagHandler(element, t));
            });

            tags.push(tag);

            return t.getTagsRecursive(element, tags).filter(function (tag) {
                return tag != null;
            });
        },

        // Plugins
        initPlugins: function () {
            var t = this;
            t.loadedPlugins = [];
            $.each($.trumbowyg.plugins, function (name, plugin) {
                if (!plugin.shouldInit || plugin.shouldInit(t)) {
                    plugin.init(t);
                    if (plugin.tagHandler) {
                        t.tagHandlers.push(plugin.tagHandler);
                    }
                    t.loadedPlugins.push(plugin);
                }
            });
        },
        destroyPlugins: function () {
            var t = this;
            $.each(this.loadedPlugins, function (i, plugin) {
                if (plugin.destroy) {
                    plugin.destroy(t);
                }
            });
        }
    };
})(navigator, window, document, jQuery);


/***/ }),

/***/ "./node_modules/trumbowyg/plugins/emoji/trumbowyg.emoji.js":
/*!*****************************************************************!*\
  !*** ./node_modules/trumbowyg/plugins/emoji/trumbowyg.emoji.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* ===========================================================
 * trumbowyg.emoji.js v0.1
 * Emoji picker plugin for Trumbowyg
 * http://alex-d.github.com/Trumbowyg
 * ===========================================================
 * Author : Nicolas Pion
 *          Twitter : @nicolas_pion
 */

(function ($) {
    'use strict';

    var defaultOptions = {
        emojiList: [
            '&#x2049',
            '&#x2122',
            '&#x2139',
            '&#x2194',
            '&#x2195',
            '&#x2196',
            '&#x2197',
            '&#x2198',
            '&#x2199',
            '&#x2328',
            '&#x2600',
            '&#x2601',
            '&#x2602',
            '&#x2603',
            '&#x2604',
            '&#x2611',
            '&#x2614',
            '&#x2615',
            '&#x2618',
            '&#x2620',
            '&#x2622',
            '&#x2623',
            '&#x2626',
            '&#x2638',
            '&#x2639',
            '&#x2640',
            '&#x2642',
            '&#x2648',
            '&#x2649',
            '&#x2650',
            '&#x2651',
            '&#x2652',
            '&#x2653',
            '&#x2660',
            '&#x2663',
            '&#x2665',
            '&#x2666',
            '&#x2668',
            '&#x2692',
            '&#x2693',
            '&#x2694',
            '&#x2695',
            '&#x2696',
            '&#x2697',
            '&#x2699',
            '&#x2702',
            '&#x2705',
            '&#x2708',
            '&#x2709',
            '&#x2712',
            '&#x2714',
            '&#x2716',
            '&#x2721',
            '&#x2728',
            '&#x2733',
            '&#x2734',
            '&#x2744',
            '&#x2747',
            '&#x2753',
            '&#x2754',
            '&#x2755',
            '&#x2757',
            '&#x2763',
            '&#x2764',
            '&#x2795',
            '&#x2796',
            '&#x2797',
            '&#x2934',
            '&#x2935',
            '&#x3030',
            '&#x3297',
            '&#x3299',
            '&#x1F9E1',
            '&#x1F49B',
            '&#x1F49A',
            '&#x1F499',
            '&#x1F49C',
            '&#x1F5A4',
            '&#x1F494',
            '&#x1F495',
            '&#x1F49E',
            '&#x1F493',
            '&#x1F497',
            '&#x1F496',
            '&#x1F498',
            '&#x1F49D',
            '&#x1F49F',
            '&#x262E',
            '&#x271D',
            '&#x262A',
            '&#x1F549',
            '&#x1F52F',
            '&#x1F54E',
            '&#x262F',
            '&#x1F6D0',
            '&#x26CE',
            '&#x264A',
            '&#x264B',
            '&#x264C',
            '&#x264D',
            '&#x264E',
            '&#x264F',
            '&#x1F194',
            '&#x269B',
            '&#x267E',
            '&#x1F251',
            '&#x1F4F4',
            '&#x1F4F3',
            '&#x1F236',
            '&#x1F21A',
            '&#x1F238',
            '&#x1F23A',
            '&#x1F237',
            '&#x1F19A',
            '&#x1F4AE',
            '&#x1F250',
            '&#x1F234',
            '&#x1F235',
            '&#x1F239',
            '&#x1F232',
            '&#x1F170',
            '&#x1F171',
            '&#x1F18E',
            '&#x1F191',
            '&#x1F17E',
            '&#x1F198',
            '&#x274C',
            '&#x2B55',
            '&#x1F6D1',
            '&#x26D4',
            '&#x1F4DB',
            '&#x1F6AB',
            '&#x1F4AF',
            '&#x1F4A2',
            '&#x1F6B7',
            '&#x1F6AF',
            '&#x1F6B3',
            '&#x1F6B1',
            '&#x1F51E',
            '&#x1F4F5',
            '&#x1F6AD',
            '&#x203C',
            '&#x1F505',
            '&#x1F506',
            '&#x303D',
            '&#x26A0',
            '&#x1F6B8',
            '&#x1F531',
            '&#x269C',
            '&#x1F530',
            '&#x267B',
            '&#x1F22F',
            '&#x1F4B9',
            '&#x274E',
            '&#x1F310',
            '&#x1F4A0',
            '&#x24C2',
            '&#x1F300',
            '&#x1F4A4',
            '&#x1F3E7',
            '&#x1F6BE',
            '&#x267F',
            '&#x1F17F',
            '&#x1F233',
            '&#x1F202',
            '&#x1F6C2',
            '&#x1F6C3',
            '&#x1F6C4',
            '&#x1F6C5',
            '&#x1F6B9',
            '&#x1F6BA',
            '&#x1F6BC',
            '&#x1F6BB',
            '&#x1F6AE',
            '&#x1F3A6',
            '&#x1F4F6',
            '&#x1F201',
            '&#x1F523',
            '&#x1F524',
            '&#x1F521',
            '&#x1F520',
            '&#x1F196',
            '&#x1F197',
            '&#x1F199',
            '&#x1F192',
            '&#x1F195',
            '&#x1F193',
            '&#x0030',
            '&#x0031',
            '&#x0032',
            '&#x0033',
            '&#x0034',
            '&#x0035',
            '&#x0036',
            '&#x0037',
            '&#x0038',
            '&#x0039',
            '&#x1F51F',
            '&#x1F522',
            '&#x0023',
            '&#x002A',
            '&#x23CF',
            '&#x25B6',
            '&#x23F8',
            '&#x23EF',
            '&#x23F9',
            '&#x23FA',
            '&#x23ED',
            '&#x23EE',
            '&#x23E9',
            '&#x23EA',
            '&#x23EB',
            '&#x23EC',
            '&#x25C0',
            '&#x1F53C',
            '&#x1F53D',
            '&#x27A1',
            '&#x2B05',
            '&#x2B06',
            '&#x2B07',
            '&#x21AA',
            '&#x21A9',
            '&#x1F500',
            '&#x1F501',
            '&#x1F502',
            '&#x1F504',
            '&#x1F503',
            '&#x1F3B5',
            '&#x1F3B6',
            '&#x1F4B2',
            '&#x1F4B1',
            '&#x00A9',
            '&#x00AE',
            '&#x27B0',
            '&#x27BF',
            '&#x1F51A',
            '&#x1F519',
            '&#x1F51B',
            '&#x1F51D',
            '&#x1F51C',
            '&#x1F518',
            '&#x26AA',
            '&#x26AB',
            '&#x1F534',
            '&#x1F535',
            '&#x1F53A',
            '&#x1F53B',
            '&#x1F538',
            '&#x1F539',
            '&#x1F536',
            '&#x1F537',
            '&#x1F533',
            '&#x1F532',
            '&#x25AA',
            '&#x25AB',
            '&#x25FE',
            '&#x25FD',
            '&#x25FC',
            '&#x25FB',
            '&#x2B1B',
            '&#x2B1C',
            '&#x1F508',
            '&#x1F507',
            '&#x1F509',
            '&#x1F50A',
            '&#x1F514',
            '&#x1F515',
            '&#x1F4E3',
            '&#x1F4E2',
            '&#x1F5E8',
            '&#x1F441',
            '&#x1F4AC',
            '&#x1F4AD',
            '&#x1F5EF',
            '&#x1F0CF',
            '&#x1F3B4',
            '&#x1F004',
            '&#x1F550',
            '&#x1F551',
            '&#x1F552',
            '&#x1F553',
            '&#x1F554',
            '&#x1F555',
            '&#x1F556',
            '&#x1F557',
            '&#x1F558',
            '&#x1F559',
            '&#x1F55A',
            '&#x1F55B',
            '&#x1F55C',
            '&#x1F55D',
            '&#x1F55E',
            '&#x1F55F',
            '&#x1F560',
            '&#x1F561',
            '&#x1F562',
            '&#x1F563',
            '&#x1F564',
            '&#x1F565',
            '&#x1F566',
            '&#x1F567',
            '&#x26BD',
            '&#x1F3C0',
            '&#x1F3C8',
            '&#x26BE',
            '&#x1F94E',
            '&#x1F3BE',
            '&#x1F3D0',
            '&#x1F3C9',
            '&#x1F3B1',
            '&#x1F3D3',
            '&#x1F3F8',
            '&#x1F945',
            '&#x1F3D2',
            '&#x1F3D1',
            '&#x1F3CF',
            '&#x1F94D',
            '&#x26F3',
            '&#x1F94F',
            '&#x1F3F9',
            '&#x1F3A3',
            '&#x1F94A',
            '&#x1F94B',
            '&#x1F3BD',
            '&#x1F6F9',
            '&#x26F8',
            '&#x1F94C',
            '&#x1F6F7',
            '&#x1F3BF',
            '&#x26F7',
            '&#x1F3C2',
            '&#x1F3CB',
            '&#x1F93C',
            '&#x1F938',
            '&#x26F9',
            '&#x1F93A',
            '&#x1F93E',
            '&#x1F3CC',
            '&#x1F3C7',
            '&#x1F9D8',
            '&#x1F3C4',
            '&#x1F3CA',
            '&#x1F93D',
            '&#x1F6A3',
            '&#x1F9D7',
            '&#x1F6B5',
            '&#x1F6B4',
            '&#x1F3C6',
            '&#x1F947',
            '&#x1F948',
            '&#x1F949',
            '&#x1F3C5',
            '&#x1F396',
            '&#x1F3F5',
            '&#x1F397',
            '&#x1F3AB',
            '&#x1F39F',
            '&#x1F3AA',
            '&#x1F939',
            '&#x1F3AD',
            '&#x1F3A8',
            '&#x1F3AC',
            '&#x1F3A4',
            '&#x1F3A7',
            '&#x1F3BC',
            '&#x1F3B9',
            '&#x1F941',
            '&#x1F3B7',
            '&#x1F3BA',
            '&#x1F3B8',
            '&#x1F3BB',
            '&#x1F3B2',
            '&#x1F3AF',
            '&#x1F3B3',
            '&#x1F3AE',
            '&#x1F3B0',
            '&#x231A',
            '&#x1F4F1',
            '&#x1F4F2',
            '&#x1F4BB',
            '&#x1F5A5',
            '&#x1F5A8',
            '&#x1F5B1',
            '&#x1F5B2',
            '&#x1F579',
            '&#x265F',
            '&#x1F9E9',
            '&#x1F5DC',
            '&#x1F4BD',
            '&#x1F4BE',
            '&#x1F4BF',
            '&#x1F4C0',
            '&#x1F4FC',
            '&#x1F4F7',
            '&#x1F4F8',
            '&#x1F4F9',
            '&#x1F3A5',
            '&#x1F4FD',
            '&#x1F39E',
            '&#x1F4DE',
            '&#x260E',
            '&#x1F4DF',
            '&#x1F4E0',
            '&#x1F4FA',
            '&#x1F4FB',
            '&#x1F399',
            '&#x1F39A',
            '&#x1F39B',
            '&#x23F1',
            '&#x23F2',
            '&#x23F0',
            '&#x1F570',
            '&#x231B',
            '&#x23F3',
            '&#x1F4E1',
            '&#x1F9ED',
            '&#x1F50B',
            '&#x1F50C',
            '&#x1F9F2',
            '&#x1F4A1',
            '&#x1F526',
            '&#x1F56F',
            '&#x1F9EF',
            '&#x1F5D1',
            '&#x1F6E2',
            '&#x1F4B8',
            '&#x1F4B5',
            '&#x1F4B4',
            '&#x1F4B6',
            '&#x1F4B7',
            '&#x1F4B0',
            '&#x1F4B3',
            '&#x1F48E',
            '&#x1F9FF',
            '&#x1F9F1',
            '&#x1F9F0',
            '&#x1F527',
            '&#x1F528',
            '&#x1F6E0',
            '&#x26CF',
            '&#x1F529',
            '&#x26D3',
            '&#x1F52B',
            '&#x1F4A3',
            '&#x1F52A',
            '&#x1F5E1',
            '&#x1F6E1',
            '&#x1F6AC',
            '&#x26B0',
            '&#x26B1',
            '&#x1F3FA',
            '&#x1F52E',
            '&#x1F4FF',
            '&#x1F488',
            '&#x1F9EA',
            '&#x1F9EB',
            '&#x1F9EC',
            '&#x1F9EE',
            '&#x1F52D',
            '&#x1F52C',
            '&#x1F573',
            '&#x1F48A',
            '&#x1F489',
            '&#x1F321',
            '&#x1F6BD',
            '&#x1F6B0',
            '&#x1F6BF',
            '&#x1F6C1',
            '&#x1F6C0',
            '&#x1F9F9',
            '&#x1F9FA',
            '&#x1F9FB',
            '&#x1F9FC',
            '&#x1F9FD',
            '&#x1F9F4',
            '&#x1F9F5',
            '&#x1F9F6',
            '&#x1F6CE',
            '&#x1F511',
            '&#x1F5DD',
            '&#x1F6AA',
            '&#x1F6CB',
            '&#x1F6CF',
            '&#x1F6CC',
            '&#x1F9F8',
            '&#x1F5BC',
            '&#x1F6CD',
            '&#x1F6D2',
            '&#x1F381',
            '&#x1F388',
            '&#x1F38F',
            '&#x1F380',
            '&#x1F38A',
            '&#x1F389',
            '&#x1F38E',
            '&#x1F3EE',
            '&#x1F390',
            '&#x1F9E7',
            '&#x1F4E9',
            '&#x1F4E8',
            '&#x1F4E7',
            '&#x1F48C',
            '&#x1F4E5',
            '&#x1F4E4',
            '&#x1F4E6',
            '&#x1F3F7',
            '&#x1F4EA',
            '&#x1F4EB',
            '&#x1F4EC',
            '&#x1F4ED',
            '&#x1F4EE',
            '&#x1F4EF',
            '&#x1F4DC',
            '&#x1F4C3',
            '&#x1F4C4',
            '&#x1F9FE',
            '&#x1F4D1',
            '&#x1F4CA',
            '&#x1F4C8',
            '&#x1F4C9',
            '&#x1F5D2',
            '&#x1F5D3',
            '&#x1F4C6',
            '&#x1F4C5',
            '&#x1F4C7',
            '&#x1F5C3',
            '&#x1F5F3',
            '&#x1F5C4',
            '&#x1F4CB',
            '&#x1F4C1',
            '&#x1F4C2',
            '&#x1F5C2',
            '&#x1F5DE',
            '&#x1F4F0',
            '&#x1F4D3',
            '&#x1F4D4',
            '&#x1F4D2',
            '&#x1F4D5',
            '&#x1F4D7',
            '&#x1F4D8',
            '&#x1F4D9',
            '&#x1F4DA',
            '&#x1F4D6',
            '&#x1F516',
            '&#x1F517',
            '&#x1F4CE',
            '&#x1F587',
            '&#x1F4D0',
            '&#x1F4CF',
            '&#x1F9F7',
            '&#x1F4CC',
            '&#x1F4CD',
            '&#x1F58A',
            '&#x1F58B',
            '&#x1F58C',
            '&#x1F58D',
            '&#x1F4DD',
            '&#x270F',
            '&#x1F50D',
            '&#x1F50E',
            '&#x1F50F',
            '&#x1F510',
            '&#x1F436',
            '&#x1F431',
            '&#x1F42D',
            '&#x1F439',
            '&#x1F430',
            '&#x1F98A',
            '&#x1F99D',
            '&#x1F43B',
            '&#x1F43C',
            '&#x1F998',
            '&#x1F9A1',
            '&#x1F428',
            '&#x1F42F',
            '&#x1F981',
            '&#x1F42E',
            '&#x1F437',
            '&#x1F43D',
            '&#x1F438',
            '&#x1F435',
            '&#x1F648',
            '&#x1F649',
            '&#x1F64A',
            '&#x1F412',
            '&#x1F414',
            '&#x1F427',
            '&#x1F426',
            '&#x1F424',
            '&#x1F423',
            '&#x1F425',
            '&#x1F986',
            '&#x1F9A2',
            '&#x1F985',
            '&#x1F989',
            '&#x1F99C',
            '&#x1F99A',
            '&#x1F987',
            '&#x1F43A',
            '&#x1F417',
            '&#x1F434',
            '&#x1F984',
            '&#x1F41D',
            '&#x1F41B',
            '&#x1F98B',
            '&#x1F40C',
            '&#x1F41A',
            '&#x1F41E',
            '&#x1F41C',
            '&#x1F997',
            '&#x1F577',
            '&#x1F578',
            '&#x1F982',
            '&#x1F99F',
            '&#x1F9A0',
            '&#x1F422',
            '&#x1F40D',
            '&#x1F98E',
            '&#x1F996',
            '&#x1F995',
            '&#x1F419',
            '&#x1F991',
            '&#x1F990',
            '&#x1F980',
            '&#x1F99E',
            '&#x1F421',
            '&#x1F420',
            '&#x1F41F',
            '&#x1F42C',
            '&#x1F433',
            '&#x1F40B',
            '&#x1F988',
            '&#x1F40A',
            '&#x1F405',
            '&#x1F406',
            '&#x1F993',
            '&#x1F98D',
            '&#x1F418',
            '&#x1F98F',
            '&#x1F99B',
            '&#x1F42A',
            '&#x1F42B',
            '&#x1F992',
            '&#x1F999',
            '&#x1F403',
            '&#x1F402',
            '&#x1F404',
            '&#x1F40E',
            '&#x1F416',
            '&#x1F40F',
            '&#x1F411',
            '&#x1F410',
            '&#x1F98C',
            '&#x1F415',
            '&#x1F429',
            '&#x1F408',
            '&#x1F413',
            '&#x1F983',
            '&#x1F54A',
            '&#x1F407',
            '&#x1F401',
            '&#x1F400',
            '&#x1F43F',
            '&#x1F994',
            '&#x1F43E',
            '&#x1F409',
            '&#x1F432',
            '&#x1F335',
            '&#x1F384',
            '&#x1F332',
            '&#x1F333',
            '&#x1F334',
            '&#x1F331',
            '&#x1F33F',
            '&#x1F340',
            '&#x1F38D',
            '&#x1F38B',
            '&#x1F343',
            '&#x1F342',
            '&#x1F341',
            '&#x1F344',
            '&#x1F33E',
            '&#x1F490',
            '&#x1F337',
            '&#x1F339',
            '&#x1F940',
            '&#x1F33A',
            '&#x1F338',
            '&#x1F33C',
            '&#x1F33B',
            '&#x1F31E',
            '&#x1F31D',
            '&#x1F31B',
            '&#x1F31C',
            '&#x1F31A',
            '&#x1F315',
            '&#x1F316',
            '&#x1F317',
            '&#x1F318',
            '&#x1F311',
            '&#x1F312',
            '&#x1F313',
            '&#x1F314',
            '&#x1F319',
            '&#x1F30E',
            '&#x1F30D',
            '&#x1F30F',
            '&#x1F4AB',
            '&#x2B50',
            '&#x1F31F',
            '&#x26A1',
            '&#x1F4A5',
            '&#x1F525',
            '&#x1F32A',
            '&#x1F308',
            '&#x1F324',
            '&#x26C5',
            '&#x1F325',
            '&#x1F326',
            '&#x1F327',
            '&#x26C8',
            '&#x1F329',
            '&#x1F328',
            '&#x26C4',
            '&#x1F32C',
            '&#x1F4A8',
            '&#x1F4A7',
            '&#x1F4A6',
            '&#x1F30A',
            '&#x1F32B',
            '&#x1F34F',
            '&#x1F34E',
            '&#x1F350',
            '&#x1F34A',
            '&#x1F34B',
            '&#x1F34C',
            '&#x1F349',
            '&#x1F347',
            '&#x1F353',
            '&#x1F348',
            '&#x1F352',
            '&#x1F351',
            '&#x1F96D',
            '&#x1F34D',
            '&#x1F965',
            '&#x1F95D',
            '&#x1F345',
            '&#x1F346',
            '&#x1F951',
            '&#x1F966',
            '&#x1F96C',
            '&#x1F952',
            '&#x1F336',
            '&#x1F33D',
            '&#x1F955',
            '&#x1F954',
            '&#x1F360',
            '&#x1F950',
            '&#x1F35E',
            '&#x1F956',
            '&#x1F968',
            '&#x1F96F',
            '&#x1F9C0',
            '&#x1F95A',
            '&#x1F373',
            '&#x1F95E',
            '&#x1F953',
            '&#x1F969',
            '&#x1F357',
            '&#x1F356',
            '&#x1F32D',
            '&#x1F354',
            '&#x1F35F',
            '&#x1F355',
            '&#x1F96A',
            '&#x1F959',
            '&#x1F32E',
            '&#x1F32F',
            '&#x1F957',
            '&#x1F958',
            '&#x1F96B',
            '&#x1F35D',
            '&#x1F35C',
            '&#x1F372',
            '&#x1F35B',
            '&#x1F363',
            '&#x1F371',
            '&#x1F364',
            '&#x1F359',
            '&#x1F35A',
            '&#x1F358',
            '&#x1F365',
            '&#x1F960',
            '&#x1F362',
            '&#x1F361',
            '&#x1F367',
            '&#x1F368',
            '&#x1F366',
            '&#x1F967',
            '&#x1F370',
            '&#x1F382',
            '&#x1F96E',
            '&#x1F9C1',
            '&#x1F36E',
            '&#x1F36D',
            '&#x1F36C',
            '&#x1F36B',
            '&#x1F37F',
            '&#x1F9C2',
            '&#x1F369',
            '&#x1F95F',
            '&#x1F36A',
            '&#x1F330',
            '&#x1F95C',
            '&#x1F36F',
            '&#x1F95B',
            '&#x1F37C',
            '&#x1F375',
            '&#x1F964',
            '&#x1F376',
            '&#x1F37A',
            '&#x1F37B',
            '&#x1F942',
            '&#x1F377',
            '&#x1F943',
            '&#x1F378',
            '&#x1F379',
            '&#x1F37E',
            '&#x1F944',
            '&#x1F374',
            '&#x1F37D',
            '&#x1F963',
            '&#x1F961',
            '&#x1F962',
            '&#x1F600',
            '&#x1F603',
            '&#x1F604',
            '&#x1F601',
            '&#x1F606',
            '&#x1F605',
            '&#x1F602',
            '&#x1F923',
            '&#x263A',
            '&#x1F60A',
            '&#x1F607',
            '&#x1F642',
            '&#x1F643',
            '&#x1F609',
            '&#x1F60C',
            '&#x1F60D',
            '&#x1F618',
            '&#x1F970',
            '&#x1F617',
            '&#x1F619',
            '&#x1F61A',
            '&#x1F60B',
            '&#x1F61B',
            '&#x1F61D',
            '&#x1F61C',
            '&#x1F92A',
            '&#x1F928',
            '&#x1F9D0',
            '&#x1F913',
            '&#x1F60E',
            '&#x1F929',
            '&#x1F973',
            '&#x1F60F',
            '&#x1F612',
            '&#x1F61E',
            '&#x1F614',
            '&#x1F61F',
            '&#x1F615',
            '&#x1F641',
            '&#x1F623',
            '&#x1F616',
            '&#x1F62B',
            '&#x1F629',
            '&#x1F622',
            '&#x1F62D',
            '&#x1F624',
            '&#x1F620',
            '&#x1F621',
            '&#x1F92C',
            '&#x1F92F',
            '&#x1F633',
            '&#x1F631',
            '&#x1F628',
            '&#x1F630',
            '&#x1F975',
            '&#x1F976',
            '&#x1F97A',
            '&#x1F625',
            '&#x1F613',
            '&#x1F917',
            '&#x1F914',
            '&#x1F92D',
            '&#x1F92B',
            '&#x1F925',
            '&#x1F636',
            '&#x1F610',
            '&#x1F611',
            '&#x1F62C',
            '&#x1F644',
            '&#x1F62F',
            '&#x1F626',
            '&#x1F627',
            '&#x1F62E',
            '&#x1F632',
            '&#x1F634',
            '&#x1F924',
            '&#x1F62A',
            '&#x1F635',
            '&#x1F910',
            '&#x1F974',
            '&#x1F922',
            '&#x1F92E',
            '&#x1F927',
            '&#x1F637',
            '&#x1F912',
            '&#x1F915',
            '&#x1F911',
            '&#x1F920',
            '&#x1F608',
            '&#x1F47F',
            '&#x1F479',
            '&#x1F47A',
            '&#x1F921',
            '&#x1F4A9',
            '&#x1F47B',
            '&#x1F480',
            '&#x1F47D',
            '&#x1F47E',
            '&#x1F916',
            '&#x1F383',
            '&#x1F63A',
            '&#x1F638',
            '&#x1F639',
            '&#x1F63B',
            '&#x1F63C',
            '&#x1F63D',
            '&#x1F640',
            '&#x1F63F',
            '&#x1F63E',
            '&#x1F932',
            '&#x1F450',
            '&#x1F64C',
            '&#x1F44F',
            '&#x1F91D',
            '&#x1F44D',
            '&#x1F44E',
            '&#x1F44A',
            '&#x270A',
            '&#x1F91B',
            '&#x1F91C',
            '&#x1F91E',
            '&#x270C',
            '&#x1F91F',
            '&#x1F918',
            '&#x1F44C',
            '&#x1F448',
            '&#x1F449',
            '&#x1F446',
            '&#x1F447',
            '&#x261D',
            '&#x270B',
            '&#x1F91A',
            '&#x1F590',
            '&#x1F596',
            '&#x1F44B',
            '&#x1F919',
            '&#x1F4AA',
            '&#x1F9B5',
            '&#x1F9B6',
            '&#x1F595',
            '&#x270D',
            '&#x1F64F',
            '&#x1F48D',
            '&#x1F484',
            '&#x1F48B',
            '&#x1F444',
            '&#x1F445',
            '&#x1F442',
            '&#x1F443',
            '&#x1F463',
            '&#x1F440',
            '&#x1F9E0',
            '&#x1F9B4',
            '&#x1F9B7',
            '&#x1F5E3',
            '&#x1F464',
            '&#x1F465',
            '&#x1F476',
            '&#x1F467',
            '&#x1F9D2',
            '&#x1F466',
            '&#x1F469',
            '&#x1F9D1',
            '&#x1F468',
            '&#x1F471',
            '&#x1F9D4',
            '&#x1F475',
            '&#x1F9D3',
            '&#x1F474',
            '&#x1F472',
            '&#x1F473',
            '&#x1F9D5',
            '&#x1F46E',
            '&#x1F477',
            '&#x1F482',
            '&#x1F575',
            '&#x1F470',
            '&#x1F935',
            '&#x1F478',
            '&#x1F934',
            '&#x1F936',
            '&#x1F385',
            '&#x1F9B8',
            '&#x1F9B9',
            '&#x1F9D9',
            '&#x1F9DD',
            '&#x1F9DB',
            '&#x1F9DF',
            '&#x1F9DE',
            '&#x1F9DC',
            '&#x1F9DA',
            '&#x1F47C',
            '&#x1F930',
            '&#x1F931',
            '&#x1F647',
            '&#x1F481',
            '&#x1F645',
            '&#x1F646',
            '&#x1F64B',
            '&#x1F926',
            '&#x1F937',
            '&#x1F64E',
            '&#x1F64D',
            '&#x1F487',
            '&#x1F486',
            '&#x1F9D6',
            '&#x1F485',
            '&#x1F933',
            '&#x1F483',
            '&#x1F57A',
            '&#x1F46F',
            '&#x1F574',
            '&#x1F6B6',
            '&#x1F3C3',
            '&#x1F46B',
            '&#x1F46D',
            '&#x1F46C',
            '&#x1F491',
            '&#x1F48F',
            '&#x1F46A',
            '&#x1F9E5',
            '&#x1F45A',
            '&#x1F455',
            '&#x1F456',
            '&#x1F454',
            '&#x1F457',
            '&#x1F459',
            '&#x1F458',
            '&#x1F97C',
            '&#x1F460',
            '&#x1F461',
            '&#x1F462',
            '&#x1F45E',
            '&#x1F45F',
            '&#x1F97E',
            '&#x1F97F',
            '&#x1F9E6',
            '&#x1F9E4',
            '&#x1F9E3',
            '&#x1F3A9',
            '&#x1F9E2',
            '&#x1F452',
            '&#x1F393',
            '&#x26D1',
            '&#x1F451',
            '&#x1F45D',
            '&#x1F45B',
            '&#x1F45C',
            '&#x1F4BC',
            '&#x1F392',
            '&#x1F453',
            '&#x1F576',
            '&#x1F97D',
            '&#x1F302',
            '&#x1F9B0',
            '&#x1F9B1',
            '&#x1F9B3',
            '&#x1F9B2',
            '&#x1F1FF',
            '&#x1F1FE',
            '&#x1F1FD',
            '&#x1F1FC',
            '&#x1F1FB',
            '&#x1F1FA',
            '&#x1F1F9',
            '&#x1F1F8',
            '&#x1F1F7',
            '&#x1F1F6',
            '&#x1F1F5',
            '&#x1F1F4',
            '&#x1F1F3',
            '&#x1F1F2',
            '&#x1F1F1',
            '&#x1F1F0',
            '&#x1F1EF',
            '&#x1F1EE',
            '&#x1F1ED',
            '&#x1F1EC',
            '&#x1F1EB',
            '&#x1F1EA',
            '&#x1F1E9',
            '&#x1F1E8',
            '&#x1F1E7',
            '&#x1F1E6',
            '&#x1F697',
            '&#x1F695',
            '&#x1F699',
            '&#x1F68C',
            '&#x1F68E',
            '&#x1F3CE',
            '&#x1F693',
            '&#x1F691',
            '&#x1F692',
            '&#x1F690',
            '&#x1F69A',
            '&#x1F69B',
            '&#x1F69C',
            '&#x1F6F4',
            '&#x1F6B2',
            '&#x1F6F5',
            '&#x1F3CD',
            '&#x1F6A8',
            '&#x1F694',
            '&#x1F68D',
            '&#x1F698',
            '&#x1F696',
            '&#x1F6A1',
            '&#x1F6A0',
            '&#x1F69F',
            '&#x1F683',
            '&#x1F68B',
            '&#x1F69E',
            '&#x1F69D',
            '&#x1F684',
            '&#x1F685',
            '&#x1F688',
            '&#x1F682',
            '&#x1F686',
            '&#x1F687',
            '&#x1F68A',
            '&#x1F689',
            '&#x1F6EB',
            '&#x1F6EC',
            '&#x1F6E9',
            '&#x1F4BA',
            '&#x1F9F3',
            '&#x1F6F0',
            '&#x1F680',
            '&#x1F6F8',
            '&#x1F681',
            '&#x1F6F6',
            '&#x26F5',
            '&#x1F6A4',
            '&#x1F6E5',
            '&#x1F6F3',
            '&#x26F4',
            '&#x1F6A2',
            '&#x26FD',
            '&#x1F6A7',
            '&#x1F6A6',
            '&#x1F6A5',
            '&#x1F68F',
            '&#x1F5FA',
            '&#x1F5FF',
            '&#x1F5FD',
            '&#x1F5FC',
            '&#x1F3F0',
            '&#x1F3EF',
            '&#x1F3DF',
            '&#x1F3A1',
            '&#x1F3A2',
            '&#x1F3A0',
            '&#x26F2',
            '&#x26F1',
            '&#x1F3D6',
            '&#x1F3DD',
            '&#x1F3DC',
            '&#x1F30B',
            '&#x26F0',
            '&#x1F3D4',
            '&#x1F5FB',
            '&#x1F3D5',
            '&#x26FA',
            '&#x1F3E0',
            '&#x1F3E1',
            '&#x1F3D8',
            '&#x1F3DA',
            '&#x1F3D7',
            '&#x1F3ED',
            '&#x1F3E2',
            '&#x1F3EC',
            '&#x1F3E3',
            '&#x1F3E4',
            '&#x1F3E5',
            '&#x1F3E6',
            '&#x1F3E8',
            '&#x1F3EA',
            '&#x1F3EB',
            '&#x1F3E9',
            '&#x1F492',
            '&#x1F3DB',
            '&#x26EA',
            '&#x1F54C',
            '&#x1F54D',
            '&#x1F54B',
            '&#x26E9',
            '&#x1F6E4',
            '&#x1F6E3',
            '&#x1F5FE',
            '&#x1F391',
            '&#x1F3DE',
            '&#x1F305',
            '&#x1F304',
            '&#x1F320',
            '&#x1F387',
            '&#x1F386',
            '&#x1F9E8',
            '&#x1F307',
            '&#x1F306',
            '&#x1F3D9',
            '&#x1F303',
            '&#x1F30C',
            '&#x1F309',
            '&#x1F512',
            '&#x1F513',
            '&#x1F301',
            '&#x1F3F3',
            '&#x1F3F4',
            '&#x1F3C1',
            '&#x1F6A9',
            '&#x1F38C',
            '&#x1F3FB',
            '&#x1F3FC',
            '&#x1F3FD',
            '&#x1F3FE',
            '&#x1F3FF'
        ]
    };

    // Add all emoji in a dropdown
    $.extend(true, $.trumbowyg, {
        langs: {
            // jshint camelcase:false
            en: {
                emoji: 'Add an emoji'
            },
            da: {
                emoji: 'Tilføj et humørikon'
            },
            de: {
                emoji: 'Emoticon einfügen'
            },
            fr: {
                emoji: 'Ajouter un emoji'
            },
            zh_cn: {
                emoji: '添加表情'
            },
            ru: {
                emoji: 'Вставить emoji'
            },
            ja: {
                emoji: '絵文字の挿入'
            },
            tr: {
                emoji: 'Emoji ekle'
            },
            ko: {
                emoji: '이모지 넣기'
            },
        },
        // jshint camelcase:true
        plugins: {
            emoji: {
                init: function (trumbowyg) {
                    trumbowyg.o.plugins.emoji = trumbowyg.o.plugins.emoji || defaultOptions;
                    var emojiBtnDef = {
                        dropdown: buildDropdown(trumbowyg)
                    };
                    trumbowyg.addBtnDef('emoji', emojiBtnDef);
                }
            }
        }
    });

    function buildDropdown(trumbowyg) {
        var dropdown = [];

        $.each(trumbowyg.o.plugins.emoji.emojiList, function (i, emoji) {
            if ($.isArray(emoji)) { // Custom emoji behaviour
                var emojiCode = emoji[0],
                    emojiUrl = emoji[1],
                    emojiHtml = '<img src="' + emojiUrl + '" alt="' + emojiCode + '">',
                    customEmojiBtnName = 'emoji-' + emojiCode.replace(/:/g, ''),
                    customEmojiBtnDef = {
                        hasIcon: false,
                        text: emojiHtml,
                        fn: function () {
                            trumbowyg.execCmd('insertImage', emojiUrl, false, true);
                            return true;
                        }
                    };

                trumbowyg.addBtnDef(customEmojiBtnName, customEmojiBtnDef);
                dropdown.push(customEmojiBtnName);
            } else { // Default behaviour
                var btn = emoji.replace(/:/g, ''),
                    defaultEmojiBtnName = 'emoji-' + btn,
                    defaultEmojiBtnDef = {
                        text: emoji,
                        fn: function () {
                            var encodedEmoji = String.fromCodePoint(emoji.replace("&#", "0"));
                            trumbowyg.execCmd('insertText', encodedEmoji);
                            return true;
                        }
                    };

                trumbowyg.addBtnDef(defaultEmojiBtnName, defaultEmojiBtnDef);
                dropdown.push(defaultEmojiBtnName);
            }
        });

        return dropdown;
    }
})(jQuery);


/***/ }),

/***/ "./node_modules/trumbowyg/plugins/upload/trumbowyg.upload.js":
/*!*******************************************************************!*\
  !*** ./node_modules/trumbowyg/plugins/upload/trumbowyg.upload.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* ===========================================================
 * trumbowyg.upload.js v1.2
 * Upload plugin for Trumbowyg
 * http://alex-d.github.com/Trumbowyg
 * ===========================================================
 * Author : Alexandre Demode (Alex-D)
 *          Twitter : @AlexandreDemode
 *          Website : alex-d.fr
 * Mod by : Aleksandr-ru
 *          Twitter : @Aleksandr_ru
 *          Website : aleksandr.ru
 */

(function ($) {
    'use strict';

    var defaultOptions = {
        serverPath: '',
        fileFieldName: 'fileToUpload',
        data: [],                       // Additional data for ajax [{name: 'key', value: 'value'}]
        headers: {},                    // Additional headers
        xhrFields: {},                  // Additional fields
        urlPropertyName: 'file',        // How to get url from the json response (for instance 'url' for {url: ....})
        statusPropertyName: 'success',  // How to get status from the json response 
        success: undefined,             // Success callback: function (data, trumbowyg, $modal, values) {}
        error: undefined,               // Error callback: function () {}
        imageWidthModalEdit: false      // Add ability to edit image width
    };

    function getDeep(object, propertyParts) {
        var mainProperty = propertyParts.shift(),
            otherProperties = propertyParts;

        if (object !== null) {
            if (otherProperties.length === 0) {
                return object[mainProperty];
            }

            if (typeof object === 'object') {
                return getDeep(object[mainProperty], otherProperties);
            }
        }
        return object;
    }

    addXhrProgressEvent();

    $.extend(true, $.trumbowyg, {
        langs: {
            // jshint camelcase:false
            en: {
                upload: 'Upload',
                file: 'File',
                uploadError: 'Error'
            },
            da: {
                upload: 'Upload',
                file: 'Fil',
                uploadError: 'Fejl'
            },
            de: {
                upload: 'Hochladen',
                file: 'Datei',
                uploadError: 'Fehler'
            },
            sk: {
                upload: 'Nahrať',
                file: 'Súbor',
                uploadError: 'Chyba'
            },
            fr: {
                upload: 'Envoi',
                file: 'Fichier',
                uploadError: 'Erreur'
            },
            cs: {
                upload: 'Nahrát obrázek',
                file: 'Soubor',
                uploadError: 'Chyba'
            },
            zh_cn: {
                upload: '上传',
                file: '文件',
                uploadError: '错误'
            },
            zh_tw: {
                upload: '上傳',
                file: '文件',
                uploadError: '錯誤'
            },
            ru: {
                upload: 'Загрузка',
                file: 'Файл',
                uploadError: 'Ошибка'
            },
            ja: {
                upload: 'アップロード',
                file: 'ファイル',
                uploadError: 'エラー'
            },
            pt_br: {
                upload: 'Enviar do local',
                file: 'Arquivo',
                uploadError: 'Erro'
            },
            tr: {
                upload: 'Yükle',
                file: 'Dosya',
                uploadError: 'Hata'
            },
            ko: {
                upload: '그림 올리기',
                file: '파일',
                uploadError: '에러'
            },
        },
        // jshint camelcase:true

        plugins: {
            upload: {
                init: function (trumbowyg) {
                    trumbowyg.o.plugins.upload = $.extend(true, {}, defaultOptions, trumbowyg.o.plugins.upload || {});
                    var btnDef = {
                        fn: function () {
                            trumbowyg.saveRange();

                            var file,
                                prefix = trumbowyg.o.prefix;

                            var fields = {
                                file: {
                                    type: 'file',
                                    required: true,
                                    attributes: {
                                        accept: 'image/*'
                                    }
                                },
                                alt: {
                                    label: 'description',
                                    value: trumbowyg.getRangeText()
                                }
                            };

                            if (trumbowyg.o.plugins.upload.imageWidthModalEdit) {
                                fields.width = {
                                    value: ''
                                };
                            }

                            var $modal = trumbowyg.openModalInsert(
                                // Title
                                trumbowyg.lang.upload,

                                // Fields
                                fields,

                                // Callback
                                function (values) {
                                    var data = new FormData();
                                    data.append(trumbowyg.o.plugins.upload.fileFieldName, file);

                                    trumbowyg.o.plugins.upload.data.map(function (cur) {
                                        data.append(cur.name, cur.value);
                                    });

                                    $.map(values, function (curr, key) {
                                        if (key !== 'file') {
                                            data.append(key, curr);
                                        }
                                    });

                                    if ($('.' + prefix + 'progress', $modal).length === 0) {
                                        $('.' + prefix + 'modal-title', $modal)
                                            .after(
                                                $('<div/>', {
                                                    'class': prefix + 'progress'
                                                }).append(
                                                    $('<div/>', {
                                                        'class': prefix + 'progress-bar'
                                                    })
                                                )
                                            );
                                    }

                                    $.ajax({
                                        url: trumbowyg.o.plugins.upload.serverPath,
                                        headers: trumbowyg.o.plugins.upload.headers,
                                        xhrFields: trumbowyg.o.plugins.upload.xhrFields,
                                        type: 'POST',
                                        data: data,
                                        cache: false,
                                        dataType: 'json',
                                        processData: false,
                                        contentType: false,

                                        progressUpload: function (e) {
                                            $('.' + prefix + 'progress-bar').css('width', Math.round(e.loaded * 100 / e.total) + '%');
                                        },

                                        success: function (data) {
                                            if (trumbowyg.o.plugins.upload.success) {
                                                trumbowyg.o.plugins.upload.success(data, trumbowyg, $modal, values);
                                            } else {
                                                if (!!getDeep(data, trumbowyg.o.plugins.upload.statusPropertyName.split('.'))) {
                                                    var url = getDeep(data, trumbowyg.o.plugins.upload.urlPropertyName.split('.'));
                                                    trumbowyg.execCmd('insertImage', url, false, true);
                                                    var $img = $('img[src="' + url + '"]:not([alt])', trumbowyg.$box);
                                                    $img.attr('alt', values.alt);
                                                    if (trumbowyg.o.imageWidthModalEdit && parseInt(values.width) > 0) {
                                                        $img.attr({
                                                            width: values.width
                                                        });
                                                    }
                                                    setTimeout(function () {
                                                        trumbowyg.closeModal();
                                                    }, 250);
                                                    trumbowyg.$c.trigger('tbwuploadsuccess', [trumbowyg, data, url]);
                                                } else {
                                                    trumbowyg.addErrorOnModalField(
                                                        $('input[type=file]', $modal),
                                                        trumbowyg.lang[data.message]
                                                    );
                                                    trumbowyg.$c.trigger('tbwuploaderror', [trumbowyg, data]);
                                                }
                                            }
                                        },

                                        error: trumbowyg.o.plugins.upload.error || function () {
                                            trumbowyg.addErrorOnModalField(
                                                $('input[type=file]', $modal),
                                                trumbowyg.lang.uploadError
                                            );
                                            trumbowyg.$c.trigger('tbwuploaderror', [trumbowyg]);
                                        }
                                    });
                                }
                            );

                            $('input[type=file]').on('change', function (e) {
                                try {
                                    // If multiple files allowed, we just get the first.
                                    file = e.target.files[0];
                                } catch (err) {
                                    // In IE8, multiple files not allowed
                                    file = e.target.value;
                                }
                            });
                        }
                    };

                    trumbowyg.addBtnDef('upload', btnDef);
                }
            }
        }
    });

    function addXhrProgressEvent() {
        if (!$.trumbowyg.addedXhrProgressEvent) {   // Avoid adding progress event multiple times
            var originalXhr = $.ajaxSettings.xhr;
            $.ajaxSetup({
                xhr: function () {
                    var that = this,
                        req = originalXhr();

                    if (req && typeof req.upload === 'object' && that.progressUpload !== undefined) {
                        req.upload.addEventListener('progress', function (e) {
                            that.progressUpload(e);
                        }, false);
                    }

                    return req;
                }
            });
            $.trumbowyg.addedXhrProgressEvent = true;
        }
    }
})(jQuery);


/***/ }),

/***/ "./resources/js/libs/admin.js":
/*!************************************!*\
  !*** ./resources/js/libs/admin.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! trumbowyg */ "./node_modules/trumbowyg/dist/trumbowyg.js");

__webpack_require__(/*! trumbowyg/plugins/upload/trumbowyg.upload */ "./node_modules/trumbowyg/plugins/upload/trumbowyg.upload.js");

__webpack_require__(/*! trumbowyg/plugins/emoji/trumbowyg.emoji */ "./node_modules/trumbowyg/plugins/emoji/trumbowyg.emoji.js");

var imgTemplate = "<div data-id=\"\" data-position=\"\" class=\"photo-tile\">\n<div class=\"move_handle\"><i class=\"icon-move\"></i></div>\n<div class=\"photo_tile_img_wrapper\"><img src=\"\"></div>\n<div class=\"photo_tile_btns__wrapper\">\n        <a href=\"#\" class=\"btn btn-danger galPhoto__del\"><i class=\"icon-trash-empty\"></i></a>\n      </div>\n        <div class=\"photo_tile_input_wrapper\">\n          <input type=\"text\" name=\"alt\" placeholder=\"photo description\" value=\"\">\n          </div>\n</div>";
document.addEventListener("DOMContentLoaded", function () {
  console.log('admin-panel');
  Dropzone.autoDiscover = false;
  var galleryDropZone = null;

  if (document.getElementsByClassName('dropzone').length) {
    var id = document.querySelector('.dropzone').getAttribute('data-id');
    Dropzone.autoDiscover = false;
    galleryDropZone = new Dropzone("#galleryPhotosDropZone", {
      url: "/admin/galleryPhoto",
      method: 'POST',
      paramName: 'galleryPhoto',
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      acceptedFiles: 'image/*',
      createImageThumbnails: false,
      previewTemplate: imgTemplate,
      previewsContainer: '.gallery_photos_wrapper',
      params: {
        gallery_id: id
      }
    });
    galleryDropZone.on("success", function (file, response) {
      var elem = file.previewElement;
      elem.setAttribute('data-id', response.id);
      elem.querySelector('img').setAttribute('src', response.url);
      file.previewElement.id = response.id;
    });
  }

  $.trumbowyg.svgPath = '/fonts/trumbowyg/icons.svg';
  $('textarea').trumbowyg({
    btns: [['viewHTML'], ['formatting'], ['strong', 'em', 'del'], ['link'], ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'], ['unorderedList', 'orderedList'], ['horizontalRule'], ['removeformat'], ['fullscreen'], ['upload'], ['emoji']],
    plugins: {
      upload: {
        serverPath: '/admin/media',
        fileFieldName: 'file',
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        urlPropertyName: 'url',
        success: function success(data, trumbowyg, $modal, values) {
          $('.media_upload').append('<input type="hidden" name="mediaID[]" value="' + data.photo.id + '"/>');
          var url = data.url;
          trumbowyg.execCmd('insertImage', url, false, true);
          var $img = $('img[src="' + url + '"]:not([alt])', trumbowyg.$box);
          $img.attr('alt', values.alt);

          if (trumbowyg.o.imageWidthModalEdit && parseInt(values.width) > 0) {
            $img.attr({
              width: values.width
            });
          }

          setTimeout(function () {
            trumbowyg.closeModal();
          }, 250);
          trumbowyg.$c.trigger('tbwuploadsuccess', [trumbowyg, data, url]);
        }
      }
    }
  });
  $(".gallery_photos_wrapper").sortable({
    items: '.photo-tile',
    handle: '.move_handle',
    cancel: '.photo_tile_btns__wrapper',
    cursor: 'move',
    opacity: 0.5,
    containment: '.gallery_photos_wrapper',
    distance: 20,
    tolerance: 'pointer'
  }).disableSelection().on("click", ".galPhoto__del", function (event) {
    event.preventDefault();
    deletePhotoRequest(event.target.closest('.photo-tile').getAttribute('data-id'));
  });
  $(".gallery_list_wrapper").sortable({
    items: '.gallery_item',
    handle: '.move_handle',
    cancel: '.gallery_item_btns__wrapper',
    cursor: 'move',
    opacity: 0.5,
    containment: '.gallery_list_wrapper',
    distance: 20,
    tolerance: 'pointer'
  });
  var secondLevel = document.querySelector('.nav-second-lvl .active');

  if (secondLevel) {
    secondLevel.parentNode.classList.add('active');
  }

  document.addEventListener('click', function (event) {
    if (event.target.closest('#sidebar_switcher')) {
      event.target.closest('#sidebar_switcher').classList.toggle('is-active');
      document.querySelector('.sidebar').classList.toggle('toggled');
    } else if (event.target.matches('.nav li a:not(:only-child)')) {
      event.target.nextElementSibling.classList.toggle('open');
    } else if (event.target.matches('.user-options')) {
      event.target.querySelector('.dropdown-user').classList.toggle('open');
    } else if (event.target.matches('#selectAll')) {
      isChecked = event.target.checked;
      var inputs = document.querySelectorAll('input[name="deleteMedia[]"]');
      inputs.forEach(function (elem, i) {
        elem.checked = isChecked;
      });
    } else if (event.target.matches('.del-submit')) {
      event.preventDefault();
      var form = document.querySelector('.delete-form');
      form.submit();
    } else if (event.target.matches('.galPhoto__save')) {
      event.preventDefault();
      saveGalleryPhoto(getPosition('.photo-tile', 1));
    } else if (event.target.matches('.gallery__publish')) {
      event.preventDefault();
      publishGallery(event.target);
    } else if (event.target.matches('.galPosition__update')) {
      event.preventDefault();
      updateGalleryPosition(getPosition('.gallery_item'));
    } else {
      return false;
    }
  });
  document.addEventListener('change', function (event) {
    if (event.target.matches('#file')) {
      onLoadFile(event);
    } else {
      return false;
    }
  });
});

function updateGalleryButton(target, confirmed) {
  if (confirmed) {
    target.classList.remove('btn-info');
    target.classList.add('btn-secondary');
    target.innerHTML = 'unpublish';
  } else {
    target.classList.remove('btn-secondary');
    target.classList.add('btn-info');
    target.innerHTML = 'publish';
  }
}

function publishGallery(target) {
  var id = target.closest('.gallery_item').getAttribute('data-id');
  loader(true);
  $.ajax({
    type: 'POST',
    url: '/admin/gallery/publish',
    dataType: 'JSON',
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    data: {
      id: id
    },
    success: function success(response) {
      loader(false);
      var published = '';

      if (response.confirmed) {
        published = 'Gallery has been published!';
      } else {
        published = 'Gallery has been unpublished!';
      }

      alertify.alert('Success', published);
      updateGalleryButton(target, response.confirmed);
    },
    error: function error(xhr) {
      console.log(xhr.responseText);
      loader(false);
      alertify.alert('Error', 'An error occurred while publishing the gallery. Try again later');
    }
  });
}

function updateGalleryPosition(data) {
  loader(true);
  $.ajax({
    type: 'POST',
    url: '/admin/gallery/updatePosition',
    dataType: 'JSON',
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    data: data,
    success: function success(response) {
      loader(false);
      alertify.alert('Success', 'Gallery position has been saved!');
    },
    error: function error(xhr) {
      console.log(xhr.responseText);
      loader(false);
      alertify.alert('Error', 'An error occurred while saving the gallery. Try again later');
    }
  });
}

function getPosition(selector) {
  var alt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var elems = document.querySelectorAll(selector);
  elems.forEach(function (elem, i) {
    elem.setAttribute('data-position', i + 1);
  });
  var resultData = {
    galleryData: []
  };
  elems.forEach(function (elem, i) {
    var obj = {};
    obj.id = elem.getAttribute('data-id');
    obj.position = elem.getAttribute('data-position');

    if (alt) {
      obj.alt = elem.getElementsByTagName('input').alt.value;
    }

    resultData.galleryData.push(obj);
  });
  return resultData;
}

function updateGallery() {
  var form = document.querySelector('.gallery_create_form');
  form.submit();
}

function saveGalleryPhoto(data) {
  if (!data.galleryData.length) {
    alertify.alert('Error', 'You have not added any photos');
    return false;
  }

  loader(true);
  $.ajax({
    type: 'POST',
    url: '/admin/galleryPhoto/updateAll',
    dataType: 'JSON',
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    data: data,
    success: function success(response) {
      loader(false);
      updateGallery();
    },
    error: function error(xhr) {
      console.log(xhr.responseText);
      loader(false);
      alertify.alert('Error', 'An error occurred while saving the gallery. Try again later');
    }
  });
}

function deletePhotoRequest(id) {
  loader(true);
  $.ajax({
    type: 'DELETE',
    url: '/admin/galleryPhoto/' + id,
    dataType: 'JSON',
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    success: function success(response) {
      loader(false);
      alertify.alert('Success', 'Photo has been deleted!');
      deletePhotoFromGallery(response.deleted);
    },
    error: function error(xhr) {
      loader(false);
      alertify.alert('Error', 'An error has occurred. Try again later');
      console.log(xhr.responseText);
    }
  });
}

function deletePhotoFromGallery(id) {
  var photo = document.querySelector('div[data-id="' + id + '"]');
  photo.remove();
}

function loader(flag) {
  var loader = document.createElement('div');
  var cover = document.createElement('div');
  cover.className = 'body-cover';
  loader.className = "loader-wrapper";
  loader.innerHTML = "<div class=\"sk-circle\">\n    <div class=\"sk-circle1 sk-child\"></div>\n    <div class=\"sk-circle2 sk-child\"></div>\n    <div class=\"sk-circle3 sk-child\"></div>\n    <div class=\"sk-circle4 sk-child\"></div>\n    <div class=\"sk-circle5 sk-child\"></div>\n    <div class=\"sk-circle6 sk-child\"></div>\n    <div class=\"sk-circle7 sk-child\"></div>\n    <div class=\"sk-circle8 sk-child\"></div>\n    <div class=\"sk-circle9 sk-child\"></div>\n    <div class=\"sk-circle10 sk-child\"></div>\n    <div class=\"sk-circle11 sk-child\"></div>\n    <div class=\"sk-circle12 sk-child\"></div>\n  </div>";
  var body = document.querySelector('body');

  if (flag) {
    body.append(loader);
    body.append(cover);
  } else {
    document.querySelector('.loader-wrapper').remove();
    document.querySelector('.body-cover').remove();
  }
}

var onLoadFile = function onLoadFile(event) {
  var output = document.querySelector('.thumbnail_preview');
  document.querySelector('.thumbnail_description').classList.add('active');
  output.src = URL.createObjectURL(event.target.files[0]);
};

/***/ }),

/***/ "./resources/sass/admin.scss":
/*!***********************************!*\
  !*** ./resources/sass/admin.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!************************************************************************************************!*\
  !*** multi ./resources/js/libs/admin.js ./resources/sass/app.scss ./resources/sass/admin.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\www\photoPage\resources\js\libs\admin.js */"./resources/js/libs/admin.js");
__webpack_require__(/*! C:\xampp\htdocs\www\photoPage\resources\sass\app.scss */"./resources/sass/app.scss");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\www\photoPage\resources\sass\admin.scss */"./resources/sass/admin.scss");


/***/ })

/******/ });