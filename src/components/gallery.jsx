export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Projects</h2>
          <p>
            some of my past and current work
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg crop'>
                  {' '}
                  <a
                    href='https://www.arculus.de/product/#arculee'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className='hover-text'>
                      <h4>arculus GmbH</h4>
                    </div>
                    <img
                      src='img/testimonials/arculus.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>

            <div className='col-sm-6 col-md-8 col-lg-8'>
              <div className='section-title'>
                <h3>Hardware Abstraction Layer for autonomous mobile robots</h3>
              </div>
              <p className='project-text'>
              Design, development, maintenance and testing of an interface for
              all hardware components of several versions of the robots, along
              with the software modules in C/C++ to control the devices.<br/>
              Some of it runs currently on client sites, the rest will be there
              soon. All modules go through extensive software and hardware
              testing to ensure robustness.
              </p>
            </div>
          </div>

          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg crop'>
                  {' '}
                  <a
                    href='https://www.arculus.de/product/#arculee'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className='hover-text'>
                      <h4>arculus GmbH</h4>
                    </div>
                    <img
                      src='img/testimonials/arculus.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>

            <div className='col-sm-6 col-md-8 col-lg-8'>
              <div className='section-title'>
                <h3>Charging Station for autonomous mobile robots</h3>
              </div>
              <p className='project-text'>
              Development of application in Python for charging station with user
              interfaced based on Kivy Framework. Reads data from sensors,
              controls switches and power supply to ensure safe charge of robot
              and the safety of users.<br/>
              Design and development of a Printed Circuit Board for power line
              communication to robot over Gigabit Ethernet and software
              adaptations on the charging station to support the feature.
              </p>
            </div>
          </div>

          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg crop'>
                  {' '}
                  <img
                    src='img/testimonials/moneys.png'
                    className='img-responsive'
                    alt='Project Title'
                  />{' '}
                    <div className='hover-text'>
                      <h4>Trading group</h4>
                    </div>{' '}
                </div>
              </div>
            </div>

            <div className='col-sm-6 col-md-8 col-lg-8'>
              <div className='section-title'>
                <h3>Trading algorithms</h3>
              </div>
              <p className='project-text'>
              Design and development along with client as a freelancer of an
              application for trading bots in Python for stock market automated
              transactions.<br/>
              The application was developed in Python using Qt. Several
              algorithms are implemented and fully functional.
              </p>
            </div>
          </div>

          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='https://www.thi.de/en/mechanical-engineering/laboratories/mechatronics-laboratory'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className='hover-text'>
                      <h4>University of Applied Sciences of Ingolstadt</h4>
                    </div>
                    <img
                      src='img/testimonials/escooter.png'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>

            <div className='col-sm-6 col-md-8 col-lg-8'>
              <div className='section-title'>
                <h3>E-scooter with telemetry function</h3>
              </div>
              <p className='project-text'>
              Design and development of E-scooter firmware (Arduino), hardware
              and of a Python application for displaying telemetry data from the vehicle,
              including battery state of charge, velocity and status, along
              with logging of given values.
              </p>
            </div>
          </div>

          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='https://inep.ufsc.br/'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className='hover-text'>
                      <h4>Federal University of Santa Catarina</h4>
                    </div>
                    <img
                      src='img/testimonials/pfc.png'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>

            <div className='col-sm-6 col-md-8 col-lg-8'>
              <div className='section-title'>
                <h3>Controller generator for PFC Boost Power Converters</h3>
              </div>
              <p className='project-text'>
              Design and development of a MATLAB application for generation of
              the controller parameters for PFC Boost Power Converters and
              test of results.
              </p>
            </div>
          </div>

          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <img
                    src='img/testimonials/labview.png'
                    className='img-responsive'
                    alt='Project Title'
                  />{' '}
                    <div className='hover-text'>
                      <h4>University of Applied Sciences of Ingolstadt</h4>
                    </div>{' '}
                </div>
              </div>
            </div>

            <div className='col-sm-6 col-md-8 col-lg-8'>
              <div className='section-title'>
                <h3>Control panel for Thermodynamic experiments</h3>
              </div>
              <p className='project-text'>
              LabVIEW application for controlling, monitoring and logging status
              of thermodynamic experiments for academic paper.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
