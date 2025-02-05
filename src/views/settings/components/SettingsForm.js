// src/views/settings/components/SettingsForm.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useSettings } from '../../hooks/useSettings';
import { InputField } from './InputField';
import { ToggleSwitch } from './ToggleSwitch';
import { SelectDropdown } from './SelectDropdown';
import { settingsService } from '../../services/settingsService';

const SettingsForm = ({ settingType, initialValues, onSave, onCancel }) => {
  const { data, updateSetting, loading, error } = useSettings();
  const [formData, setFormData] = useState(initialValues);
  const { register, handleSubmit, errors, reset } = useForm();

  // Initialize form with initial values or fetched data
  useEffect(() => {
    if (data) {
      reset(data);
      setFormData(data);
    }
  }, [data, reset]);

  const onSubmit = async (values) => {
    try {
      await updateSetting(settingType, values);
      onSave();
    } catch (err) {
      console.error('Error saving settings:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Render input fields dynamically */}
      {settingType === 'theme' && (
        <>
          <InputField
            label="Color Scheme"
            name="colorScheme"
            placeholder="Enter a color scheme"
            defaultValue={formData.colorScheme}
            ref={register({ required: true })}
            error={errors.colorScheme}
          />
          <ToggleSwitch
            label="Enable Dark Mode"
            name="darkMode"
            checked={formData.darkMode}
            onChange={(e) => setFormData({ ...formData, darkMode: e.target.checked })}
          />
        </>
      )}

      {settingType === 'notifications' && (
        <>
          <ToggleSwitch
            label="Enable Notifications"
            name="notificationsEnabled"
            checked={formData.notificationsEnabled}
            onChange={(e) => setFormData({ ...formData, notificationsEnabled: e.target.checked })}
          />
          <SelectDropdown
            label="Notification Frequency"
            name="notificationFrequency"
            options={['Instant', 'Hourly', 'Daily']}
            selected={formData.notificationFrequency}
            onChange={(e) => setFormData({ ...formData, notificationFrequency: e.target.value })}
          />
        </>
      )}

      {settingType === 'integrations' && (
        <>
          <SelectDropdown
            label="Third-Party Integration"
            name="integration"
            options={['Salesforce', 'Zapier', 'Google Analytics']}
            selected={formData.integration}
            onChange={(e) => setFormData({ ...formData, integration: e.target.value })}
          />
        </>
      )}

      {/* Submit button */}
      <div className="flex justify-between">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className={`bg-blue-500 text-white py-2 px-4 rounded ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          Save Settings
        </button>
      </div>

      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </form>
  );
};

SettingsForm.propTypes = {
  settingType: PropTypes.string.isRequired,
  initialValues: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default SettingsForm;
