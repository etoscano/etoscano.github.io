
const data = {
  projects: {
    list: [
      {
        title: "Automated Accessibility Testing Tool",
        date: 2022,
        tech: ["JavaScript", "Selenium", "Electron"],
        path: "accessibility-testing",
        summary: ``,
        desc: `<b>JavaScript development</b> of a tool to automate accessibility testing. This tool integrates <a href="https://github.com/dequelabs/axe-core">axe-core</a>, an accessibility testing engine, <a href="https://www.selenium.dev/">Selenium</a>, an open-source project for browser automation. and <a href="https://www.electronjs.org/">Electron</a>, an open-source framework designed to create desktop applications.`,
        imgs: [
          {
            path: "a11ytest0.png",
            caption: ""
          },
          {
            path: "a11ytest1.png",
            caption: "The tool's interface"
          }
          ,
          {
            path: "a11ytest1.png",
            caption: "xxxxx"
          }
        ],
      },   
      {
        title: "Conversational Interfaces for Smart Home",
        date: 2021,
        tech: ["Robot Operation System", "Amazon Web Services", "Linux"],
        path: "conversational-interface",
        summary: ``,
        desc: `Development of a <b>speech-based interface for social robots</b> connected with smart space sensors and actuators, enabling robots to:
        <ul>
          <li>
          engage the elderly in <b>context-aware conversations</b> related to everyday tasks or to behaviors that are consistent with indoor and outdoor environmental conditions
          </li>
          <li>
          to act as a proxy for <b>domotic control</b>
          </li>
        </ul>
        `,
        imgs: [
          {
            path: "conversational0.png",
            caption: ""
          },
          {
            path: "conversational1.png",
            caption: "Experiemental study partecipant interacting with the speech-based interface"
          },
          {
            path: "conversational2.jpeg",
            caption: "Domus Lab at Officine Edison Milano perfectly reproduces a common domestic environment and it is used for testing IoT systems"
          },
          {
            path: "conversational3.png",
            caption: "System overview: integration of Home Assistant, an open-source home automation software, into HARMONI, a ROS-based tool for the creation of human-robot interactions"
          },
          {
            path: "conversational4.png",
            caption: "HARMONI's packages divided by category"
          }
        ],
      },     
      {
        title: "Smart Space Games",
        date: 2020,
        tech: ["Unity", "Kinect", "Arduino"],
        path: "smart-space-games",
        summary: `Development of <strong>smart space games</strong> in Unity using projectors, a Kinect and Arduino `,
        desc: `<b>Unity</b> development of a <b>smart space application focused on nutrition education</b> for children with neurodevelopmental disorders.
        The interaction for the first two games is based on <b>hand tracking</b> while the third game relies on a custom <b>smart object</b>.
        <br>
        The tools and devices employed are:
        <ul>
          <li>
            Kinect
          </li>
          <li>
            Front and floor projectors
          </li>
          <li>
            Audio system
          </li>
          <li>
            Portable and fixed smart lights
          </li>
        </ul>
        `,
        imgs: [
          {
            path: "GEA0.png",
            caption: "Development of smart space games in Unity using projectors, a Kinect and Arduino"
          },
          {
            path: "GEA2.png",
            caption: "Game concept for one of the games"
          },
          {
            path: "GEA1.png",
            caption: "My team and I have created a pyramid smart object for one of the games, using Arduino and RFID readers"
          },
          {
            path: "GEA5.jpg",
            caption: "The smart room at i3Lab, situated inside Politecnico di Milano, where we tested the games"
          }
        ],
      },     
      {
        title: "Mixed Reality Educational Tool",
        date: 2021,
        tech: ["Unity", "Vuforia", "Firebase"],
        summary: `Unity implementation of a <strong>Mixed Reality</strong> educational tool for learning geography `,
        path: "mixed-reality",
        desc: `<b>Unity</b> development of a <b>Mixed Reality</b> tool for learning geography.
        <br>
        First the user scans the interactive city that they want to learn about using a smartphone.
        The user uses a handmade paper cube as medium through which interact with the information available about the city.
        <br/>Each side of the cube shows a different aspect the user may want to learn about, such as monuments, state anthems and flags.
        The online database allows other users to see which ciy is loaded on a certain cube, making a <b>shared learning experience</b> possible.
        Also, placing two cubes close to each other allows the user to learn about the differences between the two countries.
        <br>
        <br> `,
        imgs: [
          {
            path: "Map0.png",
            caption: "Unity implementation of a Mixed Reality educational tool for learning geography"
          },
          {
            path: "Map1.jpg",
            caption: "Two city maps, an handmade paper cube and the application showing a monument on the cube"
          },
          {
            path: "Map2.jpg",
            caption: "Paper model of the cube and its faces: national anthem, load data, monument, city, national flag and traditional food"
          }
        ],
      },      
      {
        title: "Augmented Reality for a card game",
        date: 2020,
        tech: ["Unity", "Vuforia", "Augmented Reality", "Android"],
        path: "augmented-reality",
        summary: `<strong>Augmented Reality</strong> application to enhance the experience of trading Magic: The Gathering cards`,
        desc: `Magic: The Rendering is an <b>AR application</b> tool for players of the collectible card game <i>Magic: The
        Gathering</i> to enhance their user experience in different aspects related to trading. This app was developed in <b>Unity</b>.
        <br>
        App structure:
        <ul>
            <li><b>Scan for information</b>
              <ul>
                <li><b>Card info</b> shows price, type and set</li>
                <li><b>Language translation</b> shows the translation of a card on top of the
                original one</li>
              </ul>
            </li>
            <li><b>Manage user collection</b> lists all the cards the user has in their collection and the number of copies                        
                <ul>
                    <li><b>Add to collection</b> lets the user scan cards to add them to their collection</li>
                </ul>
            </li>
        </ul>
        `,
        imgs: [
          {
            path: "Magic0.png",
            caption: "Augmented Reality application to enhance the experience of trading Magic: The Gathering cards"
          },          
          {
            path: "Magic1.jpeg",
            caption: "App development in Unity"
          },
          {
            path: "Magic2.png",
            caption: "Functionalities: scan for information, manage user collection and add to collection"
          }
        ],
      }, 
      {
        title: "Dynamic Website",
        date: 2020,
        tech: ["HTML/CSS", "JavaScript", "SQL"],
        path: "dynamic-website",
        summary: `<strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> and <strong>SQL</strong> implementation of a dynamic website from IDM specifications`,
        desc: `In this project I've created a dynamic website. IDM submodels have been used for Content, Navigation and Presentation design and interaction scenarios have been created to describe the flow of usage. After the website design I have implemented it using HTML, CSS, JavaScript and SQL.`,
        imgs: [
          {
            path: "website0.png",
            caption: "HTML, CSS, JavaScript and SQL implementation of a dynamic website from IDM specifications"
          },          
          {
            path: "website1.png",
            caption: "Interactive dialogue model (IDM) for the dynamic website"
          },
          {
            path: "website3.png",
            caption: "A page with group links, structural links and transition links as per IDM"
          }
        ],
        githubLink: "https://github.com/etoscano/HYPE"
      },  
      {
        title: "Java Multiplayer Game",
        date: 2019,
        tech: ["Java", "Multiplayer", "Client/Server"],
        path: "java-game",
        summary: `<strong>Java implementation</strong> of Adrenaline, a <strong>board game</strong> by Czech Games`,
        desc: `<b>Java implementation</b> of Adrenaline, a <b>board game</b> by Czech Games. It's a multiplayer game and you can compete against other users. The <b>command line interface</b> is fully implemented while the <b>graphical user interface</b> is partially implemented. It uses <b>Swing</b>, a GUI widget toolkit for Java.`,
        imgs: [
          {
            path: "java0.png",
            caption: "Java implementation of Adrenaline, a board game by Czech Games"
          },   
          {
            path: "java2.jpg",
            caption: "Adrenaline's graphical user interface"
          }
        ],
        githubLink: "https://github.com/etoscano/ing-sw-2019-29"
      },         
      // {
      //   title: "Java Photo Browser",
      //   date: 2020,
      //   tech: ["Java", "Swing"],
      //   path: "java-photo-browser",
      //   summary: `Java swing implementation of a <strong>photo browser with drawing functionalities</strong>`,
      //   desc: `Java implementation of a component that displays a photo and that lets the user add annotations (text or
      //   pen) to images.
      //   <br>
      //   <br>
      //   The user can move annotations and edit them (e.g. change color, size and font). The application
      //   automatically saves all the annotations and restores them when the same image is opened again.`,
      //   imgs: [
      //     {
      //       path: "photo0.png",
      //       caption: "Java swing implementation of a photo browser with drawing functionalities"
      //     },
      //     {
      //       path: "photo1.png",
      //       caption: "My caption"
      //     },
      //     {
      //       path: "photo2.png",
      //       caption: "My caption1"
      //     }
      //   ],
      //   githubLink: "https://github.com/etoscano/AnnotationsOnImage"
      // },         
      {
        title: "Copy Cat: design of an innovative tool",
        date: 2021,
        tech: ["Figma", "Design Principles"],
        path: "copy-cat",
        summary: `<strong>Design of an innovative tool</strong> that enables fast copy-paste while preserving the relationships between objects`,
        desc: `        
        Prototype of Copy Cat, an innovative tool that enables fast copy-paste while preserving the relationships between objects.
        <br>
        <br>
        <b>Design Principles</b>: Reification | Polymorphism | Reuse | Substrates | Discovery | Appropriability | Expressivity
        `,
            imgs: [
              {
                path: "CopyCat0.png",
                caption: "Design of an innovative tool that enables fast copy-paste while preserving the relationships between objects"
              },              
              {
                path: "CopyCat1.png",
                caption: "First method: elements are distributed equally along the line"
              },
              {
                path: "CopyCat2.png",
                caption: "Second method: additional elements are added to the fixed-gap path"
              }
            ],
      },          
      {
        title: "Remote Meeting Bot",
        date: 2021,
        tech: ["Prototype", "NodeJS", "Design Thinking"],
        path: "remote-meeting-bot",
        summary: `<strong>Design and prototype</strong> of a bot aimed at promoting engagement in remote meetings`,
        desc: `For this project my team and I designed and prototyped a bot aimed at promoting engagement in remote meetings. 
        We used the <b>Design Thinking</b> technique for the process. The bot prototype was implemented using <b>NodeJS</b>.

        `,
        imgs: [
          {
            path: "Bot0.png",
            caption: "Design and prototype of a bot aimed at promoting engagement in remote meeting"
          },          
          {
            path: "Bot1.png",
            caption: "People in a remote meeting using this bot"
          },
          {
            path: "Bot2.png",
            caption: "A brainstorming session using Miro"
          },
          {
            path: "Bot4.jpg",
            caption: "The bot's functionalities"
          }
        ],
        youtubeLink: "https://www.youtube.com/watch?v=2Q-fjtav5Ps"
      },          
      {
        title: "User Experience Excellence",
        date: 2020,
        tech: ["User Experience", "Market Analysis"],
        path: "user-experience-excellence",
        summary: `<strong>Market analysis</strong> and <strong>UX optimization</strong> of a platform for price monitoring`,
        desc: `<strong>Market analysis</strong> for a price monitoring platform and proposal of various <strong>UX optimization</strong> for COGUARD's platform.

        <br>
        <p>Given the sensitive content of the report my team and I have composed, I will only show an overview.
        </p>`,
        imgs: [
          {
            path: "UXE0.png",
            caption: "Market analysis and UX optimization of a platform for price monitoring"
          },          
          {
            path: "UXE1.png",
            caption: "A mockup of the platform UX optimization and the index of the report"
          },
          {
            path: "UXE2.png",
            caption: "The timeline we followed and a mockup of the platform UX optimization"
          }
        ],
      },            
      {
        title: "Dash Python Application",
        date: 2020,
        tech: ["Dash", "Python", "Bootstrap"],
        path: "dash-python-application",
        summary: `Implementation of a <strong>Dash application</strong> for board game players annotations`,
        desc: `Design and implementation of<b> a platform to share board games</b>
        We wanted to to address the fact that casual and regular board game players need help finding games and people to play them with.
        <br>
        Our prototype was implemented using <b>Dash</b> (Python).`,
        imgs: [
          {
            path: "dash0.png",
            caption: "Implementation of a Dash application for board game players annotations"
          },          
          {
            path: "dash1.png",
            caption: "App interface"
          },
          {
            path: "dash2.png",
            caption: "Brainstorming session with the team"
          }
        ],
        githubLink: "https://github.com/mariacamilarg/board_games"
      },             
      {
        title: "Website Design and Implementation",
        date: 2020,
        tech: ["HTML/CSS", "Figma"],
        path: "website-design-and-implementation",
        summary: `HTML and CSS implementation of a website from <strong>Figma</strong> concept`,
        desc: `<b>Design and prototype</b> of Matty, an interactive yoga mat that can reduce stress in ASD children.
        In addition to the object's design, to present our work we have created a website.`,
        imgs: [
          {
            path: "matty0.png",
            caption: "HTML and CSS implementation of a website from Figma concept"
          },          
          {
            path: "matty1.png",
            caption: "Website design on Figma"
          },
          {
            path: "matty2.png",
            caption: "Website implementation with HTML/CSS"
          },
          {
            path: "matty3.png",
            caption: "Design of Matty, an interactive yoga mat"
          }
        ],
        githubLink: "https://github.com/etoscano/IDS"
      },     
    ]
  }
};

export default data;
