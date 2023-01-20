marked.setOptions({
    breaks: true
});

const renderer = new marked.Renderer();

function App(){

    const [text, setText] = React.useState(("## Hey, Welcome to my React Markdown Previewer! \n## I'm a web developer, nice to meet you... \n### A bit about me: \n `<div id=\"intro\"></div>`\n```\n// Here's a brief JavaScript intro:\n\nconst intro = document.getElementById('intro').innerHTML;\nconst firstName = 'Aaron';\nconst lastName = 'Venema';\nconst skills = ['HTML', 'CSS', 'JavaScript', 'React', 'SQL', 'Java', 'Python'];\nconst hobbies = ['codewars', 'cycling', 'language learning', 'podcasts'];\nconst attributes = ['hard work ethic', 'creativity', 'problem solving']; \n\nfunction introduction(firstName, lastName, skills, hobbies, attributes) {\n   return `My name is ${firstName} ${lastName}, some of my hobbies include ${hobbies.split(', ')} and \n   I have fundamental knowledge in ${skills.split(', ')}. I believe given my existing skillsets and\n   my ${attributes.split(', ')}, I can be a valuable member of your team.`;\n};\n\n\intro = introduction(firstName, lastName, skills, hobbies, attributes); \n\n```\nFeel free to call me **1-616-349-9422**\nSend an _e-mail:_ aaron1venema@gmail.com\n~Or even send some snail mail!!!~\n\nOr... visit my [website](https://aaronvenema.netlify.app/), [GitHub](https://github.com/anonymous-a-rod), or [LinkedIn](https://www.linkedin.com/in/aaron-venema-a4797354/).\n\n> “Those who can imagine anything, can create the impossible.”\n   -Alan Turing"));

    return(
        <div className="text-center px-4">
            <h1 className="p-4">Markdown Previewer</h1>
            <textarea value={text} onChange={(e) => setText(e.target.value)} name="text" rows="10" className="textarea"></textarea>
            <h3 className="mt-3">Output</h3>
            <Preview markdown={text}/>
        </div>
    );
}

function Preview({markdown}){
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: marked(markdown, {renderer: renderer}),
            }}
        id="preview"
        >

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));






