
import Image from 'next/image';
import  { useEffect, useState } from 'react';
import useDrivePicker from 'react-google-drive-picker'


const Googledrivepicker = () => {

  const [openPicker, data, authResponse] = useDrivePicker();  
  const [previews, setPreviews] = useState([])

  // const customViewsArray = [new google.picker.DocsView()]; // custom view
// 
  const handleOpenPicker = () => {
    openPicker({
      clientId: '211910271227-7qgdp0r6jt536ch35dtu28kavnfi9b8q.apps.googleusercontent.com',
      developerKey: "AIzaSyCXf6xs7xcEa49CkwhCXnuCsy1009Skktk",
      viewId: "DOCS",
      token: 'ya29.a0AfB_byCevpjk34Mm_ZfrJnK2JBgL3DF3szYTiJnCSB6e9tnWitVag7QYmV4MuD5UHjs96usBrM9QvbLmS4-TKGXl_dvXQLUlH7DAXiTlGq7yOgzAXjhdEHmtsCt1h4rzdBcogh59nojQcCIFTuw2VnaHWzxmCeOmIS_caCgYKAYMSARMSFQGOcNnCdBAkk6Nq-gGGp4aym1H2qQ0171', // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button')
        }
        console.log('response data',data)
        setPreviews(data.docs)
      },
    })
  }

useEffect(() => {
  if(data) {
    data?.docs?.map((i)=> console.log('data==', i))
  }

}, [data])

  
  return (
    <div className='space-y-4 w-full'>
        <button className='bg-blue-700 px-6 py-3 rounded text-white' onClick={() => handleOpenPicker()}>
            Open Picker
        </button>
        <p>File Previews</p>
        <div className="flex py-2 border-y gap-4">
          {
            [1,2]?.map((e, idx)=>(
              <div key={idx} className="w-40 h-40 flex-shrink-0 overflow-hidden rounded-md">
                <Image width={200} height={200} src={'https://drive.google.com/file/d/1QDI7Dh4WqNQWocXwEkFcnqJHHMH543Jn/view'} alt="file" className='w-full h-full object-cover'/>

              </div>

            ))
           
          }

        </div>
    </div>
  );
}

export default Googledrivepicker