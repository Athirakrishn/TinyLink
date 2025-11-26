import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import { useState } from 'react'
import { faChartColumn, faChevronDown, faChevronUp, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { createUrlAPI, deleteUrlAPI, getAllLinksAPI } from './services/allAPI'
function DashBoard() {
  const [openIndex, setOpenIndex] = useState()
  const navigate = useNavigate()
  const [url, setUrl] = useState({ originalUrl: "" });
  // const {totalClicks,lastClicked,createdAt}=urlData
  const [shortUrl, setShortUrl] = useState("");
  const [links, setLinks] = useState([]);


  const createUrl = async () => {
    const { originalUrl } = url;
    // Validate input
    if (!originalUrl || originalUrl.trim() === "") {
      alert("Please enter a valid URL");
      return;
    }
    try {
      const response = await createUrlAPI({ originalUrl });
      if (response.status == 409) {
        const short = response.data.data.shortCode;
        setShortUrl(short);
        alert("Short URL already exists: " + short);
      }
      else if (response.status == 200) {
        const short = response.data.data.shortCode;
        setShortUrl(short);
        alert("Short URL created: " + short);
      }
      else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  //fetch links ---
  const fetchLinks = async () => {
    try {
      const response = await getAllLinksAPI();
      if (response.status == 200) {
        setLinks(response.data);
      }
    } catch (err) {
      console.error("Error fetching links:", err);
    }
  };
//page load
  useEffect(() => {
    fetchLinks(); 
  }, []);


//delete links
const deleteUrl = async (code) => {
  try {
    const result = await deleteUrlAPI(code);
    if (result.status == 200) {
      alert("Deleted Successfully");
      fetchLinks()
    } else {
      console.log(result);
    }
  } catch (err) {
    console.log(err);
  }
};




  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // faq questions and answers
  const faqs = [
    {
      question: "What is a URL shortener, and how does it work?",
      answer:
        "A URL shortener, or link shortener, transforms long web addresses into shorter, more user-friendly links. These condensed links are easier to share, remember, and manage. When someone clicks a shortened link, they are redirected to the longer web address.",
    },
    {
      question: "Is the Bitly URL shortener free?",
      answer:
        "Yes! We offer a Free plan that lets you create up to 5 short links and 3 custom back-halves every month. Plus, your links get unlimited clicks and never expire, so your audience can always reach your content.",
    },
    {
      question: "Why should I make my URLs shorter?",
      answer:
        "Long web addresses packed with characters and symbols are hard to share and even harder to remember. Short URLs simplify things. They’re easy to recall, look cleaner, and make sharing a breeze—whether it’s in a tweet, on a flyer, or during a presentation.",
    },
  ];
  return (
    <>
      <Header />


      <div className='m-0 bg-gray-100'>
        <div className=" justify-center items-center mt-10 ">

          {/*----------------------------- first section - hero section------------ */}
          <section className="m-0 text-slate-700 py-24 px-6 flex flex-col items-center text-center bg-gray-200" >
            {/* bg-slate-900 */}

            <p className="text-pink-900  font-semibold mb-3">
              <b> TINY LINKS</b>
            </p>


            <h1 className="hero text-4xl md:text-5xl font-extrabold leading-tight mb-4 ">
              Create high-performing links with
              <br /> our advanced URL shortener.
            </h1>


            <p className="text-slate-500 max-w-2xl text-lg mb-8">
              Build quick and meaningful connections with your audience using clean, reliable, and trackable links powered by the TINY-LINK Connections Platform.
            </p>

          </section>



          <section className='bg-white rounded-xl m-10 p-5'>
            <p className='text-2xl bold flex items-center'><FontAwesomeIcon icon={faPlus} className=' m-5 text-indigo-700 ' />
              Create New Link  </p>

            <div className="container mx-10 mb-10">
              <p >Destination URL - Paste URL here...</p>
              <div className="flex rounded-xl overflow-hidden w-full max-w-2xl">
                <input value={url.originalUrl} onChange={(e) => setUrl({ originalUrl: e.target.value })}
                  type="text" placeholder="https://example.com/thelonglinkyouwanttoshort/path"
                  className=" bg-gray-500 text-white flex-1 px-4 py-3 text-gray-700 focus:outline-none required"
                />
                <button onClick={createUrl} className="bg-indigo-900 text-white px-6 py-3 font-semibold hover:bg-indigo-100 hover:text-black">
                  Shorten link
                </button>
              </div>
            </div>

          </section>




          <div className="container mx-10 mb-10 ">
            <div className=" flex  justify-between items-center bg-white rounded-xl w-full p-5 shadow">


              <p className="text-xl font-bold">Your links....</p>

              <input
                type="text"
                placeholder="Search Links"
                className="bg-gray-700 text-white placeholder-gray-300 rounded-lg px-4 py-2 focus:outline-none w-80"
              />


            </div>

            <div className='bg-white rounded-xl w-full rounded-m'>
              <div className="w-full overflow-x-auto">
                <div className="overflow-x-auto">
                {links?.length==0?
                <p>NO LINKS FOUND</p>
                :
                  <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left px-4 py-2 font-semibold text-gray-700">Short Link</th>
                        <th className="text-left px-4 py-2 font-semibold text-gray-700">Original URL</th>
                        <th className="text-left px-4 py-2 font-semibold text-gray-700">Total clicks</th>
                        <th className="text-left px-4 py-2 font-semibold text-gray-700">Created At</th>

                        <th className="text-left px-4 py-2 font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                   { links.map((item,index)=>(
                    <tr key={index} className="border-t">
                       <td className="px-4 py-2 text-blue-600">
  <a 
    href={`${item.originalUrl}`} 
    target="_blank" 
    className="text-blue-600 underline"
  >
    {item.shortCode}
  </a>
</td>

                  
                        <td className="px-4 py-2 text-gray-700 max-w-[120px] truncate whitespace-nowrap overflow-hidden">
                          {item.originalUrl}
                        </td>        <td className="px-4 py-2 text-blue-600">{item.totalClicks}</td>
                        <td className="px-4 py-2 text-gray-700">{item.createdAt}</td>

                        <td className="px-4 py-2 flex gap-4">
                          <FontAwesomeIcon icon={faChartColumn} onClick={() => navigate(`/code/${item.shortCode}`)}
 className="text-green-500 cursor-pointer hover:text-green-700" />
                          <FontAwesomeIcon icon={faTrash} onClick={()=>deleteUrl(item.shortCode)} className="text-red-500 cursor-pointer hover:text-red-700" />
                        </td>
                      </tr>))}
                      
                    </tbody>
                    
                  </table>
                     
                  }
                </div>

              </div>

           
            </div>


            <div>

            </div>

          </div>





          {/*----------------------- Frequently asked questions (FAQs) ---------------------*/}
          <section className='bg-slate-900'>
            <div className="  md:mx-40 mx-10 md:h-100 ">
              <h1 className=" text-3xl font-bold text-gray-900 mb-2">FAQs for TINYLINK</h1>
              <div className="max-w-6xl sm:mx-auto my-10 bg-white border border-gray-500 rounded-2xl shadow-sm p-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-500 last:border-none">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-800 focus:outline-none"
                    >
                      {faq.question}

                      <FontAwesomeIcon
                        icon={openIndex === index ? faChevronUp : faChevronDown}
                        className="text-gray-500"
                      />
                    </button>

                    {openIndex === index && (
                      <p className="text-gray-600 pb-4 px-1 transition-all duration-200">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>

      </div>

      <Footer />
    </>

  )
}

export default DashBoard