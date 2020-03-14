import React from 'react';

import Aries from '../svgIcons/aries.svg';
import Taurus from '../svgIcons/taurus.svg';
import Gemini from '../svgIcons/gemini.svg';
import Cancer from '../svgIcons/cancer.svg';
import Leo from '../svgIcons/leo.svg';
import Libra from '../svgIcons/libra.svg';
import Scorpio from '../svgIcons/scorpio.svg';
import Virgo from '../svgIcons/virgo.svg';
import Sagittarius from '../svgIcons/sagittarius.svg';
import Capricorn from '../svgIcons/capricorn.svg';
import Aquarius from '../svgIcons/aquarius.svg';
import Pisces from '../svgIcons/pisces.svg';

export const Logo = () => {
  return (
    <>
      <svg
        className='h-6 mr-2'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 48 48'>
        <path
          fill='#fff'
          d='M28.902,7.059C24.551,11.613,22,17.631,22,24s2.551,12.387,6.902,16.941 C20.01,40.215,13,32.894,13,24S20.01,7.785,28.902,7.059 M30.356,3C18.561,3,9,12.402,9,24c0,11.598,9.561,21,21.356,21 c3.079,0,5.999-0.654,8.644-1.807C31.516,39.928,26,32.57,26,24S31.516,8.072,39,4.807C36.355,3.654,33.435,3,30.356,3L30.356,3z'
        />
      </svg>
    </>
  );
};

export const Spinner = () => {
  return (
    <>
      <svg
        width='44'
        height='44'
        viewBox='0 0 44 44'
        xmlns='http://www.w3.org/2000/svg'
        fill='#e2e8f0'
        stroke='#718096'>
        <g fill='none' fillRule='evenodd' strokeWidth='2'>
          <circle cx='22' cy='22' r='1'>
            <animate
              attributeName='r'
              begin='0s'
              dur='1.8s'
              values='1; 20'
              calcMode='spline'
              keyTimes='0; 1'
              keySplines='0.165, 0.84, 0.44, 1'
              repeatCount='indefinite'
            />
            <animate
              attributeName='stroke-opacity'
              begin='0s'
              dur='1.8s'
              values='1; 0'
              calcMode='spline'
              keyTimes='0; 1'
              keySplines='0.3, 0.61, 0.355, 1'
              repeatCount='indefinite'
            />
          </circle>
          <circle cx='22' cy='22' r='1'>
            <animate
              attributeName='r'
              begin='-0.9s'
              dur='1.8s'
              values='1; 20'
              calcMode='spline'
              keyTimes='0; 1'
              keySplines='0.165, 0.84, 0.44, 1'
              repeatCount='indefinite'
            />
            <animate
              attributeName='stroke-opacity'
              begin='-0.9s'
              dur='1.8s'
              values='1; 0'
              calcMode='spline'
              keyTimes='0; 1'
              keySplines='0.3, 0.61, 0.355, 1'
              repeatCount='indefinite'
            />
          </circle>
        </g>
      </svg>
    </>
  );
};

export const Date = () => {
  return (
    <>
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z'
          fill='#4A5568'
        />
        <path
          d='M13 7H11V12.414L14.293 15.707L15.707 14.293L13 11.586V7Z'
          fill='#4A5568'
        />
      </svg>
    </>
  );
};

export const Sun = () => {
  return (
    <>
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M6.99299 12C6.99299 14.761 9.23899 17.007 12 17.007C14.761 17.007 17.007 14.761 17.007 12C17.007 9.239 14.761 6.993 12 6.993C9.23899 6.993 6.99299 9.239 6.99299 12ZM12 8.993C13.658 8.993 15.007 10.342 15.007 12C15.007 13.658 13.658 15.007 12 15.007C10.342 15.007 8.99299 13.658 8.99299 12C8.99299 10.342 10.342 8.993 12 8.993ZM10.998 19H12.998V22H10.998V19ZM10.998 2H12.998V5H10.998V2ZM1.99799 11H4.99799V13H1.99799V11ZM18.998 11H21.998V13H18.998V11Z'
          fill='#4A5568'
        />
        <path
          d='M4.21906 18.3634L6.33975 16.2414L7.75438 17.6552L5.63369 19.7772L4.21906 18.3634Z'
          fill='#4A5568'
        />
        <path
          d='M16.2402 6.34358L18.3622 4.22152L19.7765 5.63571L17.6545 7.75777L16.2402 6.34358Z'
          fill='#4A5568'
        />
        <path
          d='M6.34174 7.75858L4.22104 5.63663L5.63568 4.22283L7.75637 6.34478L6.34174 7.75858Z'
          fill='#4A5568'
        />
        <path
          d='M19.7758 18.3635L18.3616 19.7778L16.2395 17.6558L17.6537 16.2415L19.7758 18.3635Z'
          fill='#4A5568'
        />
      </svg>
    </>
  );
};

