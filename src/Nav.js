import React,{useState,useEffect} from 'react'

function Nav() {
       const [show, handleShow] = useState(false);

   useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }else {
            handleShow(false);
        }
      });
      return () => {
        window.removeEventListener('scroll');
      }; 
   },[]);

//    function handleShow() {

//    }

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <img 
            className='nav__logo'
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt="Netflix Logo"
        />

        <img 
            className='nav__avatar'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_A3ojUJsr1ELD2GHmhyo5NLlXquj_Oz2NvvmFoo2xMja_KcUslA6C3mjfut1yQAwkyw&usqp=CAU"
            alt="Netflix Logo"
        />
    </div>
  )
}

export default Nav