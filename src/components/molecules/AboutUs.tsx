import React from 'react';
import { Button } from '../atoms/Button';

export const AboutUs: React.FC = () => {
    return (
        <div className='bg-blue-500 border-[1px] w-full mb-5 md:mb-[30px] border-blue-100 rounded-[4px] relative'>
            <div className='absolute bg-linear-to-t to-transparent from-blue-500 h-full w-full t-0 l-0 hidden md:block' />
            <div className='pl-[14px] pr-[17px] py-[14px]'>
                <h1 className='text-lg pb-3 '>******* Casino</h1>
                <p className='text-md !font-normal leading-5 hidden md:block'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Porta elementum a enim
                    euismod quam justo lectus. Dis parturient montes nascetur ridiculus mus donec
                    rhoncus. Vitae pellentesque sem placerat in id cursus mi. Velit aliquam
                    imperdiet mollis nullam volutpat porttitor ullamcorper. Mattis scelerisque
                    maximus eget fermentum odio phasellus non. Tempus leo eu aenean sed diam urna
                    tempor. Turpis fames primis vulputate ornare sagittis vehicula praesent. Mauris
                    pharetra vestibulum fusce dictum risus blandit quis. Nec metus bibendum egestas
                    iaculis massa nisl malesuada. Proin libero feugiat tristique accumsan maecenas
                    potenti ultricies. Consequat magna ante condimentum neque at luctus nibh. Ut
                    hendrerit semper vel class aptent taciti sociosqu. Suscipit auctor curabitur
                    facilisi cubilia curae hac habitasse. Interdum tortor ligula congue sollicitudin
                    erat viverra ac. Conubia nostra inceptos himenaeos orci varius natoque
                    penatibus. Dolor sit amet consectetur adipiscing elit quisque faucibus. Aenim
                    euismod quam justo lectus commodo augue. Montes nascetur ridiculus mus donec
                    rhoncus eros lobortis. Sem placerat in id cursus mi pretium tellus. Imperdiet
                    mollis nullam volutpat porttitor ullamcorper rutrum gravida. Maximus eget
                    fermentum odio phasellus non purus est. Eu aenean sed diam urna tempor pulvinar
                    vivamus. Primis vulputate ornare sagittis vehicula praesent dui felis.
                    Vestibulum fusce dictum risus blandit quis suspendisse
                </p>
                <p>
                    Welcome to *****, your new destination for the ultimate online social casino
                    experience. Whether you're here to explore exclusive ***** Originals or enjoy
                    your favorite games from the world’s top iGaming providers, **** offers a
                    polished, fair, and exciting platform that keeps players coming back.
                </p>
                <div className='flex justify-center w-full relative z-10'>
                    <Button children='READ MORE' className='w-full md:w-[323px] mt-5' />
                </div>
            </div>
        </div>
    );
};
