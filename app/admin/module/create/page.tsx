import LecturerLayout from "@/components/Layouts/LecturerLayout";
import ModuleForm from "./client";

const CreateModule = () => {
  return (
    <LecturerLayout>
      <div className=" pt-[65px] mx-auto max-w-[856px] px-3">
        <h4 className="text-2xl font-semibold text-[#4A4A4A] text-center mb-12">
          Create New Module
        </h4>
        <ModuleForm />
      </div>
      <div className=" h-16 border-t" />
    </LecturerLayout>
  );
};

export default CreateModule;
