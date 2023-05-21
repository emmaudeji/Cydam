import TextCard from '../Cards/TextCard'
import GridNotes from '../Cards/GridNotes'


const AboutServices = ({heading, component, note1, note2, note3, img1, img2}) => {
  return (

          <div className="section-padding2 capitalize pt-52 pb-40 w-full bg-blue-50">
              <div className="grid h-full md:grid-cols-2 gap-20 md:gap-8 xl:gap-36 items-center">
                  <div className="h-full">
                    <TextCard heading={heading}
                      component={component} 
                      />
                  </div>
      
                  <div className='h-full'>
                      <GridNotes note1={note1} note2={note2} note3={note3} img1={img1} img2={img2}/>
                  </div>
              </div>
          </div>
  )
}

export default AboutServices
