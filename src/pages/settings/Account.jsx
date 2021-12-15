import React from "react";

import "../../assets/scss/account.scss";

export default function Account() {
  return (
    <div className="p-6 divide-y-2 divide-gray-300">
      <section className="flex p-2 py-6 justify-start items-center gap-x-4">
        <div className="flex flex-col items-center gap-2">
          <h5 className="font-bold text-md">Avatar</h5>
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="user-img"
            className="rounded-full h-[4rem] w-auto"
          />
        </div>

        <div className="flex flex-row items-center justify-center">
          <button className="btn-white">Upload</button>
          <button className="btn-white">Remove</button>
        </div>
      </section>

      <form className="flex">
        <div className="form-group flex-1">
          <label className="label-txt font-bold">Display name</label>
          <p className="grey-txt">Visible to other members</p>
          <input type="text" className="input-field" />
        </div>
        <div className="form-group">
          <label className="label-txt">Full name</label>
          <p className="grey-txt">How do you want to be called?</p>
          <input type="text" className="input-field" />
        </div>
      </form>

      <form className="flex">
        <div className="form-group">
          <label className="label-txt">Email address</label>
          <p className="grey-txt">For notifications and logging in</p>
          <input type="email" className="input-field" />
        </div>
        <div className="form-group">
          <label className="label-txt">Phone number</label>
          <p className="grey-txt">For receiving notifications</p>
          <input type="number" className="input-field" />
        </div>
      </form>
      <section>
        <h5 className="label-txt">Linked Accounts</h5>
        <p className="grey-txt">
          We use this to let you sign in and populate your profile information
        </p>
        <div>
          <span>
            <img src="" alt="google icon" />
            Sign in with Google
          </span>
          <button className="btn-white">Connect</button>
        </div>
      </section>
      <section>
        <div>
          <h5 className="label-txt">Delete account</h5>
          <p className="grey-txt">
            By deleting your account you will lose all your data
          </p>
        </div>
        <p>Delete account..</p>
      </section>
      <section>
        <button className="btn-blue float-right my-4">Save changes</button>
      </section>
    </div>
  );
}
