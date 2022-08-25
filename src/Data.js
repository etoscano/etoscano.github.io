
const data = {
  projects: {
    list: [
      {
        title: "Conversational Interfaces for Smart Home",
        date: 2021,
        tech: ["Robot Operation System", "Amazon Web Services", "Linux"],
        path: "conversational-interface",
        summary: ``,
        desc: ``,
        imgs: ["project_2.png", "project_1.png"],
      },     
      {
        title: "Smart Space Games",
        date: 2020,
        tech: ["Unity", "Kinect", "Arduino"],
        path: "smart-space-games",
        summary: `Development of <strong>smart space games</strong> in Unity using projectors, a Kinect and Arduino `,
        desc: `<strong>GEA++</strong> is a Smart Space application for children with Neurodevelopmental Disorders. It focuses on nutrition education. The three activities proposed are based on real laboratory activities that children do in a local specialized center. An image shows the configuration of the the smart room environment. The images above show some components used to build the pyramid smart object and the smart room at i3lab, where we tested the games. The interaction for the first two games is based on hand tracking while the third game relies on the pyramid smart object. My team and I have created a pyramid smart object for one of the games. Inside the smart room there were the frontal and the floor projections.`,
        imgs: ["project_3.png", "project_1.png"],
      },     
      {
        title: "Mixed Reality Educational Tool",
        date: 2021,
        tech: ["Unity", "Vuforia", "Firebase"],
        summary: `Unity implementation of a <strong>Mixed Reality</strong> educational tool for learning geography `,
        path: "mixed-reality",
        desc: `This project's application ranges from being a tool for learning geography to being an engaging way for kids to learn about customs and traditions of other countries.
        <br>
        The user uses their smartphone to interact with physical objects.
        First the user scans the interactive city that they want to learn about, on the world map.
        Then, the city is loaded on a cube.
        The user uses a handmade paper cube as medium through which interact with the information available about the city.
        <br/><b>Each side of the cube shows a different aspect the user may want to learn about, such as monuments, state anthems and flags.</b>
        The online database allows other users to "see" what is loaded on a certain cube, making a <b>shared learning experience</b> possible.
        Also, placing two cubes close to each other allows the user to learn about the differences between the two countries.
        <br>
        <br> `,
        imgs: ["project_1.png", "project_0.png"],
      },      
      {
        title: "Augmented Reality for a card game",
        date: 2020,
        tech: ["Unity", "Vuforia", "Augmented Reality", "Android"],
        path: "augmented-reality",
        summary: `<strong>Augmented Reality</strong> application to enhance the experience of trading Magic: The Gathering cards`,
        desc: `Magic: The Rendering is an AR application tool for players of the collectible card game Magic: The
        Gathering to enhance their user experience in different aspects related to trading.
        <br>
        <br>

        App structure:
        <ul>
            <li><b>Home</b>
                <ul>
                    <li><b>Scan for information</b></li>
                    <ul>
                        <li><b>Card info shows</b></li>
                        <ul>
                            <li>Price</li>
                            <li>Type</li>
                            <li>Set</li>
                        </ul>
                        <li><b>Language translation</b></li>
                        When activated, the app will show an overlay a translated version card on top of the
                        original one
                    </ul>
                    <br>
                    <li><b>Manage user collection</b>
                        <br>
                        List all the cards the user has in their collection as well as how many copies they have
                        <ul>
                            <li><b>Add to collection</b></li>
                            This functionality lets the user scan cards to add them to their collection showing
                            how many copies of each card they have.
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>`,
        imgs: ["project_3.png", "project_1.png"],
      }, 
      {
        title: "Dynamic Website",
        date: 2020,
        tech: ["HTML/CSS", "JavaScript", "SQL"],
        path: "dynamic-website",
        summary: `<strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> and <strong>SQL</strong> implementation of a dynamic website from IDM specifications`,
        desc: `In this project I've created a dynamic website. IDM submodels have been used for Content, Navigation and Presentation design and interaction scenarios have been created to describe the flow of usage. After the website design I have implemented it using HTML, CSS, JavaScript and SQL.`,
        imgs: ["project_0.png", "project_1.png"],
        githubLink: "https://github.com/etoscano/HYPE"
      },  
      {
        title: "Java Multiplayer Game",
        date: 2019,
        tech: ["Java", "Multiplayer", "Client/Server"],
        path: "java-game",
        summary: `<strong>Java implementation</strong> of Adrenaline, a <strong>board game</strong> by Czech Games`,
        desc: `This is the Java implementation of Adrenaline, a board game by Czech Games. It's a multiplayer game and you can compete against other users. The command line interface is fully implemented while the <b>graphical user interface</b> that you can see <b>below</b> is only partially implemented.`,
        imgs: ["project_0.png", "project_1.png"],
        githubLink: "https://github.com/etoscano/ing-sw-2019-29"
      },         
      {
        title: "Java Photo Browser",
        date: 2020,
        tech: ["Java", "Swing"],
        path: "java-photo-browser",
        summary: `Java swing implementation of a <strong>photo browser with drawing functionalities</strong>`,
        desc: `Java implementation of a component that displays a photo and that lets the user add annotations (text or
        pen) to images.
        <br>
        <br>
        The user can move annotations and edit them (e.g. change color, size and font). The application
        automatically saves all the annotations and restores them when the same image is opened again.`,
        imgs: ["project_0.png", "project_1.png"],
        githubLink: "https://github.com/etoscano/AnnotationsOnImage"
      },         
      {
        title: "Copy Cat: design of an innovative tool",
        date: 2021,
        tech: ["Figma", "Design Principles"],
        path: "copy-cat",
        summary: `<strong>Design of an innovative tool</strong> that enables fast copy-paste while preserving the relationships between objects`,
        desc: `<h6>Design Principles:</h6>
        <ul>
            <li>Reification</li>
            <li>Polymorphism</li>
            <li>Reuse</li>
            <li>Substrates</li>
            <li>Discovery</li>
            <li>Appropriability</li>
            <li>Expressivity</li>
        </ul>
        <br>
        <br>
        <h5>Description of the project</h5>
        Here is the first prototype for Copy Cat, an innovative tool that enables fast copy-paste while
        preserving the relationships between objects.
        <br>
        <b class="orange">We have used some design principles, such as reification and reuse, to improve the
            design process.</b>`,
        imgs: ["project_0.png", "project_1.png"]
      },          
      {
        title: "Remote Meeting Bot",
        date: 2021,
        tech: ["Prototype", "NodeJS", "Design Thinking"],
        path: "remote-meeting-bot",
        summary: `<strong>Design and prototype</strong> of a bot aimed at promoting engagement in remote meetings`,
        desc: `Youtube: <a href="https://youtu.be/2Q-fjtav5Ps"><b class="orange"> Video scenario</b></a>
        <br>
        <br>
        <h5>Description of the project</h5>
        For this project my team and I designed and prototyped a bot aimed at promoting engagement in remote meetings. We used the Design Thinking technique for the process.
                        If you are interest, you can read the documentation <a href="/documents/EleonoraToscano-RemoteMeetingBot.pdf"><b class="orange">here</b></a>.`,
        imgs: ["project_0.png", "project_1.png"],
        githubLink: "https://github.com/bruhnth17/zoom-bot-prototype"
      },          
      {
        title: "User Experience Excellence",
        date: 2020,
        tech: ["User Experience", "Market Analysis"],
        path: "user-experience-excellence",
        summary: `<strong>Market analysis</strong> and <strong>UX optimization</strong> of a platform for price monitoring`,
        desc: `<h5>Description of the project</h5>
        Market analysis for a price monitoring platform and proposal of various UX optimizations for COGUARD's platform.

        <br>
        <br>
        <p>Given the sensitive content of the report me and my team have composed, I will only show the topics of said report and the timeline that we have followed.
        </p>`,
        imgs: ["project_0.png", "project_1.png"]
      },            
      {
        title: "Dash Python Application",
        date: 2020,
        tech: ["Dash", "Python", "Bootstrap"],
        path: "dash-python-application",
        summary: `Implementation of a <strong>Dash application</strong> for board game players annotations`,
        desc: `<h5>Description of the project</h5>
        This is part of a design project in which we wanted to to address the fact that casual and regular board game players need help finding games and people to play them with.
        <br>
        Part of our solution was the design and implementation of<b> a platform to share board games</b>

        <br>
        <br>
        <b>Below there are the images of our prototype, implemented using Dash (Python).</b>`,
        imgs: ["project_0.png", "project_1.png"],
        githubLink: "https://github.com/mariacamilarg/board_games"
      },             
      {
        title: "Website design and implementation",
        date: 2020,
        tech: ["HTML/CSS", "Figma"],
        path: "website-design-and-implementation",
        summary: `HTML and CSS implementation of a website from <strong>Figma</strong> concept`,
        desc: `<p>For the course Interaction Design Studio 2019-2020 at Politecnico di Milano, our team had to develop an
        innovative idea. We have designed and prototyped Matty, an interactive yoga mat that can reduce stress
        in ASD children.
        To present our work we have created the website that you can see.</p>`,
        imgs: ["project_0.png", "project_1.png"],
        githubLink: "https://github.com/etoscano/IDS"
      },     
    ]
  }
};

export default data;
