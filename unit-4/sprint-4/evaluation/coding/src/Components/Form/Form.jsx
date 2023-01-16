import {
  FormControl,
  Input,
  Checkbox,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import axios from "axios";
export default function Form() {
  // TODO: Remove below const and instead import them from chakra
  let userRef = useRef({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    isBachelorAllowed: false,
    isMarriedAllowed: false,
  });
  const inputData = (e) => {
    if (e.target.type == "checkbox") {
      userRef.current[e.target.name] = e.target.checked;
    } else {
      userRef.current[e.target.name] = e.target.value;
    }
    console.log(userRef.current);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`,
        userRef.current
      )
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className="addHouseContainer">
      <form className="form" onSubmit={onSubmit}>
        <FormControl>
          <Input
            className="name"
            placeholder="Name"
            name="name"
            onChange={inputData}
          />
          <Input
            className="ownerName"
            placeholder="Owners name"
            name="ownerName"
            onChange={inputData}
          />
          <Input
            className="address"
            placeholder="Address"
            name="address"
            onChange={inputData}
          />
          <Input
            className="areaCode"
            placeholder="Area code"
            name="areaCode"
            onChange={inputData}
          />
          <Input
            className="rent"
            placeholder="Rent"
            name="rent"
            onChange={inputData}
          />
          <Checkbox
            className="bachelor"
            onChange={inputData}
            name="isBachelorAllowed"
          >
            <FormLabel>Married Tenants Allowed</FormLabel>
          </Checkbox>
          <br />
          <Checkbox
            className="married"
            onChange={inputData}
            name="isMarriedAllowed"
          >
            <FormLabel>Bachelor Tenants Allowed</FormLabel>
          </Checkbox>
          <br />
          <Button className="submitBtn" type="submit">
            {" "}
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}