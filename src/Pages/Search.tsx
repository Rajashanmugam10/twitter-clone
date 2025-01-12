import { Usercard } from "../Components/Usercard";

export const Search: React.FC = () => {
  return (
    <div className="col-span-3  hidden lg:flex gap-4 ml-2 flex-col">
      <input
        type="text"
        placeholder="search"
        className="input w-[90%] mt-8 mx-2 mb-4"
      />
      <Usercard
        name="rajashanmugam"
        image="https://cdn.bsky.app/img/avatar_thumbnail/plain/did:plc:jrdunuv53kpblscdnseuzmca/bafkreicc3dwnmsidfpn6ryy7mwn7xg44x5jdaqzorjjeacag5isgihzddi@jpeg"
      />
      <Usercard
        name="rajashanmugam"
        image="https://cdn.bsky.app/img/avatar_thumbnail/plain/did:plc:jrdunuv53kpblscdnseuzmca/bafkreicc3dwnmsidfpn6ryy7mwn7xg44x5jdaqzorjjeacag5isgihzddi@jpeg"
      />{" "}
      <Usercard
        name="rajashanmugam"
        image="https://cdn.bsky.app/img/avatar_thumbnail/plain/did:plc:jrdunuv53kpblscdnseuzmca/bafkreicc3dwnmsidfpn6ryy7mwn7xg44x5jdaqzorjjeacag5isgihzddi@jpeg"
      />{" "}
      <Usercard
        name="rajashanmugam"
        image="https://cdn.bsky.app/img/avatar_thumbnail/plain/did:plc:jrdunuv53kpblscdnseuzmca/bafkreicc3dwnmsidfpn6ryy7mwn7xg44x5jdaqzorjjeacag5isgihzddi@jpeg"
      />{" "}
      <Usercard
        name="rajashanmugam"
        image="https://cdn.bsky.app/img/avatar_thumbnail/plain/did:plc:jrdunuv53kpblscdnseuzmca/bafkreicc3dwnmsidfpn6ryy7mwn7xg44x5jdaqzorjjeacag5isgihzddi@jpeg"
      />
      <p className="text-blue-500  font-bold">see more</p>
      <button className="btn btn-primary w-[60%] self-center text-white hover:bg-black border-none">
        chat with me
      </button>
    </div>
  );
};
