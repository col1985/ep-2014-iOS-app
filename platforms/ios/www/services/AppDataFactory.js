angular.module('app')
    .factory('AppDataFactory', ['$log',
        function AppDataFactory() {
            'use strict';

            // var data = {};

            var lineup = {
                'HEADLINERS': ['PORTISHEAD',
                    'OUTKAST',
                    'BECK',
                    'FOALS',
                    'PET SHOP BOYS',
                    'PAOLO NUTINI',
                    'CHIC FEAT NILE RODGERS',
                    'LILY ALLEN',
                    'BLONDIE',
                    'SIMPLE MINDS',
                    'SINEAD O \'CONNOR',
                    'MOGWAI',
                    'JAMES VINCENT MCMORROW',
                    'JAMES MURPHY',
                    'SBTRKT',
                    'ST.VINCENT',
                    'BOMBAY BICYCLE CLUB',
                    'LONDON GRAMMAR',
                    'THE 1975',
                    'SLOWDIVE',
                    'WILD BEASTS',
                    'METRONOMY',
                    'KELIS',
                    'HOZIER',
                    'LAURA MVULA',
                    'DUKE DUMONT',
                    'THE STRANGLERS',
                    'FLUME',
                    'THE BLADES',
                    'NENEH CHERRY',
                    'HERCULES & LOVE AFFAIR',
                    'ANNIE MAC',
                    'HAMSANDWICH',
                    'THE STRYPES',
                    'CLEAN BANDIT',
                    'OMAR SOULEYMAN',
                    'THE WAILERS',
                    'THE HORRORS',
                    'LE GALAXIE DJS PRESENT LASER DISCO',
                    'TEMPLES',
                    'BP FALLON & THE GHOST WOLVES',
                    'SOHN',
                    'WHITE DENIM',
                    'TWIN SHADOW',
                    'JUNGLE',
                    'FKA TWIGS',
                    'BICEP',
                    'KAYTRANADA',
                    'SAMPHA (DJ SET)',
                    'SHIT ROBOT',
                    'KRYSTAL KLEAR',
                    'JOHN WIZARDS',
                    'WALKING ON CARS',
                    'NICK MULVEY',
                    'CATHY DAVEY',
                    'STEPHEN MALKMUS & THE JICKS',
                    'JENNY LEWIS',
                    'ASGEIR',
                    'WOLF ALICE',
                    'DRENGE',
                    'THE ORWELLS',
                    'UNKNOWN MORTAL ORCHESTRA',
                    'THE DISTRICTS',
                    'GLASS ANIMALS',
                    'SEINABO SEY',
                    'VAULTS',
                    'BENJAMIN BOOKER',
                    'VANCOUVER SLEEP CLINIC',
                    'RUSTIE',
                    'PHOX',
                    'MOKO',
                    'NIGHTBOX',
                    'SHEPPARD',
                    'THE WHEREABOUTS',
                    'WE CUT CORNERS',
                    'THE MINUTES',
                    'VANN MUSIC',
                    'ALL TVVINS',
                    'BOOKA BRASS BAND',
                    'SLEEP THIEVES',
                    'SPIES',
                    'THE ACADEMIC',
                    'RAGLANS',
                    'ORLA GARTLAND',
                    'BUFFALO SUNN',
                    'DANIEL JAMES',
                    'ACROBAT',
                    'WYVERN LINGO',
                    'DUBLIN GOSPEL CHOIR',
                    'TRINITY ORCHESTRA'
                ],
                'BODY_&_SOUL': {
                    'BODY_N_SOUL_STAGE': ['TUNE-YARDS',
                        'YOUNG FATHERS',
                        'PERFUME GENIUS',
                        'KATE BOY',
                        'FRANCOIS & THE ATLAS MOUNTAINS',
                        'OUM SHATT',
                        'LAU',
                        'MOODOID',
                        'GLASS ANIMALS',
                        'OLOF ARNALDS',
                        'ALICE BOMAN',
                        'DERMOT BYRNE',
                        'FLORIAN BLANCKE & BRENDAN O \'REGAN',
                        'JOIN ME IN THE PINES',
                        'I HAVE A TRIBE',
                        'LINKOBAN',
                        'JON GOMM',
                        'MELTYBRAINS ?',
                        'TOMMY KD',
                        'C.R.AVERY',
                        'THE ALTERED HOURS',
                        'BUFFALO WOMAN',
                        'DONAL DINEEN',
                        'RONAN O SNADAIGH AND THE OCCASIONALS',
                        'SOUNDS OF SYSTEM BREAKDOWN',
                        'INTERSKALACTIC',
                        'VIKING PROJECT',
                        'THE CAREERS',
                        'LOAH',
                        'SLEEP THIEVES',
                        'GROUNDS FOR INVASION',
                        'YOUTH MASS',
                        'MONGOOSE',
                        'SUSAN O\'NEILL & THE LOW STANDARDS',
                        'ARIOSO',
                        'GROUSE'
                    ],
                    'UPSTAGE': ['KOWTON',
                        'SHANTI CELESTE',
                        'REPLETE',
                        'O.UTLIER',
                        'CHRIS FARRELL',
                        'TR - ONE(LIVE)',
                        'TALKBOY',
                        'UNKNWN(LIVE)',
                        'GHOSTS',
                        'RYAN VAIL',
                        'SHANE MANNION',
                        'LAKE PEOPLE(LIVE)',
                        'DONAL DINEEN',
                        'REID',
                        'ADULTROCK(LIVE)',
                        'DISCOTEKKEN',
                        'GILBERT STEELE',
                        'CONTOUR',
                        'SOL & LOUCHE',
                        'RICHEM',
                        'P DISCONAUT',
                        'DJKIDCAM',
                        'MIKEY JOYRIDE SORO'
                    ],
                    'EARTHSHIP': ['MAUD IN CAHOOTS',
                        'RUFF CHUFF LIVE CREW',
                        'COME ON LIVE LONG',
                        'LEO MORAN & ANTO THISTLETWAITE',
                        'THE TAV JAM BAND',
                        'WOB!',
                        'JOE FURY & THE HAYRIDE',
                        'PUNCH FACE CHAMPIONS',
                        'WILLOW SEA & GUESTS',
                        'AINDRIAS DE STAIC AND THE LATCHIKOS',
                        'ATTENTION BEBE',
                        'STEVIE G & THE DEEP SOUTH SOUL SOUNDSYSTEM',
                        'THE ESKIES',
                        'SIMI CROWNS',
                        'NOELIE MCDONNELL & BAND',
                        'EDFT',
                        'I AM NIAMH',
                        'POLYPHONIC X',
                        'THE AMAZING FEW',
                        'SINEAD WHITE',
                        'THE GROUND WILL SHAKE',
                        'KOUKIE',
                        'FLOOR STAFF',
                        'SOMERVILLE',
                        'EILEEN KEANE',
                        'MALCOLM LONDON',
                        'SYMPHONIC FUNK',
                        'TRADIOHEAD',
                        'MIKEY AND THE SCALLYWAGS',
                        'STRANGE BOATS',
                        'G.I.R.O',
                        'THE COLD DRAW',
                        'LOUISIANA 6',
                        'SHAY COTTER AND THE NEW BLUES',
                        'ANALOGUE WAVE',
                        'IN THE WILLOWS '
                    ]
                },
                'COMEDY': ['SIMON AMSTELL',
                    'DAVID O\'DOHERTY',
                    'SEANN WALSH',
                    'JASON BYRNE',
                    'RUBBERBANDITS',
                    'ABANDOMAN',
                    'DAVID MCSAVAGE',
                    'JOHN COLLEARY',
                    'PATRICK MCDONNELL',
                    'STEVE FROST IMPROV ALLSTARS',
                    'AISLING BEA',
                    'BEC HILL',
                    'GUNTHER GRUN',
                    'FOIL ARMS AND HOG',
                    'ELEANOR TIERNAN',
                    'CHRIS KENT',
                    'JARLATH REGAN',
                    'COLM O\'REGAN',
                    'KARL SPAIN',
                    'COLUM MCDONNELL',
                    'FRED COOKE',
                    'ERIC LALOR',
                    'AL PORTER',
                    'KEVIN MCGARHEN',
                    'TOMIE JAMES',
                    'TREVOR BROWNE',
                    'STEVE BENNETT',
                    'DANNY DOWLING'
                ],
                'TRAILER_PARK': {
                    'THE_MOBILE_HOME_STAGE': ['THE YOUNG FOLK',
                        'THE WHEREABOUTS',
                        'GET BACK: THE STORY OF THE BEATLES',
                        'PEARL TN',
                        'HUSTLE',
                        'STORYFOLD',
                        'KEVIN DOYLE',
                        'S ELVIS: THE WAY IT WAS',
                        'C. R. AVERY',
                        'HARVEST: A TRIBUTE TO NEIL YOUNG',
                        'THE TRAMPZ',
                        'GHOST ESTATES',
                        'CLIVE BARNES',
                        'KINGSTON',
                        'VIKING PROJECT',
                        'THIS SIDE UP',
                        'TUCAN',
                        'CULT CALLED MAN',
                        'KEVIN SHERIDAN',
                        'MOO!',
                        'THROWING HALOS',
                        'RISKY BUSINESS',
                        'PRISON LOVE',
                        'CUAN AND LUKAS(DJ)',
                        'JOHN & MANDY',
                        'WHITE CHALK',
                        'MY FELLOW SPONGES',
                        'ERIC BUTLER AND THE REVELATORS'
                    ],
                    'JIMMIE_LEES_JUKE_JOINT': ['ERIC BUTLER AND THE REVELATORS',
                        'DAVE CLARKE BYRD BAND',
                        'REVEREND JM\'S PANIC WORKSHOP',
                        'SAL VITRO',
                        'DARK LANES',
                        'KEYWEST',
                        'RED EMPIRE',
                        'HUEY & THE HOBGOBLINS',
                        'PRAIRIE DAWGS',
                        'CROW BLACK CHICKEN',
                        'WHISTLE',
                        'OKI\'S WAGON'
                    ],
                },
                'SALTY_DOG': ['CATHY DAVEY',
                    'THE DISTRICTS',
                    'PEARL TN',
                    'TERRY HOOLEY',
                    'THE MINUTES',
                    'ALIEN ENVOY',
                    'BOOKA BRASS BAND',
                    'KING KONG COMPANY',
                    'BRONAGH GALLAGHER',
                    'DEKE DIGGLER',
                    'PILGRIM STREET',
                    'PETE PAMF SEXTETTE',
                    'PHIL COSBY',
                    'CORNER BOY',
                    'CULT CALLED MAN',
                    'DEEP DOWN DETOX',
                    'PRISON LOVE',
                    'THE SQUARE PEGS',
                    'NEW SECRET WEAPON',
                    'THIS SIDE UP',
                    'SEAN\'S WALK',
                    'CAMEMBERT QURTET',
                    'ANDY ALLDAY',
                    'STEPHEN JAMES',
                    'NICK THORNLES',
                    '50S VINYL',
                    'SALTY DOG ALSTARS PARALLEL LINES',
                    'MARIE-THERSE',
                    'JULIAN LLOYD\'S LOVE BREAKFAST',
                    'RAGLANS',
                    'NICK SERGENT',
                    'AIDAN KAVANAH\'S CARIBBEAN CALYPSO KING',
                    'SKAZZ',
                ],
                'TRENCHTOWN': {
                    'MAIN_STAGE_INNA_LIVE_YARD': ['SOLO BANTON',
                        'CAPITOL 1212 A M.A.D',
                        'JAH LEX',
                        'MR',
                        'WILLIAMZ',
                        'DIRTY DUBSTERS',
                        'CIAN FINN',
                        'RI RA',
                        'DUBLIN AFROBEAT ENSEMBLE',
                        'ARUBDUB',
                        'AFTER THE IBIS',
                        'BLES',
                        'SKAZZ',
                        'BELFAST REGGAE',
                        'CRAZY D',
                        'SYNERGY',
                        'INTERSKALACTIC',
                        'TIMOTHY STARR',
                        'RAS TINNY & BABY EWE',
                        'JOYFUL NOIZ',
                        'TT DUB',
                        'THE BIONIC RATS',
                        'JOHNNY DREAD',
                        'GLENN BROWN',
                        'THE DODGY FEW',
                        'JUNIOR SPESH',
                        'OI OI SOUNDSYSTEM',
                        'TOM BEARY',
                        'LIONHEART',
                        'DJ KALI'
                    ],
                    'ROOTS_INNA_DA_WOODS_ARENA': ['REVELATION SOUND SYSTEM',
                        'MIALODICA',
                        'BENJI REVALATION',
                        'I KINGDOM SOUNDSYSTEM',
                        'WORLD BASS CULTURE',
                        'FYAHRED',
                        'DAN TALIRAS',
                        'WORRIES OUTERNATIONAL',
                        'PROFF RUFF CHUFF',
                        'EXPLOSION SOUNDSYSTEM'
                    ],
                    'TREASURE_BEACH_STAGE': ['WILL SOFTLY',
                        'DAVE BARRY',
                        'SLICK NORMAL',
                        'NIGEL WOODS'
                    ],
                    'RED_BULL_MUSIC_ACADEMY': ['BODDIKA',
                        'JOY ORBISON',
                        'DARK SKY',
                        'SUNIL SHARPE',
                        'DORIAN CONCEPT',
                        'RIFT',
                        'CLU',
                        'REPUBLIK DJS',
                        'KOBINA',
                        'HANDSOME PADDY',
                        'COLM K',
                    ],
                    'CASA_BACARDI': ['DIMITRI FROM PARIS',
                        'GREG WILSON',
                        'THE 2 BEARS',
                        'NANCY WHANG',
                        'EJECA',
                        'PLEASUREKRAFT',
                        'JONAS RATHSMAN',
                        'BILLY SCURRY',
                        'GHOSTBOY',
                        'MOTHER DJS',
                        'DISCONAUTS',
                        'GET DOWN EDITS',
                        'DECENT PERKS',
                        'DISCOTEKKEN',
                        'KELLY - ANNE BYRNE'
                    ],
                    'JERRY_FISH_ELECTRIC_SIDESHOW': ['SALLY CINNAMON',
                        'DUKE SPECIAL\'S GRAMAPHONE CLUB',
                        'FELIX SONNYBOY',
                        'GANGS',
                        'THE MINUTES',
                        'JERRY FISH',
                        'TOGETHER DISCO',
                        'GUILTY BOY ASSOCIATION',
                        'PROPELLOR PALMS',
                        'CAMILLE O\'SULLIVAN',
                        'RICHARD EGAN',
                        'THE FRANK & WALTERS',
                        'THE LOST BROTHERS',
                        'R.S.A.G',
                        'INTERSKALACTIC',
                        'ALL THE LUCK IN THE WORLD',
                        'M YOUR VINYL',
                        'THE KILO 1977',
                        'SHIR MADNESS',
                        'FOXY P COX',
                        'THE PONY GIRLS',
                        'CROW BLACK CHICKEN',
                        'JOHN BLEK AND THE RATS',
                        'BRIAN DEADY',
                        'CHANELLE MC GUINNESS'
                    ]
                }
            };

            return {
                version: '0.1.0',
                lineup: lineup
            };
        }
    ]);
