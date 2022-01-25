package com.springBoot.helpingHands;

import java.io.Serializable;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.Objects;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.type.IntegerType;
import org.hibernate.type.StringType;
import org.hibernate.type.Type;
import org.hibernate.usertype.CompositeUserType;

public class LocationType implements CompositeUserType {

	@Override
	public String[] getPropertyNames() {
		return new String[] { "state", "city", "zip"};
	}

	@Override
	public Type[] getPropertyTypes() {
		return new Type[] { StringType.INSTANCE, StringType.INSTANCE, IntegerType.INSTANCE};
	}

	@Override
	public Object getPropertyValue(Object component, int property) throws HibernateException {
		Location helpLocation = (Location) component;
		
		switch(property) {
			case 0: return helpLocation.getState();
			case 1: return helpLocation.getCity();
			case 2: return Integer.valueOf(helpLocation.getZip());
		}
		throw new IllegalArgumentException(property + " is an invalid property index for class type "
			      + component.getClass().getName());
	}

	@Override
	public void setPropertyValue(Object component, int property, Object value) throws HibernateException {
		// TODO Auto-generated method stub

	}

	@Override
	public Class returnedClass() {
		return Location.class;
	}

	@Override
	public boolean equals(Object x, Object y) throws HibernateException {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public int hashCode(Object x) throws HibernateException {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Object nullSafeGet(ResultSet rs, String[] names, SharedSessionContractImplementor session, Object owner)
			throws HibernateException, SQLException {
		
		String state = rs.getString(names[0]);
		
		if(rs.wasNull())
			return null;
		
		String city = rs.getString(names[1]);
		Integer zip = rs.getInt(names[2]);
		
		Location helpLocation = new Location(state, city, zip);
		
		return helpLocation;
	}

	@Override
	public void nullSafeSet(PreparedStatement st, Object value, int index, SharedSessionContractImplementor session)
			throws HibernateException, SQLException {
		if (Objects.isNull(value)) {
	        st.setNull(index, Types.VARCHAR);
	        st.setNull(index + 1, Types.VARCHAR);
	        st.setNull(index + 2, Types.INTEGER);
	    } else {
	        Location helpLocation = (Location) value;
	        st.setString(index, helpLocation.getState());
	        st.setString(index + 1, helpLocation.getCity());
	        st.setInt(index + 2, helpLocation.getZip());
	    }

	}

	@Override
	public Object deepCopy(Object value) throws HibernateException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean isMutable() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Serializable disassemble(Object value, SharedSessionContractImplementor session) throws HibernateException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object assemble(Serializable cached, SharedSessionContractImplementor session, Object owner)
			throws HibernateException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object replace(Object original, Object target, SharedSessionContractImplementor session, Object owner)
			throws HibernateException {
		// TODO Auto-generated method stub
		return null;
	}

}
