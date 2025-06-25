import * as I from "@/models/experienceItem";

export const ExperienceItem = ({
  description,
  enterprise,
  role,
  yearOfEntry,
  yearOut,
}: I.ExperienceItem) => {
  return (
    <li className="flex flex-col justify-between border-b border-gray-800 pt-4 pb-4 last:border-b-0 xl:flex-row">
      <div className="align-center flex flex-col justify-center gap-2">
        <h4 className="text-sm font-semibold text-gray-500">
          {enterprise} <span className="px-2 font-light text-gray-700">|</span>{" "}
          {yearOfEntry} - {yearOut}
        </h4>
        <p className="text-base text-gray-100">{role}</p>
      </div>
      <p className="mt-2 line-clamp-4 text-sm text-gray-400 xl:mt-0 xl:line-clamp-3 xl:max-w-2xl xl:pl-4">
        {description}
      </p>
    </li>
  );
};
