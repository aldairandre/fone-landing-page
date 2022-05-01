import './App.css'

export default function MainContent(){
    return(
        <main>
            <div className='conteiner-img animate__animated animate__fadeInLeft animate__delay-1s'>
                <img src='/assets/fone.png' alt='fone' className='fone-img'/>
            </div>
            <div className='container-info conteiner-img animate__animated animate__fadeInRight animate__delay-1s'>
                <h1>
                    HYPER X ON-EAR
                </h1>
                <p className='info-title'>
                Wireless over-ear headphones
                </p>
                <div className='container-stars'>
                    <div className='stars'>
                        <ul>
                            <li><i className="bi bi-star-fill"></i></li>
                            <li><i className="bi bi-star-fill"></i></li>
                            <li><i className="bi bi-star-fill"></i></li>
                            <li><i className="bi bi-star"></i></li>
                            <li><p>4.2&nbsp;&nbsp;(335)</p></li>
                        </ul>
                    </div>
                </div>
                <div className='info-1'>
                    <p className='info-title'>Driver unit</p>
                    <p className='info-txt'>
                        70 mm, dome type (CCAW Voice Col)
                    </p>
                </div>
                <div className='info-2'>
                    <p className='info-title'>Frequency Response</p>
                    <p className='info-txt'>
                        4 Hz + 100.000 Hz
                    </p>
                </div>
                <div className='buy'>
                    <p className='price'>$89.99</p>
                    <a className='add-cart'>
                        ADD TO CARD
                    </a>
                </div> 
            </div>
        </main>
    )
}