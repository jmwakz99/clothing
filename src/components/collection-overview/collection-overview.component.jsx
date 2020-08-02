import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => {
  console.log(collections);
  return (
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
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
