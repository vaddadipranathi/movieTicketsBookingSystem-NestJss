'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">movie-booking-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-182fc0c429a0e2789f28d265ea02e7c5014ea93bfbffb1c89225b3a29c43fe777dade57fc0f7b29c94d6e59eea605fbfa75e0b6208b9bf7ad0855077e823d6ec"' : 'data-target="#xs-controllers-links-module-AppModule-182fc0c429a0e2789f28d265ea02e7c5014ea93bfbffb1c89225b3a29c43fe777dade57fc0f7b29c94d6e59eea605fbfa75e0b6208b9bf7ad0855077e823d6ec"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-182fc0c429a0e2789f28d265ea02e7c5014ea93bfbffb1c89225b3a29c43fe777dade57fc0f7b29c94d6e59eea605fbfa75e0b6208b9bf7ad0855077e823d6ec"' :
                                            'id="xs-controllers-links-module-AppModule-182fc0c429a0e2789f28d265ea02e7c5014ea93bfbffb1c89225b3a29c43fe777dade57fc0f7b29c94d6e59eea605fbfa75e0b6208b9bf7ad0855077e823d6ec"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-182fc0c429a0e2789f28d265ea02e7c5014ea93bfbffb1c89225b3a29c43fe777dade57fc0f7b29c94d6e59eea605fbfa75e0b6208b9bf7ad0855077e823d6ec"' : 'data-target="#xs-injectables-links-module-AppModule-182fc0c429a0e2789f28d265ea02e7c5014ea93bfbffb1c89225b3a29c43fe777dade57fc0f7b29c94d6e59eea605fbfa75e0b6208b9bf7ad0855077e823d6ec"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-182fc0c429a0e2789f28d265ea02e7c5014ea93bfbffb1c89225b3a29c43fe777dade57fc0f7b29c94d6e59eea605fbfa75e0b6208b9bf7ad0855077e823d6ec"' :
                                        'id="xs-injectables-links-module-AppModule-182fc0c429a0e2789f28d265ea02e7c5014ea93bfbffb1c89225b3a29c43fe777dade57fc0f7b29c94d6e59eea605fbfa75e0b6208b9bf7ad0855077e823d6ec"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MoviesModule.html" data-type="entity-link" >MoviesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-MoviesModule-1135f05bd492ce26fa6967de55b0c8359fb2caedeef71646865385bce2e28d710156688ed96154342e6fd4570be5847cb50dd6c9127d90aa7404f805ee2c0f29"' : 'data-target="#xs-controllers-links-module-MoviesModule-1135f05bd492ce26fa6967de55b0c8359fb2caedeef71646865385bce2e28d710156688ed96154342e6fd4570be5847cb50dd6c9127d90aa7404f805ee2c0f29"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MoviesModule-1135f05bd492ce26fa6967de55b0c8359fb2caedeef71646865385bce2e28d710156688ed96154342e6fd4570be5847cb50dd6c9127d90aa7404f805ee2c0f29"' :
                                            'id="xs-controllers-links-module-MoviesModule-1135f05bd492ce26fa6967de55b0c8359fb2caedeef71646865385bce2e28d710156688ed96154342e6fd4570be5847cb50dd6c9127d90aa7404f805ee2c0f29"' }>
                                            <li class="link">
                                                <a href="controllers/MoviesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MoviesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MoviesModule-1135f05bd492ce26fa6967de55b0c8359fb2caedeef71646865385bce2e28d710156688ed96154342e6fd4570be5847cb50dd6c9127d90aa7404f805ee2c0f29"' : 'data-target="#xs-injectables-links-module-MoviesModule-1135f05bd492ce26fa6967de55b0c8359fb2caedeef71646865385bce2e28d710156688ed96154342e6fd4570be5847cb50dd6c9127d90aa7404f805ee2c0f29"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MoviesModule-1135f05bd492ce26fa6967de55b0c8359fb2caedeef71646865385bce2e28d710156688ed96154342e6fd4570be5847cb50dd6c9127d90aa7404f805ee2c0f29"' :
                                        'id="xs-injectables-links-module-MoviesModule-1135f05bd492ce26fa6967de55b0c8359fb2caedeef71646865385bce2e28d710156688ed96154342e6fd4570be5847cb50dd6c9127d90aa7404f805ee2c0f29"' }>
                                        <li class="link">
                                            <a href="injectables/MoviesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MoviesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TheaterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TheaterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentModule.html" data-type="entity-link" >PaymentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PaymentModule-0f0826c40327d8ce7b2494655e68ef78cbba50331002ceffef3602fcfdfbd8865a5f52db397ddad32aca658b26bab8500c84a4866b638d7d30b2b8901c0002c7"' : 'data-target="#xs-controllers-links-module-PaymentModule-0f0826c40327d8ce7b2494655e68ef78cbba50331002ceffef3602fcfdfbd8865a5f52db397ddad32aca658b26bab8500c84a4866b638d7d30b2b8901c0002c7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PaymentModule-0f0826c40327d8ce7b2494655e68ef78cbba50331002ceffef3602fcfdfbd8865a5f52db397ddad32aca658b26bab8500c84a4866b638d7d30b2b8901c0002c7"' :
                                            'id="xs-controllers-links-module-PaymentModule-0f0826c40327d8ce7b2494655e68ef78cbba50331002ceffef3602fcfdfbd8865a5f52db397ddad32aca658b26bab8500c84a4866b638d7d30b2b8901c0002c7"' }>
                                            <li class="link">
                                                <a href="controllers/PaymentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PaymentModule-0f0826c40327d8ce7b2494655e68ef78cbba50331002ceffef3602fcfdfbd8865a5f52db397ddad32aca658b26bab8500c84a4866b638d7d30b2b8901c0002c7"' : 'data-target="#xs-injectables-links-module-PaymentModule-0f0826c40327d8ce7b2494655e68ef78cbba50331002ceffef3602fcfdfbd8865a5f52db397ddad32aca658b26bab8500c84a4866b638d7d30b2b8901c0002c7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaymentModule-0f0826c40327d8ce7b2494655e68ef78cbba50331002ceffef3602fcfdfbd8865a5f52db397ddad32aca658b26bab8500c84a4866b638d7d30b2b8901c0002c7"' :
                                        'id="xs-injectables-links-module-PaymentModule-0f0826c40327d8ce7b2494655e68ef78cbba50331002ceffef3602fcfdfbd8865a5f52db397ddad32aca658b26bab8500c84a4866b638d7d30b2b8901c0002c7"' }>
                                        <li class="link">
                                            <a href="injectables/PaymentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TheaterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TheaterService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TheaterModule.html" data-type="entity-link" >TheaterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TheaterModule-a5b3689ccd27cfc708f0a2bb20ebd3afe5f24c43660fd4fafc78d9ad7011c5bcf42513452e7a019f1d8e9ee826b7cd8a35477c5cbd549bb771223fb568f83702"' : 'data-target="#xs-controllers-links-module-TheaterModule-a5b3689ccd27cfc708f0a2bb20ebd3afe5f24c43660fd4fafc78d9ad7011c5bcf42513452e7a019f1d8e9ee826b7cd8a35477c5cbd549bb771223fb568f83702"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TheaterModule-a5b3689ccd27cfc708f0a2bb20ebd3afe5f24c43660fd4fafc78d9ad7011c5bcf42513452e7a019f1d8e9ee826b7cd8a35477c5cbd549bb771223fb568f83702"' :
                                            'id="xs-controllers-links-module-TheaterModule-a5b3689ccd27cfc708f0a2bb20ebd3afe5f24c43660fd4fafc78d9ad7011c5bcf42513452e7a019f1d8e9ee826b7cd8a35477c5cbd549bb771223fb568f83702"' }>
                                            <li class="link">
                                                <a href="controllers/TheaterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TheaterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TheaterModule-a5b3689ccd27cfc708f0a2bb20ebd3afe5f24c43660fd4fafc78d9ad7011c5bcf42513452e7a019f1d8e9ee826b7cd8a35477c5cbd549bb771223fb568f83702"' : 'data-target="#xs-injectables-links-module-TheaterModule-a5b3689ccd27cfc708f0a2bb20ebd3afe5f24c43660fd4fafc78d9ad7011c5bcf42513452e7a019f1d8e9ee826b7cd8a35477c5cbd549bb771223fb568f83702"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TheaterModule-a5b3689ccd27cfc708f0a2bb20ebd3afe5f24c43660fd4fafc78d9ad7011c5bcf42513452e7a019f1d8e9ee826b7cd8a35477c5cbd549bb771223fb568f83702"' :
                                        'id="xs-injectables-links-module-TheaterModule-a5b3689ccd27cfc708f0a2bb20ebd3afe5f24c43660fd4fafc78d9ad7011c5bcf42513452e7a019f1d8e9ee826b7cd8a35477c5cbd549bb771223fb568f83702"' }>
                                        <li class="link">
                                            <a href="injectables/TheaterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TheaterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-cfc40538a46b8ac3863cfb04ff36650cf60df1c5687c069b64dc382c1766620a05f6b97030b3e88125e11d752bd0209a8b60313c8bf896610bfa663e07a2d282"' : 'data-target="#xs-controllers-links-module-UserModule-cfc40538a46b8ac3863cfb04ff36650cf60df1c5687c069b64dc382c1766620a05f6b97030b3e88125e11d752bd0209a8b60313c8bf896610bfa663e07a2d282"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-cfc40538a46b8ac3863cfb04ff36650cf60df1c5687c069b64dc382c1766620a05f6b97030b3e88125e11d752bd0209a8b60313c8bf896610bfa663e07a2d282"' :
                                            'id="xs-controllers-links-module-UserModule-cfc40538a46b8ac3863cfb04ff36650cf60df1c5687c069b64dc382c1766620a05f6b97030b3e88125e11d752bd0209a8b60313c8bf896610bfa663e07a2d282"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-cfc40538a46b8ac3863cfb04ff36650cf60df1c5687c069b64dc382c1766620a05f6b97030b3e88125e11d752bd0209a8b60313c8bf896610bfa663e07a2d282"' : 'data-target="#xs-injectables-links-module-UserModule-cfc40538a46b8ac3863cfb04ff36650cf60df1c5687c069b64dc382c1766620a05f6b97030b3e88125e11d752bd0209a8b60313c8bf896610bfa663e07a2d282"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-cfc40538a46b8ac3863cfb04ff36650cf60df1c5687c069b64dc382c1766620a05f6b97030b3e88125e11d752bd0209a8b60313c8bf896610bfa663e07a2d282"' :
                                        'id="xs-injectables-links-module-UserModule-cfc40538a46b8ac3863cfb04ff36650cf60df1c5687c069b64dc382c1766620a05f6b97030b3e88125e11d752bd0209a8b60313c8bf896610bfa663e07a2d282"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MoviesController.html" data-type="entity-link" >MoviesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PaymentController.html" data-type="entity-link" >PaymentController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TheaterController.html" data-type="entity-link" >TheaterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddMoviesDto.html" data-type="entity-link" >AddMoviesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddPaymentDto.html" data-type="entity-link" >AddPaymentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddTheaterDto.html" data-type="entity-link" >AddTheaterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddUserDto.html" data-type="entity-link" >AddUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Movies.html" data-type="entity-link" >Movies</a>
                            </li>
                            <li class="link">
                                <a href="classes/Payment.html" data-type="entity-link" >Payment</a>
                            </li>
                            <li class="link">
                                <a href="classes/Theater.html" data-type="entity-link" >Theater</a>
                            </li>
                            <li class="link">
                                <a href="classes/UnauthorizedException.html" data-type="entity-link" >UnauthorizedException</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MoviesService.html" data-type="entity-link" >MoviesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentService.html" data-type="entity-link" >PaymentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TheaterService.html" data-type="entity-link" >TheaterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationPipe.html" data-type="entity-link" >ValidationPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/SwaggerConfig.html" data-type="entity-link" >SwaggerConfig</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});