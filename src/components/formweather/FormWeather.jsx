import React from "react";

const FormWeather = ({ onChange, onSubmit }) => {

  return (
    <form onSubmit={onSubmit} className="absolute w-3/4  pl-8 rounded-2xl font-bold flex items-center justify-center gap-2">
      <input
        onChange={onChange}
        className={`outline-none h-12 w-max p-4 rounded-2xl font-bold transition-all duration-1000 ease-out`}
        type="text"
        name="text"
        placeholder="Introduce your city"
      />
      <input className={`p-2 text-lg bg-red-500 rounded-xl font-bold text-white hover:bg-white cursor-pointer hover:text-red-900`} type="submit" value={'Search'}/>
    </form>
  );
};

export default FormWeather;
