import PropTypes from 'prop-types';
import { Button, Select, GridRow, GridCol, Fieldset, FormGroup, Link } from 'govuk-react'
import { Link as RouterLink } from 'react-router-dom';

const Address = ({handleChange, values, addresses}) => {
  let address;

  addresses = addresses.map((a) => {
    return {
      obj: a,
      display: `${a.addressLine1}, ${a.addressLine2}, ${a.postCode}`
    }
  })

  const onChange = e => {
    address = e.target.value
  }
  const Continue = e => {
    e.preventDefault();
    handleChange('address', address);
  }

  return <GridRow>
    <GridCol setWidth="two-thirds">
      <Fieldset>
        <Fieldset.Legend size="XL" isPageHeading>Where is the repair located?</Fieldset.Legend>
        <form action="">
          <FormGroup>
            <Select
              input={{
                name: 'address',
                onChange: onChange
              }}
            >
              <option value={undefined}>
                {addresses?.length} addresses found
              </option>
              {addresses?.map((address, i) => (
                <option value={Object.values(address.obj)} key={i}>
                  {address.display}
                </option>
              ))}
            </Select>
          </FormGroup>
          <Link as={RouterLink} to="not-eligible">I can&apos;t find my address on this list</Link>
          <br/>
          <br/>
          <Button onClick={Continue} >Continue</Button>
        </form>
      </Fieldset>
    </GridCol>
  </GridRow>
};

Address.defaultProps = {
  addresses: []
};

Address.propTypes = {
  addresses: PropTypes.array,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default Address;
