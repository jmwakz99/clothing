import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => {
      return (
        <div key={id}>
          <CollectionPreview {...otherCollectionProps} />
        </div>
      );
    })}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
