import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {
  addTocart,
  removeFromcart,
  incrementQuantity,
  decrementQuantity,
} from '../cartreducer';
class Homescreen extends Component {
  addToCart = item => {
    this.props.addToCart(item);
  };
  removeFromCart = item => {
    this.props.removeFromCart(item);
  };
  incrementQuantity = item => {
    this.props.incrementQuantity(item);
  };
  decrementQuantity = item => {
    if (item.quantity === 1) {
      this.props.removeFromCart(item);
    } else {
      this.props.decrementQuantity(item);
    }
  };
  render() {
    const {cart,totalPrice} = this.props;
    console.log('cart', cart);
    const Images = [
      {
        id: '0',
        image:
          'https://lp2.hm.com/hmgoepprod?set=source[/e0/94/e094aad11ca990de29a7e7be2abc7d9653db4467.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
        name: 'A-line modal-blend dress',
        price: 'INR-2,999.00',
      },
      {
        id: '1',
        image:
          'https://lp2.hm.com/hmgoepprod?set=source[/25/aa/25aa62a12c7f7b46c45dc90fd65b7123fc870331.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
        name: 'Oversized tie-detail dress',
        price: 'INR-2,699.00',
      },
      {
        id: '2',
        image:
          'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F81%2Fa8%2F81a8767bdd37d1bd72678bfe9f312d29c6bf8f31.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        name: 'Off-the-shoulder dress',
        price: 'INR-.2,299.00',
      },
      {
        id: '3',
        image:
          'https://lp2.hm.com/hmgoepprod?set=source[/57/e4/57e428c5e93715f99315e267d053601e2a131382.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
        name: 'Drawstring-detail dress',
        price: 'INR-.1,799.00',
      },
      {
        id: '4',
        image:
          'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fda%2F81%2Fda81ed97095df6a55c182c99489b0016fa33c777.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        name: 'Flounce-trimmed crêpe dress',
        price: 'INR- 1,799.00',
      },
      {
        id: '5',
        image:
          'https://lp2.hm.com/hmgoepprod?set=source[/87/40/87409693c7aa30bd78355a8049b78d942b21d4cf.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
        name: 'Long chiffon dress',
        price: 'INR- 5,499.00',
      },
      {
        id: '6',
        image:
          'https://lp2.hm.com/hmgoepprod?set=source[/aa/f2/aaf2e0c054fafb7b16b1ed6d6dcb03d7a3ff04e2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
        name: 'Sequined playsuit',
        price: 'INR- 2,999.00',
      },
      {
        id: '7',
        image:
          'https://lp2.hm.com/hmgoepprod?set=source[/f4/db/f4db434e502da269d5a6b02c7c2543718012141c.jpg],origin[dam],category[ladies_dresses_cutout],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
        name: 'Knot-detail cut-out dress',
        price: 'INR- 1,999.00',
      },
      {
        id: '8',
        image:
          'https://lp2.hm.com/hmgoepprod?set=source[/26/b2/26b21df42be9d7b8f02c7046b8396446c93ecf0c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
        name: 'Cut-out flounce-trimmed jumpsuit',
        price: 'INR- 2,999.00',
      },
      {
        id: '9',
        image:
          'https://lp2.hm.com/hmgoepprod?set=source[/a5/51/a551eb3bf21801cce27085e43f99328220107541.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
        name: 'Long chiffon dress',
        price: 'INR-1,499.00',
      },
      {
        id: '10',
        image:
          'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F64%2Fea%2F64eac6db43d33a5d78e2f18c40ae9ead55f34e5a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        name: 'Terry playsuit',
        price: '1,999.00',
      },
    ];
    return (
      <ScrollView>
        {/* <Text style={{color:'black'}}>{totalPrice}</Text> */}
        <Text style={styles.mainText}>Redux cart system</Text>
        {Images.map(item => (
          <Pressable key={item.id} style={styles.keystyle}>
            <View style={styles.imageView}>
              <Image style={styles.imageStyle} source={{uri: item.image}} />
            </View>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              {cart.some(value => value.id == item.id) ? (
                <Pressable onPress={() => this.removeFromCart(item)}>
                  <Text style={styles.addToCart}>REMOVE-FROM-CART</Text>
                </Pressable>
              ) : (
                <Pressable onPress={() => this.addToCart(item)}>
                  <Text style={styles.addToCart}>ADD TO CART</Text>
                </Pressable>
              )}
            </View>
          </Pressable>
        ))}
        {cart.map((item, index) => (
          <View style={{ padding: 10 }} key={index}>
            <Text>{item.name}</Text>
            <Image
              style={{ width: 100, height: 100, borderRadius: 8, marginTop: 6 }}
              source={{ uri: item.image }}
            />
            <Pressable
              style={{
                flexDirection: "row",
                marginTop: 20,
                alignItems: "center",
                backgroundColor: "#FF3366",
                borderRadius: 5,
                width: 120,
              }}
            >
              <Pressable onPress={() => this.decrementQuantity(item)}>
                <Text
                  style={{
                    fontSize: 25,
                    color: "white",
                    paddingHorizontal: 10,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    paddingHorizontal: 10,
                  }}
                >
                  {item.quantity}
                </Text>
              </Pressable>

              <Pressable onPress={() => this.incrementQuantity(item)}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    paddingHorizontal: 10,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
  totalPrice: state.cart.totalPrice,
});

const mapDispatchToProps = {
  addToCart: addTocart,
  removeFromCart: removeFromcart,
  incrementQuantity: incrementQuantity,
  decrementQuantity: decrementQuantity,
 
};

export default connect(mapStateToProps, mapDispatchToProps)(Homescreen);

const styles = StyleSheet.create({
  mainText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  keystyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    margin: 10,
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  name: {
    fontWeight: 'bold',
  },
  addToCart: {
    borderColor: 'grey',
    borderWidth: 1,
    marginVertical: 10,
    padding: 5,
  },
  pressableDesign: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF3366',
    borderRadius: 5,
    width: 120,
  },
  signsDesignDesign:{
    fontSize:20,
    color:'white',
    paddingHorizontal:10
  }
});
