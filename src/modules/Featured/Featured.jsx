
import { Splide, SplideSlide } from '@splidejs/react-splide';


function Featured() {


    return (
        <Splide aria-label="My Favorite Images" className='home__featured'
        options={ {
            direction: 'ttb',
            height   : '240px',
            wheel    : true,
          } }>
            
            <SplideSlide>
                <img src="project_3.png" alt="Image 3"/>
            </SplideSlide>
            <SplideSlide>
                <img src="project_0.png" alt="Image 1"/>
            </SplideSlide>
            <SplideSlide>
                <img src="project_1.png" alt="Image 2"/>
            </SplideSlide>
            <SplideSlide>
                <img src="project_2.png" alt="Image 2"/>
            </SplideSlide>

        </Splide>

    );
    }

    
export default Featured;