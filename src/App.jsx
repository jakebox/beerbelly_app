import React from "react";
import { Button, Space, Title, Text, TextInput } from "@mantine/core";
import "@mantine/core/styles.css";
import "./Gambarino/Gambarino.css";
import "./index.css";

import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-gradient-to-r from-teal-950 via-green-950 to-emerald-900 h-screen">
      <div>
        <div className="h-screen flex items-center justify-center px-16 flex-col">
          <div className="flex flex-row items-center mb-3">
            <Title c="white" className="text-5xl mr-5">
              Beer Belly
            </Title>
            <Text c="white" fs={"italic"} className="text-lg">
              A new way to rate, share, and enjoy your beers.
            </Text>
          </div>
          <div className="flex flex-col items-center">
            <Text c="white" mb={22} my={20}>
              Sign up to be notified when our public beta opens, and become one of the first users of Beer Belly.
            </Text>
            <TextInput
              className="text-white"
              placeholder="hello@gmail.com"
              label="Email address"
              size="md"
              withAsterisk
              value={email}
              mb={4}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
            <Button my={10} variant="filled">
              Submit
            </Button>
          </div>
          <Text c="white" my={30} size={"sm"} fs={"italic"}>
            © 2024 Null Pointer Industries
          </Text>
        </div>
      </div>
    </div>
  );
}

export default App;