export const Target = () => {
  return (
    <>
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
          fill='#4A5568'
        />
        <path
          d='M13 4.069V2H11V4.069C7.389 4.522 4.522 7.389 4.069 11H2V13H4.069C4.522 16.611 7.388 19.478 11 19.931V22H13V19.931C16.611 19.478 19.478 16.612 19.931 13H22V11H19.931C19.478 7.389 16.611 4.522 13 4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z'
          fill='#4A5568'
        />
      </svg>
    </>
  );
};

export const Smile = () => {
  return (
    <>
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z'
          fill='#4A5568'
        />
        <path
          d='M14.829 14.828C14.644 15.012 14.445 15.177 14.237 15.317C14.02 15.463 13.792 15.587 13.557 15.686C13.313 15.789 13.061 15.867 12.808 15.919C12.277 16.027 11.721 16.027 11.192 15.919C10.938 15.867 10.686 15.789 10.442 15.686C10.208 15.587 9.979 15.463 9.763 15.317C9.554 15.176 9.355 15.012 9.17 14.828C8.989 14.647 8.824 14.448 8.682 14.236L7.024 15.355C7.239 15.673 7.486 15.972 7.758 16.244C8.031 16.517 8.33 16.764 8.645 16.975C8.968 17.193 9.311 17.379 9.665 17.528C10.03 17.682 10.409 17.8 10.793 17.878C11.189 17.959 11.596 18 12 18C12.404 18 12.811 17.959 13.208 17.878C13.591 17.8 13.97 17.682 14.335 17.528C14.689 17.379 15.031 17.193 15.356 16.975C15.669 16.763 15.968 16.517 16.242 16.244C16.514 15.973 16.762 15.673 16.976 15.355L15.318 14.236C15.175 14.448 15.01 14.647 14.829 14.828Z'
          fill='#4A5568'
        />
        <path
          d='M8.5 12C9.32843 12 10 11.3284 10 10.5C10 9.67157 9.32843 9 8.5 9C7.67157 9 7 9.67157 7 10.5C7 11.3284 7.67157 12 8.5 12Z'
          fill='#4A5568'
        />
        <path
          d='M15.493 11.986C16.3176 11.986 16.986 11.3176 16.986 10.493C16.986 9.66844 16.3176 9 15.493 9C14.6684 9 14 9.66844 14 10.493C14 11.3176 14.6684 11.986 15.493 11.986Z'
          fill='#4A5568'
        />
      </svg>
    </>
  );
};

export const Keyword = () => {
  return (
    <>
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M21.796 9.982C20.849 5.357 16.729 2 12 2C6.486 2 2 6.486 2 12C2 16.729 5.357 20.849 9.982 21.796C10.049 21.81 10.117 21.817 10.183 21.817C10.446 21.817 10.701 21.713 10.89 21.524L21.523 10.891C21.761 10.653 21.863 10.313 21.796 9.982ZM11 18C11 17.455 11.055 16.912 11.162 16.388C11.267 15.873 11.425 15.368 11.628 14.888C11.829 14.412 12.078 13.954 12.365 13.529C12.655 13.101 12.984 12.703 13.343 12.343C13.702 11.985 14.101 11.655 14.527 11.366C14.955 11.078 15.413 10.829 15.887 10.628C16.368 10.425 16.873 10.268 17.388 10.162C18.092 10.017 18.83 9.979 19.558 10.028L11.029 18.557C11.016 18.372 11 18.187 11 18ZM4 12C4 7.589 7.589 4 12 4C14.909 4 17.528 5.589 18.929 8.005C18.274 8.009 17.619 8.073 16.986 8.203C16.343 8.335 15.712 8.531 15.107 8.786C14.513 9.038 13.943 9.349 13.408 9.709C12.875 10.07 12.378 10.48 11.929 10.929C11.48 11.378 11.071 11.874 10.708 12.409C10.349 12.942 10.038 13.513 9.786 14.107C9.531 14.711 9.335 15.342 9.203 15.985C9.068 16.643 9 17.32 9 18C9 18.491 9.048 18.979 9.119 19.461C6.089 18.288 4 15.336 4 12Z'
          fill='#4A5568'
        />
      </svg>
    </>
  );
};

export const LeftArrouw = () => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'>
        <path
          fill='#fff'
          d='M12.707 17.293L8.414 13 18 13 18 11 8.414 11 12.707 6.707 11.293 5.293 4.586 12 11.293 18.707z'
        />
      </svg>
    </>
  );
};

export {
  Aries,
  Taurus,
  Gemini,
  Cancer,
  Leo,
  Libra,
  Scorpio,
  Virgo,
  Sagittarius,
  Capricorn,
  Aquarius,
  Pisces
};