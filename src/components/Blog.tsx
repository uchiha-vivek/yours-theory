
const stripHTML = (html:string):string => {
          const div = document.createElement('div')
          div.innerHTML=html
          return div.textContent || div.innerText || ''
}

interface BlogProps{
    title:string,
    content:string
}

const Blog : React.FC<BlogProps>  = ({title,content}) =>  {
     const strippedContent = stripHTML(content)
    return (
        <>
        <div className="p-4 border border-gray-300 rounded mb-4" >
                 <h1 className="font-bold text-lg mb-2 " > {title} </h1>
                 <p className="text-gray-700 whitespace-pre-wrap " > {strippedContent} </p>
           
        </div>
        
        </>
    )
}
export default Blog