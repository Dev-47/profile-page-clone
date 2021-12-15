import React, { useState } from "react";
import Nav from "../components/Nav";
import Controller from "../components/tab/Controller";
import Tab from "../components/tab/Tab";
import TabView from "../components/tab/TabView";
import BaseLayout from "../layouts/BaseLayout";
import ContentLayout from "../layouts/ContentLayout";
import Account from "./settings/Account";

function Settings() {
  const tab_content = () => (
    <div>
      <TabView name={"accounts"}>
        <span>Accounts</span>
        <Account />
      </TabView>

      <TabView name={"notifications"}>
        <span>Notifcaiton</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          libero voluptatibus quis reprehenderit recusandae corporis maxime
          quibusdam quasi asperiores ea temporibus exercitationem beatae,
          voluptates iure quo inventore tenetur quae dolorem.
        </p>
      </TabView>

      <TabView name={"password"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          libero voluptatibus quis reprehenderit recusandae corporis maxime
          quibusdam quasi asperiores ea temporibus exercitationem beatae,
          voluptates iure quo inventore tenetur quae dolorem.
        </p>
      </TabView>

      <TabView name={"integrations"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          libero voluptatibus quis reprehenderit recusandae corporis maxime
          quibusdam quasi asperiores ea temporibus exercitationem beatae,
          voluptates iure quo inventore tenetur quae dolorem.
        </p>
      </TabView>

      <TabView name={"data_export"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          libero voluptatibus quis reprehenderit recusandae corporis maxime
          quibusdam quasi asperiores ea temporibus exercitationem beatae,
          voluptates iure quo inventore tenetur quae dolorem.
        </p>
      </TabView>

      <TabView name={"item"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          libero voluptatibus quis reprehenderit recusandae corporis maxime
          quibusdam quasi asperiores ea temporibus exercitationem beatae,
          voluptates iure quo inventore tenetur quae dolorem.
        </p>
      </TabView>
    </div>
  );

  return (
    <BaseLayout>
      <Nav />

      <ContentLayout>
        <div>
          <div className="py-4">
            <h4 className="text-3xl font-bold">Settings</h4>
          </div>

          <Tab
            controller={
              <Controller
                items={[
                  { name: "accounts", text: "Account" },
                  { name: "notifications", text: "Notifications" },
                  { name: "password", text: "Password" },
                  { name: "integrations", text: "Integrations" },
                  { name: "data_export", text: "Data export" },
                  { name: "item", text: "Item" },
                ]}
                use_col={false}
                active_tab={"accounts"}
              />
            }
            content={tab_content()}
          />
        </div>
      </ContentLayout>
    </BaseLayout>
  );
}

export default Settings;
