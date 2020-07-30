import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item.component";
import { directorySelectorSections } from "../../redux/directory/directory.selectors";
import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionsProps }) => (
        <MenuItem key={id} {...otherSectionsProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: directorySelectorSections,
});
export default connect(mapStateToProps)(Directory);
